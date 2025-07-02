"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { applications } from "@/lib/applications";

function ApplicationSidebar() {
  const pathname = usePathname();
  // Sort applications alphabetically by title
  const sortedApps = [...applications].sort((a, b) =>
    a.title.localeCompare(b.title),
  );

  return (
    <aside className="w-full max-w-xs p-4 bg-gray-50 border-r border-gray-200 h-full sticky top-0">
      <h2 className="text-lg font-bold mb-4">Applications</h2>
      <nav className="space-y-1">
        {sortedApps.map((app) => {
          const isActive = pathname.includes(`/applications/${app.id}`);
          return (
            <Link
              key={app.id}
              href={`/applications/${app.id}`}
              className={`block px-3 py-2 rounded-md text-sm font-medium transition-colors ${isActive ? "bg-blue-100 text-blue-700 font-semibold" : "text-gray-700 hover:bg-gray-100"}`}
            >
              {app.title}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}

export default ApplicationSidebar;
