import Image from 'next/image';
import { Disease } from '@/lib/diseases';

export default function DiseaseDetail({ disease }: { disease: Disease }) {
  return (
    <div>
      <h1>{disease.name}</h1>
      <Image src={disease.imageUrl} alt={disease.name} width={300} height={200} />
      {disease.description.map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))}
    </div>
  );
}
