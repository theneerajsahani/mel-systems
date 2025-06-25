'use client';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import ProductLayout from '@/components/ProductLayout';

export default function CablesPage() {
    const breadcrumbItems = [
        { label: 'Products', href: '/products' },
        { label: 'Oil Conditioning', href: '/products/oil-conditioning' },
        { label: 'TanDelta', href: '/products/oil-conditioning/tandelta' },
        { label: 'Cables' },
    ];

    // Complete cable data based on the attached images
    const cables = [
        {
            name: 'Cable J',
            image: '/products/oil conditioning/Tandelta/Cables/Cable-J.png',
            productType: 'Configuration Cable',
            specs: [
                { label: 'Length', value: '1m' },
                { label: 'Diameter', value: '5.0mm Spring 5.0mm' },
                { label: 'Material', value: 'PVC' },
                { label: 'Connector 1', value: 'USB-A Plug' },
                { label: 'Connector 2', value: 'Bulgin PNG/01/CON/4090/X3' },
                { label: 'Connector 3', value: '2.1mm Barrel Power Socket' }
            ]
        },
        {
            name: 'Cable X',
            image: '/products/oil conditioning/Tandelta/Cables/Cable-X.png',
            productType: 'In-Service Configuration Cable',
            specs: [
                { label: 'Length', value: '1m' },
                { label: 'Diameter', value: '5.0mm Spring 5.0mm' },
                { label: 'Material', value: 'PUR' },
                { label: 'Connector 1', value: 'USB-A Plug' },
                { label: 'Connector 2', value: '2-Way Spring Wire FEMALE' },
                { label: 'Connector 3', value: '2.1mm Barrel Power Socket' }
            ]
        },
        {
            name: 'Cable M',
            image: '/products/oil conditioning/Tandelta/Cables/Cable-M.png',
            productType: 'Supply In-Service Cable',
            specs: [
                { label: 'Length', value: '1m' },
                { label: 'Diameter', value: '6.0mm' },
                { label: 'Material', value: 'PUR' },
                { label: 'Connector 1', value: 'Bulgin PNG/01/CON/4090/X3' },
                { label: 'Connector 2', value: 'Luer/Lock/1B-16' },
                { label: 'Connector 3', value: 'N/A' }
            ]
        },
        {
            name: 'Cable HP',
            image: '/products/oil conditioning/Tandelta/Cables/Cable-HP.png',
            productType: 'High Pressure Multi-Purpose Cable',
            specs: [
                { label: 'Length', value: '1m' },
                { label: 'Diameter', value: '5.7mm' },
                { label: 'Material', value: 'PVC' },
                { label: 'Connector 1', value: 'Molex 33471-0405' },
                { label: 'Connector 2', value: 'N/A' },
                { label: 'Connector 3', value: 'N/A' }
            ]
        },
        {
            name: 'Cable BBHaz',
            image: '/products/oil conditioning/Tandelta/Cables/Cable-BBHaz.png',
            productType: 'Gateway Data Cable (Hazardous)',
            specs: [
                { label: 'Length', value: '1m' },
                { label: 'Diameter', value: '6.0mm' },
                { label: 'Material', value: 'PUR' },
                { label: 'Connector 1', value: 'N/A' },
                { label: 'Connector 2', value: 'N/A' },
                { label: 'Connector 3', value: 'N/A' }
            ]
        },
        {
            name: 'Cable BBSt',
            image: '/products/oil conditioning/Tandelta/Cables/Cable-BBSt.png',
            productType: 'Gateway Data Cable (Standard)',
            specs: [
                { label: 'Length', value: '1m' },
                { label: 'Diameter', value: '6.0mm' },
                { label: 'Material', value: 'PUR' },
                { label: 'Connector 1', value: 'N/A' },
                { label: 'Connector 2', value: 'N/A' },
                { label: 'Connector 3', value: 'N/A' }
            ]
        },
        {
            name: 'Cable DB',
            image: '/products/oil conditioning/Tandelta/Cables/Cable-DB.png',
            productType: 'Display to Base Bridge Cable',
            specs: [
                { label: 'Length', value: '1m' },
                { label: 'Diameter', value: '6.0mm' },
                { label: 'Material', value: 'PUR' },
                { label: 'Connector 1', value: 'Luer/Lock/1B-16' },
                { label: 'Connector 2', value: 'N/A' },
                { label: 'Connector 3', value: 'N/A' }
            ]
        },
        {
            name: 'Cable HB',
            image: '/products/oil conditioning/Tandelta/Cables/Cable-HB.png',
            productType: 'Gateway Hub to Base Bridge Cable',
            specs: [
                { label: 'Length', value: '1m' },
                { label: 'Diameter', value: '6.0mm' },
                { label: 'Material', value: 'PUR' },
                { label: 'Connector 1', value: 'Molex 33472-0405' },
                { label: 'Connector 2', value: 'N/A' },
                { label: 'Connector 3', value: 'N/A' }
            ]
        },
        {
            name: 'Cable GH',
            image: '/products/oil conditioning/Tandelta/Cables/Cable-GH.png',
            productType: 'Gateway Hub to Gateway Cable',
            specs: [
                { label: 'Length', value: '1m' },
                { label: 'Diameter', value: '5.0mm' },
                { label: 'Material', value: 'PUR' },
                { label: 'Connector 1', value: 'Molex 33472-1006' },
                { label: 'Connector 2', value: 'Molex 33472-1006/-J7PW1+' },
                { label: 'Connector 3', value: 'N/A' }
            ]
        },
        {
            name: 'Cable SD',
            image: '/products/oil conditioning/Tandelta/Cables/Cable-SD.png',
            productType: 'Sensor to Display Cable',
            specs: [
                { label: 'Length', value: '1m' },
                { label: 'Diameter', value: '6.0mm' },
                { label: 'Material', value: 'PUR' },
                { label: 'Connector 1', value: 'Bulgin PNG/01/CON/4090/X3' },
                { label: 'Connector 2', value: 'Luer/Lock/1B-16' },
                { label: 'Connector 3', value: 'N/A' }
            ]
        },
        {
            name: 'Cable SB',
            image: '/products/oil conditioning/Tandelta/Cables/Cable-SB.png',
            productType: 'Sensor to Base Bridge Cable',
            specs: [
                { label: 'Length', value: '1m' },
                { label: 'Diameter', value: '6.0mm' },
                { label: 'Material', value: 'PUR' },
                { label: 'Connector 1', value: 'Bulgin PNG/01/CON/4090/X3' },
                { label: 'Connector 2', value: 'N/A' },
                { label: 'Connector 3', value: 'N/A' }
            ]
        },
        {
            name: 'Cable SH',
            image: '/products/oil conditioning/Tandelta/Cables/Cable-SH.png',
            productType: 'Sensor to Hub Cable',
            specs: [
                { label: 'Length', value: '1m' },
                { label: 'Diameter', value: '6.0mm' },
                { label: 'Material', value: 'PUR' },
                { label: 'Connector 1', value: 'Bulgin PNG/01/CON/4090/X3' },
                { label: 'Connector 2', value: 'Molex 33472-0405' },
                { label: 'Connector 3', value: 'N/A' }
            ]
        },
        {
            name: 'Cable HH',
            image: '/products/oil conditioning/Tandelta/Cables/Cable-HH.png',
            productType: 'Gateway Hub to Hub Cable',
            specs: [
                { label: 'Length', value: '1m' },
                { label: 'Diameter', value: '6.0mm' },
                { label: 'Material', value: 'PUR' },
                { label: 'Connector 1', value: 'Molex 33472-1006' },
                { label: 'Connector 2', value: 'Molex 33472-1006' },
                { label: 'Connector 3', value: 'N/A' }
            ]
        },
        {
            name: 'Cable HCP-1',
            image: '/products/oil conditioning/Tandelta/Cables/Cable-HCP-1.png',
            productType: 'Gateway Hub Community Plug',
            specs: [
                { label: 'Length', value: 'N/A' },
                { label: 'Diameter', value: 'N/A' },
                { label: 'Material', value: 'N/A' },
                { label: 'Connector 1', value: 'Molex 33472-0405' },
                { label: 'Connector 2', value: 'N/A' },
                { label: 'Connector 3', value: 'N/A' }
            ]
        }
    ];

    return (
        <ProductLayout breadcrumbItems={breadcrumbItems}>
            {/* Product Header */}
            <div className="mb-6">
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                    <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium">
                        TanDelta
                    </span>
                    <span className="text-gray-300">•</span>
                    <span className="capitalize">Oil Conditioning</span>
                </div>
                <h1 className="text-2xl lg:text-3xl font-bold text-gray-900">
                    TanDelta Cables
                </h1>
                <p className="mt-2 text-gray-600 leading-relaxed">
                    Complete range of cables for TanDelta oil condition monitoring systems. Each cable type is designed for specific applications and environments.
                </p>
            </div>

            {/* Cables Grid */}
            <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {cables.map((cable, index) => (
                        <Card key={index} className="hover:shadow-lg transition-shadow duration-200 border-gray-200">
                            <CardHeader className="text-center pb-4">
                                <div className="relative h-40 mb-3 bg-gray-50 rounded-lg overflow-hidden">
                                    <Image
                                        src={cable.image}
                                        alt={cable.name}
                                        fill
                                        className="object-contain p-2"
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    />
                                </div>
                                <CardTitle className="text-lg font-bold text-gray-900">
                                    {cable.name}
                                </CardTitle>
                                <p className="text-sm text-blue-600 font-medium">
                                    {cable.productType}
                                </p>
                            </CardHeader>
                            <CardContent className="space-y-4 pt-0">
                                <div className="space-y-2">
                                    {cable.specs.map((spec, specIndex) => (
                                        <div key={specIndex} className="flex justify-between text-sm">
                                            <span className="font-medium text-gray-600">{spec.label}:</span>
                                            <span className="text-gray-900 text-right">{spec.value}</span>
                                        </div>
                                    ))}
                                </div>
                                <Button className="w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white">
                                    Request Quote
                                </Button>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>

            {/* Cable Selection Guide */}
            <div className="bg-white rounded-lg shadow-sm p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-4">Cable Selection Guide</h2>
                <div className="prose max-w-none text-gray-600">
                    <p className="mb-4">
                        TanDelta offers a comprehensive range of cables designed to meet the specific requirements of oil condition monitoring applications.
                        Each cable type is engineered for optimal performance in different environmental conditions and system configurations.
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                        <div>
                            <h3 className="font-semibold text-gray-900 mb-3">Configuration Cables</h3>
                            <ul className="space-y-2 text-sm">
                                <li><strong>Cable J:</strong> Configuration cables for initial setup and programming</li>
                                <li><strong>Cable X:</strong> In-service configuration cables for live system adjustments</li>
                                <li><strong>Cable M:</strong> Supply cables for standard in-service applications</li>
                                <li><strong>Cable HP:</strong> High-pressure rated cables for demanding applications</li>
                            </ul>
                        </div>
                        
                        <div>
                            <h3 className="font-semibold text-gray-900 mb-3">Data & Connection Cables</h3>
                            <ul className="space-y-2 text-sm">
                                <li><strong>Cable BBHaz:</strong> Hazardous area certified gateway data cables</li>
                                <li><strong>Cable BBSt:</strong> Standard gateway data cables for general applications</li>
                                <li><strong>Cable DB:</strong> Display to base bridge connection cables</li>
                                <li><strong>Cable HB:</strong> Gateway hub to base bridge connection cables</li>
                            </ul>
                        </div>
                        
                        <div>
                            <h3 className="font-semibold text-gray-900 mb-3">System Integration Cables</h3>
                            <ul className="space-y-2 text-sm">
                                <li><strong>Cable GH:</strong> Gateway hub to gateway connection cables</li>
                                <li><strong>Cable SD:</strong> Sensor to display connection cables</li>
                                <li><strong>Cable SB:</strong> Sensor to base bridge connection cables</li>
                                <li><strong>Cable SH:</strong> Sensor to hub connection cables</li>
                            </ul>
                        </div>
                        
                        <div>
                            <h3 className="font-semibold text-gray-900 mb-3">Hub & Network Cables</h3>
                            <ul className="space-y-2 text-sm">
                                <li><strong>Cable HH:</strong> Gateway hub to hub connection cables</li>
                                <li><strong>Cable HCP-1:</strong> Gateway hub community plug connectors</li>
                            </ul>
                        </div>
                    </div>
                    
                    <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
                        <p className="text-sm text-blue-800">
                            <strong>Note:</strong> Most cables are available in multiple lengths (1m, 3m, 5m) to accommodate various installation requirements.
                            Each cable is designed with specific connectors and materials optimized for its intended application.
                            Contact our technical team for assistance with cable selection for your specific application.
                        </p>
                    </div>
                </div>
            </div>
        </ProductLayout>
    );
}