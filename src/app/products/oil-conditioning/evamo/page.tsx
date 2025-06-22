'use client';
import Link from 'next/link';
import ProductCard from '@/components/ProductCard';

export default function EvamoPage() {
    const manufacturers = [
        { name: 'TanDelta', href: '/products/oil-conditioning/tandelta', isActive: false },
        { name: 'Hydrotechnik', href: '/products/oil-conditioning/hydrotechnik', isActive: false },
        { name: 'Filtertechnik', href: '/products/oil-conditioning/filtertechnik', isActive: false },
        { name: 'Evamo', href: '/products/oil-conditioning/evamo', isActive: true },
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
                        <h2 className="text-xl md:text-2xl font-bold text-foreground mb-6">Evamo</h2>
                        
                        <div className="mb-8">
                            <p className="text-muted-foreground">
                                Evamo offers innovative oil conditioning solutions with focus on sustainability 
                                and environmental responsibility. Our products are designed for modern industrial 
                                applications requiring eco-friendly approaches to oil management.
                            </p>
                        </div>
                        
                        {/* Products Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                            <div className="p-6 bg-muted/20 rounded-lg border-2 border-dashed border-muted">
                                <h3 className="text-lg font-semibold text-foreground mb-2">Products Coming Soon</h3>
                                <p className="text-sm text-muted-foreground">
                                    Evamo product lineup is being finalized. Please contact us for more information 
                                    about our upcoming oil conditioning solutions.
                                </p>
                                <Link 
                                    href="/contact" 
                                    className="inline-block mt-4 text-primary hover:text-primary/80 text-sm font-medium"
                                >
                                    Contact for Details →
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
