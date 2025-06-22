'use client';
import Link from 'next/link';
import ProductCard from '@/components/ProductCard';
import ProductBreadcrumb from '@/components/ProductBreadcrumb';

export default function TransmissionsPage() {
    const breadcrumbItems = [
        { label: 'Products', href: '/products' },
        { label: 'Systems', href: '/products/systems' },
        { label: 'Transmissions' },
    ];

    return (
        <div className="min-h-screen bg-background">
            <div className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 max-w-7xl mx-auto">
                <div className="py-6">
                    <ProductBreadcrumb items={breadcrumbItems} />
                </div>

                <div className="py-8">
                    <div className="mb-8">
                        <h1 className="text-3xl font-bold text-foreground mb-4">
                            Transmissions
                        </h1>
                        <p className="text-lg text-muted-foreground">
                            Video transmission equipment and specialized cables for robust signal transmission 
                            in industrial environments with wireless and wired solutions.
                        </p>
                    </div>

                    <div className="space-y-8">
                        {/* Transmission Units */}
                        <div>
                            <h2 className="text-xl font-semibold text-foreground mb-4">Transmission Units</h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                                <Link href="/products/systems/transmissions/mvrd1100">
                                    <ProductCard
                                        image='/products/systems/Motec/Transmission/MVRD1100/MVRD1100.jpg'
                                        name='MVRD1100'
                                    />
                                </Link>
                                <Link href="/products/systems/transmissions/mab2000">
                                    <ProductCard
                                        image='/products/systems/Motec/Transmission/MAB2000/MAB2000.jpg'
                                        name='MAB2000'
                                    />
                                </Link>
                                <Link href="/products/systems/transmissions/mvr5200">
                                    <ProductCard
                                        image='/products/systems/Motec/Transmission/MVR5200/MVR5200.jpg'
                                        name='MVR5200'
                                    />
                                </Link>
                                <Link href="/products/systems/transmissions/mtp-vs-ve">
                                    <ProductCard
                                        image='/products/systems/Motec/Transmission/MTP-VS and MTP-VE/MTP-VS and MTP-VE.jpg'
                                        name='MTP-VS and MTP-VE'
                                    />
                                </Link>
                            </div>
                        </div>

                        {/* Transmission Cables */}
                        <div>
                            <h2 className="text-xl font-semibold text-foreground mb-4">Transmission Cables</h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
                                <Link href="/products/systems/transmissions/mkw-kabel">
                                    <ProductCard
                                        image='/products/systems/Motec/Transmission/MKW-Kabel/MKW-Kabel.jpg'
                                        name='MKW-Kabel'
                                    />
                                </Link>
                                <Link href="/products/systems/transmissions/mk5-cable">
                                    <ProductCard
                                        image='/products/systems/Motec/Transmission/MK5-cabel/MK5-cabel.jpg'
                                        name='MK5-Cable'
                                    />
                                </Link>
                                <Link href="/products/systems/transmissions/mk25-15-ma2-cable">
                                    <ProductCard
                                        image='/products/systems/Motec/Transmission/MK25.15-MA2-cable/MK25.15-MA2-cable.jpg'
                                        name='MK25.15-MA2-Cable'
                                    />
                                </Link>
                                <Link href="/products/systems/transmissions/mk67-cable">
                                    <ProductCard
                                        image='/products/systems/Motec/Transmission/Mk67-cable/Mk67-cable.jpg'
                                        name='MK67-Cable'
                                    />
                                </Link>
                                <Link href="/products/systems/transmissions/mk84-cable">
                                    <ProductCard
                                        image='/products/systems/Motec/Transmission/MK84-cable/MK84-cable.jpg'
                                        name='MK84-Cable'
                                    />
                                </Link>
                                <Link href="/products/systems/transmissions/mk228-cable">
                                    <ProductCard
                                        image='/products/systems/Motec/Transmission/MK228-cabel/MK228-cabel.jpg'
                                        name='MK228-Cable'
                                    />
                                </Link>
                                <Link href="/products/systems/transmissions/mk232-cable">
                                    <ProductCard
                                        image='/products/systems/Motec/Transmission/MK232-cabel/MK232-cabel.jpg'
                                        name='MK232-Cable'
                                    />
                                </Link>
                                <Link href="/products/systems/transmissions/mk295-cable">
                                    <ProductCard
                                        image='/products/systems/Motec/Transmission/MK295-cabel/MK295-cabel.jpg'
                                        name='MK295-Cable'
                                    />
                                </Link>
                                <Link href="/products/systems/transmissions/mk296-cable">
                                    <ProductCard
                                        image='/products/systems/Motec/Transmission/MK296-cabel/MK296-cabel.jpg'
                                        name='MK296-Cable'
                                    />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
