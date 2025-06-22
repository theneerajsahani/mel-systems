'use client';
import Link from 'next/link';
import Image from 'next/image';
import ProductBreadcrumb from '@/components/ProductBreadcrumb';
import TechnicalSpecsTable from '@/components/TechnicalSpecsTable';

export default function S120DigitalImagingParticleCounterPage() {
    const breadcrumbItems = [
        { label: 'Products', href: '/products' },
        { label: 'Oil Conditioning', href: '/products/oil-conditioning' },
        { label: 'Filtertechnik', href: '/products/oil-conditioning/filtertechnik' },
        { label: 'S120 Digital Imaging Particle Counter' },
    ];

    const specifications = [
        {
            title: "Technical Specifications",
            specs: [
                { label: 'Particle Size Range', value: '4-100 μm (ISO 4406)' },
                { label: 'Count Accuracy', value: '±10% at 95% confidence' },
                { label: 'Sample Volume', value: '5 mL' },
                { label: 'Flow Rate', value: '10 mL/min' },
                { label: 'Viscosity Range', value: '1-1000 cSt' },
                { label: 'Temperature Range', value: '0°C to +50°C' },
                { label: 'Display', value: '5.7" Color Touchscreen' },
                { label: 'Data Storage', value: '10,000+ tests' },
                { label: 'Connectivity', value: 'USB, Wi-Fi, Bluetooth' },
                { label: 'Battery Life', value: '8+ hours' },
                { label: 'Weight', value: '2.3 kg' },
                { label: 'Certification', value: 'ISO 11171, ISO 21018' },
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
                                src="/products/oil conditioning/Filtertechnik/S120 Digital Imaging Particle Counter/S120 Digital Imaging Particle Counter.png"
                                alt="S120 Digital Imaging Particle Counter"
                                width={600}
                                height={400}
                                className="w-full h-auto rounded-lg shadow-lg"
                            />
                        </div>

                        <div className="space-y-6">
                            <div>
                                <h1 className="text-3xl font-bold text-foreground mb-4">
                                    S120 Digital Imaging Particle Counter
                                </h1>
                                <p className="text-lg text-muted-foreground mb-6">
                                    Advanced digital imaging particle counter for precise contamination analysis 
                                    with real-time particle size and count measurement capabilities.
                                </p>
                            </div>

                            <div className="space-y-4">
                                <h3 className="text-xl font-semibold text-foreground">Key Features</h3>
                                <ul className="space-y-2 text-muted-foreground">
                                    <li>• Digital imaging technology</li>
                                    <li>• Real-time particle analysis</li>
                                    <li>• 5.7" color touchscreen</li>
                                    <li>• ISO certified accuracy</li>
                                    <li>• Wide viscosity range</li>
                                    <li>• Wireless connectivity</li>
                                    <li>• Portable design</li>
                                    <li>• Large data storage</li>
                                </ul>
                            </div>

                            <div className="space-y-4">
                                <h3 className="text-xl font-semibold text-foreground">Applications</h3>
                                <ul className="space-y-2 text-muted-foreground">
                                    <li>• Hydraulic system analysis</li>
                                    <li>• Lubrication monitoring</li>
                                    <li>• Quality control testing</li>
                                    <li>• Filter performance evaluation</li>
                                    <li>• Contamination trending</li>
                                    <li>• Predictive maintenance</li>
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
