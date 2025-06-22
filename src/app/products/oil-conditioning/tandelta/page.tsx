'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import ProductCard from '@/components/ProductCard';

export default function TandeltaPage() {
    const pathname = usePathname();
    
    const manufacturers = [
        { name: 'TanDelta', href: '/products/oil-conditioning/tandelta', isActive: true },
        { name: 'Hydrotechnik', href: '/products/oil-conditioning/hydrotechnik', isActive: false },
        { name: 'Filtertechnik', href: '/products/oil-conditioning/filtertechnik', isActive: false },
        { name: 'Evamo', href: '/products/oil-conditioning/evamo', isActive: false },
    ];

    return (
        <div className="min-h-screen bg-background">
            {/* Header Section */}
            <div className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 max-w-7xl mx-auto">
                <div className="py-8 md:py-12">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-2">
                        OIL CONDITIONING
                    </h1>
                    <p className="text-sm md:text-base text-muted-foreground">
                        Description
                    </p>
                </div>
            </div>

            {/* Divider */}
            <div className="border-t border-border"></div>

            {/* Main Content */}
            <div className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 max-w-7xl mx-auto">
                <div className="flex flex-col lg:flex-row gap-8 py-8">
                    {/* Sidebar */}
                    <div className="lg:w-64 flex-shrink-0">
                        <nav className="space-y-1">
                            {manufacturers.map((manufacturer) => (
                                <Link
                                    key={manufacturer.name}
                                    href={manufacturer.href}
                                    className={`block px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                                        manufacturer.isActive
                                            ? 'bg-primary/10 text-primary border-l-4 border-primary'
                                            : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                                    }`}
                                >
                                    {manufacturer.name}
                                </Link>
                            ))}
                        </nav>
                    </div>

                    {/* Content Area */}
                    <div className="flex-1">
                        <h2 className="text-xl md:text-2xl font-bold text-foreground mb-6">TanDelta</h2>
                        
                        {/* Products Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                            <Link href="/products/oil-conditioning/tandelta/oqsx-g2-oil-quality-sensor">
                                <ProductCard
                                    image='/products/oil conditioning/Tandelta/OQSx-G2 Oil Quality Sensor/OQSx-G2 Oil Quality Sensor-1.jpg'
                                    name='OQSx-G2 Oil Quality Sensor'
                                />
                            </Link>
                            <Link href="/products/oil-conditioning/tandelta/oqsx-g2-haz-oil-quality-sensor">
                                <ProductCard
                                    image='/products/oil conditioning/Tandelta/OQSx-G2 HAZ Oil Quality Sensor/OQSx-G2 HAZ Oil Quality Sensor.jpg'
                                    name='OQSx-G2 HAZ Oil Quality Sensor'
                                />
                            </Link>
                            <Link href="/products/oil-conditioning/tandelta/mot-mobile-oil-test-kit">
                                <ProductCard
                                    image='/products/oil conditioning/Tandelta/MOT – Mobile Oil Test Kit/MOT – Mobile Oil Test Kit.png'
                                    name='MOT – Mobile Oil Test Kit'
                                />
                            </Link>
                            <Link href="/products/oil-conditioning/tandelta/oqsx-g2">
                                <ProductCard
                                    image='/products/oil conditioning/Tandelta/OQSX-G2 Sensor kit/OQSX-G2 Sensor kit.jpg'
                                    name='OQSX-G2 Sensor kit'
                                />
                            </Link>
                            <Link href="/products/oil-conditioning/tandelta/sense2-display-kit">
                                <ProductCard
                                    image='/products/oil conditioning/Tandelta/SENSE2 Display Kit/SENSE2 Display Kit.jpg'
                                    name='SENSE2 Display Kit'
                                />
                            </Link>
                            <Link href="/products/oil-conditioning/tandelta/sense3-gateway-kit">
                                <ProductCard
                                    image='/products/oil conditioning/Tandelta/SENSE3 Gateway Kit/SENSE3 Gateway Kit.jpg'
                                    name='SENSE3 Gateway Kit'
                                />
                            </Link>
                            <Link href="/products/oil-conditioning/tandelta/gateway-oqtg">
                                <ProductCard
                                    image='/products/oil conditioning/Tandelta/Gateway (OQTg)/Gateway (OQTg).jpg'
                                    name='Gateway (OQTg)'
                                />
                            </Link>
                            <Link href="/products/oil-conditioning/tandelta/oqde-g2-display-express">
                                <ProductCard
                                    image='/products/oil conditioning/Tandelta/OQDe-G2 Display Express/OQDe-G2 Display Express.jpg'
                                    name='OQDe-G2 Display Express'
                                />
                            </Link>
                            <Link href="/products/oil-conditioning/tandelta/gateway-hub">
                                <ProductCard
                                    image='/products/oil conditioning/Tandelta/Gateway Hub/Gateway Hub.jpg'
                                    name='Gateway Hub'
                                />
                            </Link>
                            <Link href="/products/oil-conditioning/tandelta/manifold">
                                <ProductCard
                                    image='/products/oil conditioning/Tandelta/Manifold/Manifold.jpg'
                                    name='Manifold'
                                />
                            </Link>
                            <Link href="/products/oil-conditioning/tandelta/cables">
                                <ProductCard
                                    image='/products/oil conditioning/Tandelta/Cables/Cable-BBSt.png'
                                    name='Cables'
                                />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}