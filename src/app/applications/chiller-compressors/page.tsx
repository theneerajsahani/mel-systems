import { getApplicationById } from "@/lib/applications";
import DynamicApplicationPage from "@/components/DynamicApplicationPage";

export default function Page() {
  const application = getApplicationById("chiller-compressors");
  if (!application) return null;
  return <DynamicApplicationPage application={application} />;
}
