'use client';
import Link from 'next/link';
import Image from 'next/image';
import ProductBreadcrumb from '@/components/ProductBreadcrumb';
import TechnicalSpecsTable from '@/components/TechnicalSpecsTable';

export default function MC3000BPage() {
    const breadcrumbItems = [
        { label: 'Products', href: '/products' },
        { label: 'Systems', href: '/products/systems' },
        { label: 'Rear View Cameras', href: '/products/systems/rear-view-cameras' },
        { label: 'MC3000B' },
    ];

    const specifications = [
        {
            title: "Technical Specifications",
            specs: [
                { label: 'Image Sensor', value: '1/3" CMOS' },
                { label: 'Resolution', value: '1280 x 720 (HD)' },
                { label: 'Viewing Angle', value: '120° horizontal' },
                { label: 'Minimum Illumination', value: '0.1 lux' },
                { label: 'Operating Temperature', value: '-30°C to +70°C' },
                { label: 'Protection Rating', value: 'IP68/IP69K' },
                { label: 'Power Supply', value: '12-24V DC' },
                { label: 'Power Consumption', value: '< 2W' },
                { label: 'Housing Material', value: 'Aluminum alloy' },
                { label: 'Mounting', value: 'Surface mount' },
                { label: 'Cable Length', value: '15m standard' },
                { label: 'Dimensions', value: '85 x 65 x 45 mm' },
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
                                src="/products/systems/Motec/Rear view cameras/MC3000B/MC3000B.png"
                                alt="MC3000B Rear View Camera"
                                width={600}
                                height={400}
                                className="w-full h-auto rounded-lg shadow-lg"
                            />
                        </div>

                        <div className="space-y-6">
                            <div>
                                <h1 className="text-3xl font-bold text-foreground mb-4">
                                    MC3000B Rear View Camera
                                </h1>
                                <p className="text-lg text-muted-foreground mb-6">
                                    High-definition rear view camera with wide-angle lens and robust construction 
                                    for professional vehicle applications requiring enhanced visibility and safety.
                                </p>
                            </div>

                            <div className="space-y-4">
                                <h3 className="text-xl font-semibold text-foreground">Key Features</h3>
                                <ul className="space-y-2 text-muted-foreground">
                                    <li>• HD 1280x720 resolution</li>
                                    <li>• 120° wide viewing angle</li>
                                    <li>• IP68/IP69K waterproof rating</li>
                                    <li>• Low light performance (0.1 lux)</li>
                                    <li>• Aluminum alloy housing</li>
                                    <li>• Surface mount installation</li>
                                    <li>• Wide temperature range</li>
                                    <li>• Shock and vibration resistant</li>
                                </ul>
                            </div>

                            <div className="space-y-4">
                                <h3 className="text-xl font-semibold text-foreground">Applications</h3>
                                <ul className="space-y-2 text-muted-foreground">
                                    <li>• Heavy machinery and construction equipment</li>
                                    <li>• Commercial vehicles and trucks</li>
                                    <li>• Agricultural equipment</li>
                                    <li>• Mining vehicles</li>
                                    <li>• Industrial forklifts</li>
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
