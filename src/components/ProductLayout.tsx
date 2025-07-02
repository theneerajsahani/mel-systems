"use client";

import { ReactNode } from "react";
import ProductSidebar from "@/components/ProductSidebar";
import ProductBreadcrumb from "@/components/ProductBreadcrumb";
import { ChevronLeftIcon } from "lucide-react";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface ProductLayoutProps {
  children: ReactNode;
  breadcrumbItems: BreadcrumbItem[];
  className?: string;
}

export default function ProductLayout({
  children,
  breadcrumbItems,
  className,
}: ProductLayoutProps) {
  return (
    <div
      className={`flex flex-col px-2 sm:px-4 md:px-6 lg:px-8 xl:px-12 py-4 max-w-full overflow-hidden ${className || ""}`}
    >
      {/* Breadcrumb */}
      <ProductBreadcrumb items={breadcrumbItems} />

      {/* Back Button for Mobile */}
      <div className="flex items-center py-2 text-[14px] sm:hidden">
        <ChevronLeftIcon className="w-4 h-4" />
        Back
      </div>

      {/* Divider */}
      <div className="border"></div>

      {/* Main content */}
      <div className="flex flex-col xl:flex-row gap-3 lg:gap-4 xl:gap-6 py-4 lg:py-6 xl:py-8 min-w-0">
        {/* Sidebar */}
        <div className="w-full xl:w-72 xl:flex-shrink-0 order-2 xl:order-1">
          <ProductSidebar />
        </div>

        {/* Content */}
        <div className="flex flex-col gap-3 md:gap-4 flex-1 order-1 xl:order-2 min-w-0 overflow-hidden">
          {children}
        </div>
      </div>
    </div>
  );
}
