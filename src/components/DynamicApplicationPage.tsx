import { Application } from "@/lib/applications";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import ApplicationSidebar from "./ApplicationSidebar";
import Navbar from "./Navbar";

interface DynamicApplicationPageProps {
  application: Application;
}

export default function DynamicApplicationPage({
  application,
}: DynamicApplicationPageProps) {
  return (
    <>
      <Navbar />
      <div className="flex flex-col md:flex-row max-w-7xl mx-auto py-12 px-4 gap-8">
        <div className="hidden md:block w-64 flex-shrink-0">
          <ApplicationSidebar />
        </div>
        <div className="flex-1">
          <div className="mb-8 flex flex-col md:flex-row gap-8 items-center">
            <div className="flex-1">
              <h1 className="text-3xl font-bold mb-2">{application.title}</h1>
              <p className="text-gray-700 mb-4">
                {application.additionalInfo
                  ? `${application.additionalInfo.title}${application.additionalInfo.content.length ? ': ' + application.additionalInfo.content.join(' ') : ''}`
                  : ''}
              </p>
              <div className="mb-2">
                <span className="font-semibold">Industries: </span>
                {application.industry?.join(", ")}
              </div>
              <div className="mb-2">
                <span className="font-semibold">Key Benefits:</span>
                <ul className="list-disc ml-6">
                  {(application.benefits || []).map((benefit, i) => (
                    <li key={i}>{benefit}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="flex-shrink-0">
              <Image
                src={application.images?.[0] || "/images/placeholder.jpg"}
                alt={application.title}
                width={350}
                height={250}
                className="rounded-lg shadow-lg object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
