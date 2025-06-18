"use client"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

export interface TechnicalSpec {
  label: string
  value: string
}

export interface TechnicalSpecsSection {
  title: string
  specs: TechnicalSpec[]
  additionalText?: string  // Optional field for additional text below the table
}

interface TechnicalSpecsTableProps {
  title?: string
  sections: TechnicalSpecsSection[]
  className?: string
}

export default function TechnicalSpecsTable({ 
  title = "TECHNICAL SPECIFICATIONS", 
  sections, 
  className = "" 
}: TechnicalSpecsTableProps) {
  return (
    <div className={` overflow-hidden ${className}`}>
      {/* Header */}
      <div className="">
        <h2 className="text-[16px] font-bold uppercase md:text-[24px]">{title}</h2>
      </div>

      {/* Sections */}
      <div className="space-y-4 p-4">
        {sections.map((section, sectionIndex) => (
          <div key={sectionIndex} className="border border-gray-300 rounded-lg overflow-hidden">
            {/* Section Header */}
            <div className="bg-gray-100 px-6 py-4 border-b border-gray-300">
              <h3 className="text-[14px] font-semibold tracking-wide text-gray-800 md:text-[18px]">
                {section.title}
              </h3>
            </div>

            {/* Section Table */}
            <Table>
              <TableBody>
                {section.specs.map((spec, specIndex) => (
                  <TableRow key={specIndex} className="hover:bg-gray-50 border-b border-gray-200 last:border-b-0">
                    <TableCell className="font-medium bg-gray-600 text-white py-3 px-6 w-1/3 border-r border-gray-300 text-[14px] md:text-[16px]">
                      {spec.label}
                    </TableCell>
                    <TableCell className="py-3 px-6 text-gray-800 bg-white text-[14px] md:text-[16px]">
                      {spec.value}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>

            {/* Additional Text */}
            {section.additionalText && (
              <div className="px-6 py-3 text-sm text-gray-600 italic bg-gray-50 border-t border-gray-200 md:text-base">
                {section.additionalText}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}