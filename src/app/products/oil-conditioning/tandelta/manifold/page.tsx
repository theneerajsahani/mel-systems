'use client';
import Link from 'next/link';
import Image from 'next/image';
import ProductBreadcrumb from '@/components/ProductBreadcrumb';
import TechnicalSpecsTable from '@/components/TechnicalSpecsTable';

export default function ManifoldPage() {
    const breadcrumbItems = [
        { label: 'Products', href: '/products' },
        { label: 'Oil Conditioning', href: '/products/oil-conditioning' },
        { label: 'TanDelta', href: '/products/oil-conditioning/tandelta' },
        { label: 'Manifold' },
    ];

    const specifications = [
        {
            title: "Technical Specifications",
            specs: [
                { label: 'Material', value: '316L Stainless Steel' },
                { label: 'Pressure Rating', value: '400 bar' },
                { label: 'Temperature Range', value: '-40°C to +150°C' },
                { label: 'Port Connections', value: 'M18 x 1.5, NPT 1/2"' },
                { label: 'Sensor Ports', value: '2-8 ports available' },
                { label: 'Flow Rate', value: '1-100 L/min' },
                { label: 'Surface Finish', value: 'Ra < 0.8 μm' },
                { label: 'Mounting', value: 'Flange or threaded' },
                { label: 'Leak Rate', value: '< 10⁻⁹ mbar·L/s' },
                { label: 'Compliance', value: 'ISO 9001, ASME' },
            ]
        }
    ];

    return (
        <div className="min-h-screen bg-background">
            <div className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 max-w-7xl mx-auto">
                <div className="py-6">
                    <ProductBreadcrumb items={breadcrumbItems} />
                </div>

                <div className="py-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                        <div className="space-y-4">
                            <Image
                                src="/products/oil conditioning/Tandelta/Manifold/Manifold.jpg"
                                alt="Manifold"
                                width={600}
                                height={400}
                                className="w-full h-auto rounded-lg shadow-lg"
                            />
                        </div>

                        <div className="space-y-6">
                            <div>
                                <h1 className="text-3xl font-bold text-foreground mb-4">
                                    Manifold
                                </h1>
                                <p className="text-lg text-muted-foreground mb-6">
                                    High-quality manifold system for mounting multiple oil quality sensors 
                                    in a single location with optimal flow characteristics.
                                </p>
                            </div>

                            <div className="space-y-4">
                                <h3 className="text-xl font-semibold text-foreground">Key Features</h3>
                                <ul className="space-y-2 text-muted-foreground">
                                    <li>• 316L stainless steel construction</li>
                                    <li>• Multiple sensor mounting ports</li>
                                    <li>• Optimized flow design</li>
                                    <li>• High pressure rating</li>
                                    <li>• Corrosion resistant</li>
                                    <li>• Easy installation</li>
                                    <li>• Leak-tight design</li>
                                </ul>
                            </div>

                            <div className="space-y-4">
                                <h3 className="text-xl font-semibold text-foreground">Applications</h3>
                                <ul className="space-y-2 text-muted-foreground">
                                    <li>• Multi-sensor installations</li>
                                    <li>• Hydraulic systems</li>
                                    <li>• Lubrication systems</li>
                                    <li>• Oil distribution networks</li>
                                    <li>• Process monitoring</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="mb-8">
                        <h2 className="text-2xl font-bold text-foreground mb-6">Technical Specifications</h2>
                        <TechnicalSpecsTable sections={specifications} />
                    </div>

                    <div className="text-center">
                        <Link
                            href="/contact"
                            className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary/90 transition-colors"
                        >
                            Request Quote
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
