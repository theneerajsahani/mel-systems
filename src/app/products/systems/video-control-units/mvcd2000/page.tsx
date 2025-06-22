'use client';
import Link from 'next/link';
import Image from 'next/image';
import ProductBreadcrumb from '@/components/ProductBreadcrumb';
import TechnicalSpecsTable from '@/components/TechnicalSpecsTable';

export default function MVCD2000Page() {
    const breadcrumbItems = [
        { label: 'Products', href: '/products' },
        { label: 'Systems', href: '/products/systems' },
        { label: 'Video Control Units', href: '/products/systems/video-control-units' },
        { label: 'MVCD2000' },
    ];

    const specifications = [
        {
            title: "Technical Specifications",
            specs: [
                { label: 'Video Inputs', value: '4 x Analog cameras' },
                { label: 'Video Output', value: '1 x Composite, 1 x VGA' },
                { label: 'Display Modes', value: 'Single, Quad, PIP' },
                { label: 'Recording', value: 'SD card up to 128GB' },
                { label: 'Operating Temperature', value: '-30°C to +70°C' },
                { label: 'Power Supply', value: '12-24V DC' },
                { label: 'Power Consumption', value: '< 15W' },
                { label: 'Housing', value: 'Aluminum, IP67' },
                { label: 'Switching', value: 'Manual/Auto with priority' },
                { label: 'Audio', value: '1 channel input/output' },
                { label: 'Dimensions', value: '180 x 120 x 60 mm' },
                { label: 'Weight', value: '1.2 kg' },
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
                                src="/products/systems/Motec/Video control units/MVCD2000/MVCD2000.jpg"
                                alt="MVCD2000 Video Control Unit"
                                width={600}
                                height={400}
                                className="w-full h-auto rounded-lg shadow-lg"
                            />
                        </div>

                        <div className="space-y-6">
                            <div>
                                <h1 className="text-3xl font-bold text-foreground mb-4">
                                    MVCD2000 Video Control Unit
                                </h1>
                                <p className="text-lg text-muted-foreground mb-6">
                                    Advanced 4-channel video control unit with recording capabilities, multiple display modes, 
                                    and robust construction for professional vehicle monitoring applications.
                                </p>
                            </div>

                            <div className="space-y-4">
                                <h3 className="text-xl font-semibold text-foreground">Key Features</h3>
                                <ul className="space-y-2 text-muted-foreground">
                                    <li>• 4 analog camera inputs</li>
                                    <li>• Multiple display modes (Single, Quad, PIP)</li>
                                    <li>• SD card recording up to 128GB</li>
                                    <li>• Manual and automatic switching</li>
                                    <li>• Audio input/output</li>
                                    <li>• IP67 aluminum housing</li>
                                    <li>• Wide operating temperature range</li>
                                    <li>• Priority switching function</li>
                                </ul>
                            </div>

                            <div className="space-y-4">
                                <h3 className="text-xl font-semibold text-foreground">Applications</h3>
                                <ul className="space-y-2 text-muted-foreground">
                                    <li>• Heavy machinery and construction equipment</li>
                                    <li>• Agricultural vehicles</li>
                                    <li>• Mining and earth-moving equipment</li>
                                    <li>• Commercial vehicle fleets</li>
                                    <li>• Security and surveillance systems</li>
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
