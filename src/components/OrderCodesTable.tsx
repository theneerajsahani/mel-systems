"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface OrderCodeChoice {
  range: string;
  code: string;
}

interface OrderCodeOption {
  label: string;
  choices: OrderCodeChoice[];
}

interface OrderCodes {
  baseCode: string;
  description: string;
  options: OrderCodeOption[];
  note?: string;
}

interface OrderCodesTableProps {
  orderCodes: OrderCodes;
  className?: string;
}

export default function OrderCodesTable({ orderCodes, className = "" }: OrderCodesTableProps) {
  return (
    <div className={`space-y-6 ${className}`}>
      {/* Base Code Section */}
      <Card className="shadow-sm border border-gray-200">
        <CardContent className="p-6">
          <div className="text-center space-y-4">
            <h3 className="text-xl font-bold text-gray-900">Order Code</h3>
            <div className="inline-flex items-center bg-gradient-to-r from-blue-50 to-indigo-50 px-6 py-3 rounded-lg border-2 border-blue-200">
              <code className="text-2xl font-bold text-blue-900 font-mono tracking-wider">
                {orderCodes.baseCode}
              </code>
            </div>
            <p className="text-gray-600 text-sm italic">
              {orderCodes.description}
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Options Section */}
      {orderCodes.options.map((option, optionIndex) => (
        <Card key={optionIndex} className="shadow-sm border border-gray-200">
          <CardContent className="p-6">
            <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
              <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
              {option.label}
            </h4>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-3 px-4 font-semibold text-gray-700 bg-gray-50 rounded-tl-lg">
                      {option.label}
                    </th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-700 bg-gray-50 rounded-tr-lg">
                      *Replace XXXX with
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {option.choices.map((choice, choiceIndex) => (
                    <tr 
                      key={choiceIndex} 
                      className={`border-b border-gray-100 hover:bg-gray-50 transition-colors ${
                        choiceIndex === option.choices.length - 1 ? 'border-b-0' : ''
                      }`}
                    >
                      <td className="py-3 px-4 text-gray-800">
                        {choice.range}
                      </td>
                      <td className="py-3 px-4">
                        <Badge 
                          variant="outline" 
                          className="font-mono text-lg px-3 py-1 bg-blue-50 text-blue-700 border-blue-200 hover:bg-blue-100"
                        >
                          {choice.code}
                        </Badge>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      ))}

      {/* Note Section */}
      {orderCodes.note && (
        <Card className="shadow-sm border border-amber-200 bg-amber-50">
          <CardContent className="p-4">
            <p className="text-sm text-amber-800 italic flex items-center">
              <span className="w-1 h-1 bg-amber-500 rounded-full mr-2"></span>
              {orderCodes.note}
            </p>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
