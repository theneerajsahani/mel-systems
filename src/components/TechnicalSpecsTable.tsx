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
    <div className={`${className}`}>
      {/* Header - only show if title is provided */}
      {title && (
        <div className="p-6 lg:p-8 border-b border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
        </div>
      )}

      {/* Sections */}
      <div className="p-6 lg:p-8 space-y-6">
        {sections.map((section, sectionIndex) => (
          <div key={sectionIndex} className="border border-gray-200 rounded-lg overflow-hidden">
            {/* Section Header */}
            <div className="bg-gray-800 px-6 py-4">
              <h3 className="text-lg font-semibold text-white">
                {section.title}
              </h3>
            </div>

            {/* Section Table - Responsive */}
            <div className="overflow-x-auto">
              <Table className="min-w-full">
                <TableBody>
                  {section.specs.map((spec, specIndex) => (
                    <TableRow key={specIndex} className="hover:bg-gray-50 border-b border-gray-200 last:border-b-0">
                      <TableCell className="font-medium bg-gray-100 text-gray-900 py-4 px-6 w-1/3 min-w-[160px] border-r border-gray-200 text-sm">
                        {spec.label}
                      </TableCell>
                      <TableCell className="py-4 px-6 text-gray-700 bg-white text-sm break-words">
                        {spec.value}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>

            {/* Additional Text */}
            {section.additionalText && (
              <div className="px-6 py-3 text-sm text-gray-600 italic bg-gray-50 border-t border-gray-200">
                {section.additionalText}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}