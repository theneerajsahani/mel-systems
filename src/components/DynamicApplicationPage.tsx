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
        <div className="flex-1 flex flex-col gap-8">
          <h1 className="text-4xl font-bold mb-1 text-blue-900 dark:text-blue-200 text-center">{application.title}</h1>
          {application.subtitle && (
            <h2 className="text-base font-normal mb-4 text-gray-500 dark:text-gray-400 text-center">{application.subtitle}</h2>
          )}
          <div className="w-full flex flex-col items-center mb-6">
            <Image
              src={application.images?.[0] || "/images/placeholder.jpg"}
              alt={application.title}
              width={380}
              height={260}
              className="rounded-lg object-contain bg-white"
              style={{ maxWidth: 380, maxHeight: 260 }}
            />
            {application.images && application.images.length > 1 && (
              <div className="flex gap-2 mt-2">
                {application.images.slice(1).map((img, idx) => (
                  <Image
                    key={idx}
                    src={img}
                    alt={application.title + " thumbnail " + (idx + 2)}
                    width={36}
                    height={36}
                    className="rounded-full object-cover bg-white border border-gray-200 dark:border-gray-800"
                    style={{ maxWidth: 36, maxHeight: 36 }}
                  />
                ))}
              </div>
            )}
          </div>
          {application.additionalInfo && application.additionalInfo.length > 0 && (
            <div className="mb-6">
              <div className="text-md font-medium text-gray-700 dark:text-gray-200 mb-2">Additional Info</div>
              <p className="text-gray-600 dark:text-gray-300 text-base">
                {application.additionalInfo.map(
                  info => `${info.title ?? ""}${info.content?.length ? ': ' + info.content.join(' ') : ''}`
                ).join(' | ')}
              </p>
            </div>
          )}
          <div className="mb-6">
            <div className="text-md font-medium text-gray-700 dark:text-gray-200 mb-2">Industries</div>
            <div className="flex flex-wrap gap-2 mt-1">
              {application.industry?.map((ind, i) => (
                <span
                  key={i}
                  className="inline-flex items-center px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 text-xs font-medium border border-gray-200 dark:border-gray-700"
                >
                  {ind}
                </span>
              ))}
            </div>
          </div>
          {application.requirements && application.requirements.length > 0 && (
            <div className="mb-6">
              <div className="text-md font-medium text-gray-700 dark:text-gray-200 mb-2">Requirements</div>
              <ul className="list-disc ml-6 mt-1 space-y-1 text-gray-700 dark:text-gray-300">
                {application.requirements.map((req, i) => (
                  <li key={i}>{req}</li>
                ))}
              </ul>
            </div>
          )}
          {application.solutions && application.solutions.length > 0 && (
            <div className="mb-6">
              <div className="text-md font-medium text-gray-700 dark:text-gray-200 mb-2">Solutions</div>
              <ul className="list-disc ml-6 mt-1 space-y-1 text-gray-700 dark:text-gray-300">
                {application.solutions.map((sol, i) => (
                  <li key={i}>{sol}</li>
                ))}
              </ul>
            </div>
          )}
          {application.benefits && application.benefits.length > 0 && (
            <div className="mb-6">
              <div className="text-md font-medium text-gray-700 dark:text-gray-200 mb-2">Key Benefits</div>
              <ul className="list-disc ml-6 mt-1 space-y-1 text-gray-700 dark:text-gray-300">
                {application.benefits.map((benefit, i) => (
                  <li key={i}>{benefit}</li>
                ))}
              </ul>
            </div>
          )}
          {application.commercialBenefit && application.commercialBenefit.length > 0 && (
            <div className="mb-6">
              <div className="text-md font-medium text-gray-700 dark:text-gray-200 mb-2">Commercial Benefit</div>
              <ul className="list-disc ml-6 mt-1 space-y-1 text-gray-700 dark:text-gray-300">
                {application.commercialBenefit.map((cb, i) => (
                  <li key={i}>{cb}</li>
                ))}
              </ul>
            </div>
          )}
          {application.highlights && application.highlights.length > 0 && (
            <div className="mb-6">
              <div className="text-md font-medium text-gray-700 dark:text-gray-200 mb-2">Highlights</div>
              <ul className="list-disc ml-6 mt-1 space-y-1 text-gray-700 dark:text-gray-300">
                {application.highlights.map((hl, i) => (
                  <li key={i}>{hl}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
