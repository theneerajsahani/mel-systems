import { getApplicationById } from '@/lib/applications';
import DynamicApplicationPage from '@/components/DynamicApplicationPage';
import { notFound } from 'next/navigation';
import { applications } from '@/lib/applications';

interface ApplicationPageProps {
  params: { slug: string[] };
}

export default function ApplicationPage({ params }: ApplicationPageProps) {
  const slug = params.slug?.[0];
  const application = getApplicationById(slug);

  if (!application) return notFound();

  return <DynamicApplicationPage application={application} />;
}

export function generateStaticParams() {
  return applications.map(app => ({ slug: [app.id] }));
} 