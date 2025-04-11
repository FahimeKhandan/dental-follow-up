import { getDiseaseById } from '../../../lib/diseases';
import DiseaseDetail from './components/DiseaseDetail';

export default function DiseasePage({ params }: { params: { id: string } }) {
  const disease = getDiseaseById(params.id);

  if (!disease) {
    return <div>Disease not found</div>;
  }

  return <DiseaseDetail disease={disease} />;
}
