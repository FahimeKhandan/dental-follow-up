import { getDiseases } from '@/lib/diseases';
import Link from 'next/link';

export default function DiseaseList() {
  const diseases = getDiseases();

  return (
    <ul>
      {diseases.map((disease) => (
        <li key={disease.id}>
          <Link href={`/diseases/${disease.id}`}>
            {disease.name}
          </Link>
        </li>
      ))}
    </ul>
  );
}
