'use client';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import TechnicalSpecsTable, { TechnicalSpecsSection } from '@/components/TechnicalSpecsTable';
import Image from 'next/image';

export default function CablesPage() {
    const manufacturers = [
        { name: 'TanDelta', href: '/products/oil-conditioning/tandelta', isActive: true },
        { name: 'Hydrotechnik', href: '/products/oil-conditioning/hydrotechnik', isActive: false },
        { name: 'Filtertechnik', href: '/products/oil-conditioning/filtertechnik', isActive: false },
        { name: 'Evamo', href: '/products/oil-conditioning/evamo', isActive: false },
    ];

    // Cable data with technical specifications
    const cables = [
        {
            name: 'Cable J',
            image: '/products/oil conditioning/Tandelta/Cables/Cable-J.png',
            specs: [
                { label: 'Length', value: '1 Meter' },
                { label: 'Diameter', value: 'Standard Harsh-Duty Cable' },
                { label: 'Maximum Temp Rating', value: '200°C' },
                { label: 'Material', value: 'High-Temperature Resistant' },
                { label: 'Connector 1', value: 'Cable Lug for ...' },
                { label: 'Connector 2', value: 'Cable Lug for ...' },
                { label: 'Weight', value: 'TBD' },
                { label: 'Range', value: 'TMG1000006003B' },
                { label: 'Connector 3', value: 'Extended Terminal Black' },
                { label: 'Connector 4', value: 'Extended Terminal Black' }
            ]
        },
        {
            name: 'Cable J',
            image: '/products/oil conditioning/Tandelta/Cables/Cable-J.png',
            specs: [
                { label: 'Length', value: '3 Meter' },
                { label: 'Diameter', value: 'Standard Harsh-Duty Cable' },
                { label: 'Maximum Temp Rating', value: '200°C' },
                { label: 'Material', value: 'High-Temperature Resistant' },
                { label: 'Connector 1', value: 'Cable Lug for ...' },
                { label: 'Connector 2', value: 'Cable Lug for ...' },
                { label: 'Weight', value: 'TBD' },
                { label: 'Range', value: 'TMG1000006003B' },
                { label: 'Connector 3', value: 'Extended Terminal Black' },
                { label: 'Connector 4', value: 'Extended Terminal Black' }
            ]
        },
        {
            name: 'Cable J',
            image: '/products/oil conditioning/Tandelta/Cables/Cable-J.png',
            specs: [
                { label: 'Length', value: '5 Meter' },
                { label: 'Diameter', value: 'Standard Harsh-Duty Cable' },
                { label: 'Maximum Temp Rating', value: '200°C' },
                { label: 'Material', value: 'High-Temperature Resistant' },
                { label: 'Connector 1', value: 'Cable Lug for ...' },
                { label: 'Connector 2', value: 'Cable Lug for ...' },
                { label: 'Weight', value: 'TBD' },
                { label: 'Range', value: 'TMG1000006003B' },
                { label: 'Connector 3', value: 'Extended Terminal Black' },
                { label: 'Connector 4', value: 'Extended Terminal Black' }
            ]
        },
        {
            name: 'Cable J',
            image: '/products/oil conditioning/Tandelta/Cables/Cable-M.png',
            specs: [
                { label: 'Length', value: '1 Meter' },
                { label: 'Diameter', value: 'Standard Harsh-Duty Cable' },
                { label: 'Maximum Temp Rating', value: '200°C' },
                { label: 'Material', value: 'High-Temperature Resistant' },
                { label: 'Connector 1', value: 'Cable Lug for ...' },
                { label: 'Connector 2', value: 'Cable Lug for ...' },
                { label: 'Weight', value: 'TBD' },
                { label: 'Range', value: 'TMG1000006003B' },
                { label: 'Connector 3', value: 'Extended Terminal Black' },
                { label: 'Connector 4', value: 'Extended Terminal Black' }
            ]
        },
        {
            name: 'Cable J',
            image: '/products/oil conditioning/Tandelta/Cables/Cable-M.png',
            specs: [
                { label: 'Length', value: '3 Meter' },
                { label: 'Diameter', value: 'Standard Harsh-Duty Cable' },
                { label: 'Maximum Temp Rating', value: '200°C' },
                { label: 'Material', value: 'High-Temperature Resistant' },
                { label: 'Connector 1', value: 'Cable Lug for ...' },
                { label: 'Connector 2', value: 'Cable Lug for ...' },
                { label: 'Weight', value: 'TBD' },
                { label: 'Range', value: 'TMG1000006003B' },
                { label: 'Connector 3', value: 'Extended Terminal Black' },
                { label: 'Connector 4', value: 'Extended Terminal Black' }
            ]
        },
        {
            name: 'Cable J',
            image: '/products/oil conditioning/Tandelta/Cables/Cable-M.png',
            specs: [
                { label: 'Length', value: '5 Meter' },
                { label: 'Diameter', value: 'Standard Harsh-Duty Cable' },
                { label: 'Maximum Temp Rating', value: '200°C' },
                { label: 'Material', value: 'High-Temperature Resistant' },
                { label: 'Connector 1', value: 'Cable Lug for ...' },
                { label: 'Connector 2', value: 'Cable Lug for ...' },
                { label: 'Weight', value: 'TBD' },
                { label: 'Range', value: 'TMG1000006003B' },
                { label: 'Connector 3', value: 'Extended Terminal Black' },
                { label: 'Connector 4', value: 'Extended Terminal Black' }
            ]
        },
        {
            name: 'Cable J',
            image: '/products/oil conditioning/Tandelta/Cables/Cable-X.png',
            specs: [
                { label: 'Length', value: '1 Meter' },
                { label: 'Diameter', value: 'Standard Harsh-Duty Cable' },
                { label: 'Maximum Temp Rating', value: '200°C' },
                { label: 'Material', value: 'High-Temperature Resistant' },
                { label: 'Connector 1', value: 'Cable Lug for ...' },
                { label: 'Connector 2', value: 'Cable Lug for ...' },
                { label: 'Weight', value: 'TBD' },
                { label: 'Range', value: 'TMG1000006003B' },
                { label: 'Connector 3', value: 'Extended Terminal Black' },
                { label: 'Connector 4', value: 'Extended Terminal Black' }
            ]
        },
        {
            name: 'Cable J',
            image: '/products/oil conditioning/Tandelta/Cables/Cable-X.png',
            specs: [
                { label: 'Length', value: '3 Meter' },
                { label: 'Diameter', value: 'Standard Harsh-Duty Cable' },
                { label: 'Maximum Temp Rating', value: '200°C' },
                { label: 'Material', value: 'High-Temperature Resistant' },
                { label: 'Connector 1', value: 'Cable Lug for ...' },
                { label: 'Connector 2', value: 'Cable Lug for ...' },
                { label: 'Weight', value: 'TBD' },
                { label: 'Range', value: 'TMG1000006003B' },
                { label: 'Connector 3', value: 'Extended Terminal Black' },
                { label: 'Connector 4', value: 'Extended Terminal Black' }
            ]
        },
        {
            name: 'Cable J',
            image: '/products/oil conditioning/Tandelta/Cables/Cable-X.png',
            specs: [
                { label: 'Length', value: '5 Meter' },
                { label: 'Diameter', value: 'Standard Harsh-Duty Cable' },
                { label: 'Maximum Temp Rating', value: '200°C' },
                { label: 'Material', value: 'High-Temperature Resistant' },
                { label: 'Connector 1', value: 'Cable Lug for ...' },
                { label: 'Connector 2', value: 'Cable Lug for ...' },
                { label: 'Weight', value: 'TBD' },
                { label: 'Range', value: 'TMG1000006003B' },
                { label: 'Connector 3', value: 'Extended Terminal Black' },
                { label: 'Connector 4', value: 'Extended Terminal Black' }
            ]
        },
        {
            name: 'Cable J',
            image: '/products/oil conditioning/Tandelta/Cables/Cable-HB.png',
            specs: [
                { label: 'Length', value: '1 Meter' },
                { label: 'Diameter', value: 'Standard Harsh-Duty Cable' },
                { label: 'Maximum Temp Rating', value: '200°C' },
                { label: 'Material', value: 'High-Temperature Resistant' },
                { label: 'Connector 1', value: 'Cable Lug for ...' },
                { label: 'Connector 2', value: 'Cable Lug for ...' },
                { label: 'Weight', value: 'TBD' },
                { label: 'Range', value: 'TMG1000006003B' },
                { label: 'Connector 3', value: 'Extended Terminal Black' },
                { label: 'Connector 4', value: 'Extended Terminal Black' }
            ]
        },
        {
            name: 'Cable J',
            image: '/products/oil conditioning/Tandelta/Cables/Cable-HB.png',
            specs: [
                { label: 'Length', value: '3 Meter' },
                { label: 'Diameter', value: 'Standard Harsh-Duty Cable' },
                { label: 'Maximum Temp Rating', value: '200°C' },
                { label: 'Material', value: 'High-Temperature Resistant' },
                { label: 'Connector 1', value: 'Cable Lug for ...' },
                { label: 'Connector 2', value: 'Cable Lug for ...' },
                { label: 'Weight', value: 'TBD' },
                { label: 'Range', value: 'TMG1000006003B' },
                { label: 'Connector 3', value: 'Extended Terminal Black' },
                { label: 'Connector 4', value: 'Extended Terminal Black' }
            ]
        },
        {
            name: 'Cable J',
            image: '/products/oil conditioning/Tandelta/Cables/Cable-HB.png',
            specs: [
                { label: 'Length', value: '5 Meter' },
                { label: 'Diameter', value: 'Standard Harsh-Duty Cable' },
                { label: 'Maximum Temp Rating', value: '200°C' },
                { label: 'Material', value: 'High-Temperature Resistant' },
                { label: 'Connector 1', value: 'Cable Lug for ...' },
                { label: 'Connector 2', value: 'Cable Lug for ...' },
                { label: 'Weight', value: 'TBD' },
                { label: 'Range', value: 'TMG1000006003B' },
                { label: 'Connector 3', value: 'Extended Terminal Black' },
                { label: 'Connector 4', value: 'Extended Terminal Black' }
            ]
        },
        {
            name: 'Cable J',
            image: '/products/oil conditioning/Tandelta/Cables/Cable-BBSt.png',
            specs: [
                { label: 'Length', value: '1 Meter' },
                { label: 'Diameter', value: 'Standard Harsh-Duty Cable' },
                { label: 'Maximum Temp Rating', value: '200°C' },
                { label: 'Material', value: 'High-Temperature Resistant' },
                { label: 'Connector 1', value: 'Cable Lug for ...' },
                { label: 'Connector 2', value: 'Cable Lug for ...' },
                { label: 'Weight', value: 'TBD' },
                { label: 'Range', value: 'TMG1000006003B' },
                { label: 'Connector 3', value: 'Extended Terminal Black' },
                { label: 'Connector 4', value: 'Extended Terminal Black' }
            ]
        },
        {
            name: 'Cable J',
            image: '/products/oil conditioning/Tandelta/Cables/Cable-BBSt.png',
            specs: [
                { label: 'Length', value: '3 Meter' },
                { label: 'Diameter', value: 'Standard Harsh-Duty Cable' },
                { label: 'Maximum Temp Rating', value: '200°C' },
                { label: 'Material', value: 'High-Temperature Resistant' },
                { label: 'Connector 1', value: 'Cable Lug for ...' },
                { label: 'Connector 2', value: 'Cable Lug for ...' },
                { label: 'Weight', value: 'TBD' },
                { label: 'Range', value: 'TMG1000006003B' },
                { label: 'Connector 3', value: 'Extended Terminal Black' },
                { label: 'Connector 4', value: 'Extended Terminal Black' }
            ]
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
            {/* Header Section */}
            <div className="bg-white shadow-sm border-b border-gray-200">
                <div className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 max-w-7xl mx-auto">
                    <div className="py-8 md:py-12">
                        <div className="flex items-center space-x-3 mb-3">
                            <div className="w-1 h-8 bg-primary rounded-full"></div>
                            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
                                OIL CONDITIONING
                            </h1>
                        </div>
                        <p className="text-sm md:text-base text-gray-600 ml-7">
                            Advanced cable solutions for industrial oil conditioning systems
                        </p>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 max-w-7xl mx-auto">
                <div className="flex flex-col lg:flex-row gap-8 py-8">
                    {/* Sidebar */}
                    <div className="lg:w-80 flex-shrink-0">
                        {/* Manufacturers Section */}
                        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
                            <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                                <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                                Manufacturers
                            </h3>
                            <nav className="space-y-2">
                                {manufacturers.map((manufacturer) => (
                                    <Link
                                        key={manufacturer.name}
                                        href={manufacturer.href}
                                        className={`block px-4 py-3 text-sm font-medium rounded-lg transition-all duration-200 ${
                                            manufacturer.isActive
                                                ? 'bg-primary text-white shadow-md transform scale-105'
                                                : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100 hover:scale-102'
                                        }`}
                                    >
                                        {manufacturer.name}
                                    </Link>
                                ))}
                            </nav>
                        </div>

                        {/* TanDelta Products Section */}
                        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                            <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                                <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                                TanDelta Products
                            </h3>
                            <div className="space-y-1 max-h-80 overflow-y-auto">
                                <Link
                                    href="/products/oil-conditioning/tandelta/oqsx-g2-oil-quality-sensor"
                                    className="block px-3 py-2 text-sm transition-colors rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                                >
                                    <span className="text-gray-400 mr-2">•</span>
                                    OQSx-G2 Oil Quality Sensor
                                </Link>
                                <Link
                                    href="/products/oil-conditioning/tandelta/oqsx-g2-haz-oil-quality-sensor"
                                    className="block px-3 py-2 text-sm transition-colors rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                                >
                                    <span className="text-gray-400 mr-2">•</span>
                                    OQSx-G2 HAZ Oil Quality Sensor
                                </Link>
                                <Link
                                    href="/products/oil-conditioning/tandelta/mot-mobile-oil-test-kit"
                                    className="block px-3 py-2 text-sm transition-colors rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                                >
                                    <span className="text-gray-400 mr-2">•</span>
                                    MOT – Mobile Oil Test Kit
                                </Link>
                                <Link
                                    href="/products/oil-conditioning/tandelta/oqsx-g2"
                                    className="block px-3 py-2 text-sm transition-colors rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                                >
                                    <span className="text-gray-400 mr-2">•</span>
                                    OQSX-G2 Sensor kit
                                </Link>
                                <Link
                                    href="/products/oil-conditioning/tandelta/sense2-display-kit"
                                    className="block px-3 py-2 text-sm transition-colors rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                                >
                                    <span className="text-gray-400 mr-2">•</span>
                                    SENSE2 Display Kit
                                </Link>
                                <Link
                                    href="/products/oil-conditioning/tandelta/sense3-gateway-kit"
                                    className="block px-3 py-2 text-sm transition-colors rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                                >
                                    <span className="text-gray-400 mr-2">•</span>
                                    SENSE3 Gateway Kit
                                </Link>
                                <Link
                                    href="/products/oil-conditioning/tandelta/gateway-oqtg"
                                    className="block px-3 py-2 text-sm transition-colors rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                                >
                                    <span className="text-gray-400 mr-2">•</span>
                                    Gateway (OQTg)
                                </Link>
                                <Link
                                    href="/products/oil-conditioning/tandelta/oqde-g2-display-express"
                                    className="block px-3 py-2 text-sm transition-colors rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                                >
                                    <span className="text-gray-400 mr-2">•</span>
                                    OQDe-G2 Display Express
                                </Link>
                                <Link
                                    href="/products/oil-conditioning/tandelta/gateway-hub"
                                    className="block px-3 py-2 text-sm transition-colors rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                                >
                                    <span className="text-gray-400 mr-2">•</span>
                                    Gateway Hub
                                </Link>
                                <Link
                                    href="/products/oil-conditioning/tandelta/manifold"
                                    className="block px-3 py-2 text-sm transition-colors rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                                >
                                    <span className="text-gray-400 mr-2">•</span>
                                    Manifold
                                </Link>
                                <Link
                                    href="/products/oil-conditioning/tandelta/cables"
                                    className="block px-3 py-2 text-sm transition-colors rounded-md bg-blue-50 text-blue-700 font-medium border-l-3 border-blue-500"
                                >
                                    <span className="text-blue-500 mr-2">•</span>
                                    Cables
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Content Area */}
                    <div className="flex-1">
                        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-8">
                            <div className="flex items-center justify-between mb-4">
                                <div>
                                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Cables Collection</h2>
                                    <p className="text-gray-600">Professional grade cables for oil conditioning systems</p>
                                </div>
                                <div className="hidden md:flex items-center space-x-2 text-sm text-gray-500">
                                    <span className="bg-gray-100 px-3 py-1 rounded-full">{cables.length} Products</span>
                                </div>
                            </div>
                            <div className="w-16 h-1 bg-gradient-to-r from-primary to-blue-500 rounded-full"></div>
                        </div>
                        
                        {/* Cables Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                            {cables.map((cable, index) => (
                                <Card key={index} className="group overflow-hidden border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 bg-white">
                                    {/* Cable Image */}
                                    <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-6 flex items-center justify-center h-40 border-b border-gray-100">
                                        <div className="relative">
                                            <Image
                                                src={cable.image}
                                                alt={cable.name}
                                                width={120}
                                                height={80}
                                                className="object-contain drop-shadow-sm group-hover:scale-105 transition-transform duration-300"
                                            />
                                        </div>
                                    </div>

                                    {/* Cable Name */}
                                    <CardHeader className="pb-4 pt-4 bg-white">
                                        <CardTitle className="text-lg font-bold text-center text-gray-800 tracking-wide">
                                            {cable.name}
                                        </CardTitle>
                                        <div className="w-12 h-0.5 bg-primary mx-auto mt-2"></div>
                                    </CardHeader>

                                    {/* Technical Specifications */}
                                    <CardContent className="pt-0 pb-6">
                                        <div className="bg-gray-50 rounded-lg overflow-hidden border border-gray-200">
                                            {cable.specs.map((spec, specIndex) => (
                                                <div key={specIndex} className="flex text-sm border-b border-gray-200 last:border-b-0 hover:bg-gray-100 transition-colors duration-150">
                                                    <div className="bg-slate-700 text-white py-2 px-3 flex-1 font-semibold text-xs uppercase tracking-wide">
                                                        {spec.label}
                                                    </div>
                                                    <div className="bg-white text-gray-700 py-2 px-3 flex-1 font-medium">
                                                        {spec.value}
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}