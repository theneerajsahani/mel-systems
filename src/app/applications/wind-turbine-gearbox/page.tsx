import { getApplicationById } from '@/lib/applications';
import DynamicApplicationPage from '@/components/DynamicApplicationPage';

export default function Page() {
  const application = getApplicationById('wind-turbine-gearbox');
  if (!application) return null;
  return <DynamicApplicationPage application={application} />;
} 