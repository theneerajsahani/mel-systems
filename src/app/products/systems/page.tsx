'use client';
import Link from 'next/link';
import ProductCard from '@/components/ProductCard';

export default function SystemsPage() {
    return (
        <div className="min-h-screen bg-background">
            {/* Header Section */}
            <div className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 max-w-7xl mx-auto">
                <div className="py-8 md:py-12">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-2">
                        SYSTEMS
                    </h1>
                    <p className="text-sm md:text-base text-muted-foreground">
                        Professional camera and monitoring systems for industrial applications
                    </p>
                </div>
            </div>

            {/* Divider */}
            <div className="border-t border-border"></div>

            {/* Main Content */}
            <div className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 max-w-7xl mx-auto">
                <div className="py-8">
                    <h2 className="text-xl md:text-2xl font-bold text-foreground mb-6">Motec Systems</h2>
                    
                    {/* Systems Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
                        <Link href="/products/systems/rear-view-cameras">
                            <ProductCard
                                image='/products/systems/Motec/Rear view cameras/MC3000B/MC3000B.jpg'
                                name='Rear View Cameras'
                            />
                        </Link>
                        <Link href="/products/systems/front-camera-system">
                            <ProductCard
                                image='/products/systems/Motec/Front camera system/MC3050B-4-VKMS/MC3050B-4-VKMS.jpg'
                                name='Front Camera System'
                            />
                        </Link>
                        <Link href="/products/systems/digital-cameras">
                            <ProductCard
                                image='/products/systems/Motec/Digital camera/MCDB7000A/MCDB7000A.jpg'
                                name='Digital Cameras'
                            />
                        </Link>
                        <Link href="/products/systems/monitors">
                            <ProductCard
                                image='/products/systems/Motec/Monitors/MD3071A/MD3071A.jpg'
                                name='Monitors'
                            />
                        </Link>
                        <Link href="/products/systems/digital-monitors">
                            <ProductCard
                                image='/products/systems/Motec/Digital Monitors/MDDE1072/MDDE1072.jpg'
                                name='Digital Monitors'
                            />
                        </Link>
                        <Link href="/products/systems/fork-cameras">
                            <ProductCard
                                image='/products/systems/Motec/Fork Camera/MC9000/MC9000.jpg'
                                name='Fork Cameras'
                            />
                        </Link>
                        <Link href="/products/systems/video-control-units">
                            <ProductCard
                                image='/products/systems/Motec/Video control units/MVCD2000/MVCD2000.jpg'
                                name='Video Control Units'
                            />
                        </Link>
                        <Link href="/products/systems/crane-cameras">
                            <ProductCard
                                image='/products/systems/Motec/Crane Camera/MWS/MWS.jpg'
                                name='Crane Cameras'
                            />
                        </Link>
                        <Link href="/products/systems/transmissions">
                            <ProductCard
                                image='/products/systems/Motec/Transmission/MVRD1100/MVRD1100.jpg'
                                name='Transmissions'
                            />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
