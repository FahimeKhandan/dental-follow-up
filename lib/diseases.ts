import diseasesData from '../data/diseases.json';

export interface Disease {
  id: string;
  name: string;
  description: string[];
  imageUrl: string;
}

export function getDiseases(): Disease[] {
  return diseasesData;
}

export function getDiseaseById(id: string): Disease | undefined {
  return diseasesData.find(disease => disease.id === id);
}
