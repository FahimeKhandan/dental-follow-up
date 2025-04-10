"use client"
import { useState, useEffect } from 'react';
import axios from 'axios';
import { IDisease } from '@/lib/models/Disease';

export default function Home() {
    const [diseases, setDiseases] = useState<IDisease[]>([]);
    const [selectedDisease, setSelectedDisease] = useState<IDisease | null>(null);
    const [selectedDiseases, setSelectedDiseases] = useState<IDisease[]>([]);

    useEffect(() => {
        axios.get('/api/diseases')
            .then(response => {
                setDiseases(response.data);
            })
            .catch(error => console.error(error));
    }, []);

    const handleDiseaseClick = async (diseaseId: string) => {
        try {
            const response = await axios.get(`/api/diseases/${diseaseId}`);
            setSelectedDisease(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    const handleMultipleDiseasesClick = async (ids: string[]) => {
        try {
            const response = await axios.post('/api/diseases', ids);
            setSelectedDiseases(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
            <h1>Diseases</h1>
            <ul>
                {diseases.map((disease: IDisease) => (
                    <li key={disease._id} >
                        <button onClick={() => handleDiseaseClick(disease._id)}>{disease.name}</button>
                    </li>
                ))}
            </ul>

            {selectedDisease && (
                <div>
                    <h2>{selectedDisease.name}</h2>
                    <p>{selectedDisease.description}</p>
                </div>
            )}

            <button onClick={() => handleMultipleDiseasesClick([diseases[0]._id, diseases[1]._id])}>
                Fetch Multiple Diseases
            </button>

            {selectedDiseases.length > 0 && (
                <div>
                    <h2>Selected Diseases</h2>
                    {selectedDiseases.map((disease: IDisease) => (
                        <div key={disease._id}>
                            <h3>{disease.name}</h3>
                            <p>{disease.description}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
