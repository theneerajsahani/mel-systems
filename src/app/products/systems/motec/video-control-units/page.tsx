'use client';
import Link from 'next/link';
import ProductCard from '@/components/ProductCard';
import ProductBreadcrumb from '@/components/ProductBreadcrumb';

export default function VideoControlUnitsPage() {
    const breadcrumbItems = [
        { label: 'Products', href: '/products' },
        { label: 'Systems', href: '/products/systems' },
        { label: 'Video Control Units' },
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
                            Video Control Units
                        </h1>
                        <p className="text-lg text-muted-foreground">
                            Advanced video control units for managing multiple camera inputs with 
                            switching, recording, and display capabilities for professional monitoring systems.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                        <Link href="/products/systems/motec/video-control-units/mvcd2000">
                            <ProductCard
                                image='/products/systems/Motec/Video control units/MVCD2000/MVCD2000.jpg'
                                name='MVCD2000'
                            />
                        </Link>
                        <Link href="/products/systems/motec/video-control-units/mvcu1300">
                            <ProductCard
                                image='/products/systems/Motec/Video control units/MVCU1300/MVCU1300.jpg'
                                name='MVCU1300'
                            />
                        </Link>
                        <Link href="/products/systems/motec/video-control-units/mvcu1400">
                            <ProductCard
                                image='/products/systems/Motec/Video control units/MVCU1400/MVCU1400.jpg'
                                name='MVCU1400'
                            />
                        </Link>
                        <Link href="/products/systems/motec/video-control-units/mvcu1500">
                            <ProductCard
                                image='/products/systems/Motec/Video control units/MVCU1500/MVCU1500.jpg'
                                name='MVCU1500'
                            />
                        </Link>
                        <Link href="/products/systems/motec/video-control-units/mvcu1600">
                            <ProductCard
                                image='/products/systems/Motec/Video control units/MVCU1600/MVCU1600.jpg'
                                name='MVCU1600'
                            />
                        </Link>
                        <Link href="/products/systems/motec/video-control-units/mb1205">
                            <ProductCard
                                image='/products/systems/Motec/Video control units/MB1205/MB1205.jpg'
                                name='MB1205'
                            />
                        </Link>
                        <Link href="/products/systems/motec/video-control-units/mb1405-quad">
                            <ProductCard
                                image='/products/systems/Motec/Video control units/MB1405-Quad/MB1405-Quad.jpg'
                                name='MB1405-Quad'
                            />
                        </Link>
                        <Link href="/products/systems/motec/video-control-units/mbe5200">
                            <ProductCard
                                image='/products/systems/Motec/Video control units/MBE5200/MBE5200.jpg'
                                name='MBE5200'
                            />
                        </Link>
                        <Link href="/products/systems/motec/video-control-units/mv13">
                            <ProductCard
                                image='/products/systems/Motec/Video control units/MV13/MV13.jpg'
                                name='MV13'
                            />
                        </Link>
                        <Link href="/products/systems/motec/video-control-units/mv5201-1">
                            <ProductCard
                                image='/products/systems/Motec/Video control units/MV5201-1/MV5201-1.jpg'
                                name='MV5201-1'
                            />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
