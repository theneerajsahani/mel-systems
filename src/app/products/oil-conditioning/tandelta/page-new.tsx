'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Zap, Star, Shield, TrendingUp, Clock, Phone, Mail, ExternalLink, Filter, Search, Grid, List } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

// Company-specific data structure
interface ProductInfo {
    id: string;
    name: string;
    href: string;
    image: string;
    description: string;
    category: string;
    features: string[];
    productCount?: number;
    isNew?: boolean;
    isFeatured?: boolean;
}

const tandeltaProducts: ProductInfo[] = [
    {
        id: 'oqsx-g2-oil-quality-sensor',
        name: 'OQSx-G2 Oil Quality Sensor',
        href: '/products/oil-conditioning/tandelta/oqsx-g2-oil-quality-sensor',
        image: '/products/oil conditioning/Tandelta/OQSx-G2 Oil Quality Sensor/OQSx-G2 Oil Quality Sensor-1.jpg',
        description: 'Real-time oil quality monitoring with molecular-level precision and FSH™ technology',
        category: 'Oil Quality Sensors',
        features: ['Real-time monitoring', 'FSH™ technology', 'Molecular detection'],
        isFeatured: true
    },
    {
        id: 'oqsx-g2-haz',
        name: 'OQSx-G2 HAZ Oil Quality Sensor',
        href: '/products/oil-conditioning/tandelta/oqsx-g2-haz-oil-quality-sensor',
        image: '/products/oil conditioning/Tandelta/OQSx-G2 HAZ Oil Quality Sensor/OQSx-G2 HAZ Oil Quality Sensor.jpg',
        description: 'Hazardous area certified oil quality sensor for extreme environments',
        category: 'Oil Quality Sensors',
        features: ['Hazardous area certified', 'Explosion-proof', 'Industrial grade'],
        isNew: true
    },
    {
        id: 'oqde-g2-display',
        name: 'OQDe-G2 Display Express',
        href: '/products/oil-conditioning/tandelta/oqde-g2-display-express',
        image: '/products/oil conditioning/Tandelta/OQDe-G2 Display Express/OQDe-G2 Display Express.jpg',
        description: 'Intuitive display system for real-time oil quality visualization',
        category: 'Display Systems',
        features: ['Touch interface', 'Real-time data', 'Multiple sensors'],
        isFeatured: true
    },
    {
        id: 'gateway-oqtg',
        name: 'Gateway (OQTg)',
        href: '/products/oil-conditioning/tandelta/gateway-oqtg',
        image: '/products/oil conditioning/Tandelta/Gateway (OQTg)/Gateway (OQTg).jpg',
        description: 'IoT gateway for remote monitoring and data transmission',
        category: 'Gateway Systems',
        features: ['IoT connectivity', 'Cloud integration', 'Remote monitoring']
    },
    {
        id: 'gateway-hub',
        name: 'Gateway Hub',
        href: '/products/oil-conditioning/tandelta/gateway-hub',
        image: '/products/oil conditioning/Tandelta/Gateway Hub/Gateway Hub.jpg',
        description: 'Central hub for multiple sensor connections and data management',
        category: 'Gateway Systems',
        features: ['Multi-sensor support', 'Data aggregation', 'Network connectivity']
    },
    {
        id: 'mot-mobile-kit',
        name: 'MOT – Mobile Oil Test Kit',
        href: '/products/oil-conditioning/tandelta/mot-mobile-oil-test-kit',
        image: '/products/oil conditioning/Tandelta/MOT – Mobile Oil Test Kit/MOT – Mobile Oil Test Kit.png',
        description: 'Portable oil analysis kit for field testing and diagnostics',
        category: 'Mobile Test Kits',
        features: ['Portable design', 'Field testing', 'Quick results']
    },
    {
        id: 'manifold',
        name: 'Manifold',
        href: '/products/oil-conditioning/tandelta/manifold',
        image: '/products/oil conditioning/Tandelta/Manifold/Manifold.jpg',
        description: 'Connection manifold for sensor integration and system setup',
        category: 'Manifolds & Cables',
        features: ['Multiple connections', 'Easy integration', 'Durable design']
    },
    {
        id: 'oqsx-g2-sensor-kit',
        name: 'OQSX-G2 Sensor Kit',
        href: '/products/oil-conditioning/tandelta/oqsx-g2-sensor-kit',
        image: '/products/oil conditioning/Tandelta/OQSX-G2 Sensor kit/OQSX-G2 Sensor kit.jpg',
        description: 'Complete sensor kit with all necessary components for installation',
        category: 'Oil Quality Sensors',
        features: ['Complete kit', 'Easy installation', 'All components included']
    },
    {
        id: 'sense2-display-kit',
        name: 'SENSE2 Display Kit',
        href: '/products/oil-conditioning/tandelta/sense2-display-kit',
        image: '/products/oil conditioning/Tandelta/SENSE2 Display Kit/SENSE2 Display Kit.jpg',
        description: 'Advanced display kit for comprehensive oil monitoring visualization',
        category: 'Display Systems',
        features: ['Advanced visualization', 'Multi-parameter display', 'User-friendly interface']
    },
    {
        id: 'sense3-gateway-kit',
        name: 'SENSE3 Gateway Kit',
        href: '/products/oil-conditioning/tandelta/sense3-gateway-kit',
        image: '/products/oil conditioning/Tandelta/SENSE3 Gateway Kit/SENSE3 Gateway Kit.jpg',
        description: 'Next-generation gateway kit for enhanced connectivity and monitoring',
        category: 'Gateway Systems',
        features: ['Next-gen connectivity', 'Enhanced monitoring', 'Future-ready technology'],
        isNew: true
    },
    {
        id: 'cables',
        name: 'Cables',
        href: '/products/oil-conditioning/tandelta/cables',
        image: '/products/oil conditioning/Tandelta/Cables/Cable-BBSt.png',
        description: 'High-quality cables for sensor connections and data transmission',
        category: 'Manifolds & Cables',
        features: ['High-quality construction', 'Reliable transmission', 'Various lengths available']
    }
];

const categories = [
    { name: 'All Products', value: 'all', count: tandeltaProducts.length },
    { name: 'Oil Quality Sensors', value: 'sensors', count: tandeltaProducts.filter(p => p.category === 'Oil Quality Sensors').length },
    { name: 'Display Systems', value: 'displays', count: tandeltaProducts.filter(p => p.category === 'Display Systems').length },
    { name: 'Gateway Systems', value: 'gateways', count: tandeltaProducts.filter(p => p.category === 'Gateway Systems').length },
    { name: 'Mobile Test Kits', value: 'mobile', count: tandeltaProducts.filter(p => p.category === 'Mobile Test Kits').length },
    { name: 'Manifolds & Cables', value: 'manifolds', count: tandeltaProducts.filter(p => p.category === 'Manifolds & Cables').length }
];

export default function TandeltaPage() {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

    const filteredProducts = tandeltaProducts.filter(product => {
        const matchesSearch = searchTerm === '' || 
            product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            product.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
            product.features.some(feature => feature.toLowerCase().includes(searchTerm.toLowerCase()));

        const matchesCategory = selectedCategory === 'all' || 
            (selectedCategory === 'sensors' && product.category === 'Oil Quality Sensors') ||
            (selectedCategory === 'displays' && product.category === 'Display Systems') ||
            (selectedCategory === 'gateways' && product.category === 'Gateway Systems') ||
            (selectedCategory === 'mobile' && product.category === 'Mobile Test Kits') ||
            (selectedCategory === 'manifolds' && product.category === 'Manifolds & Cables');

        return matchesSearch && matchesCategory;
    });

    return (
        <div className="min-h-screen bg-background">
            {/* Hero Section */}
            <div className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-background to-blue-500/5">
                <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
                <div className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 max-w-7xl mx-auto relative">
                    <div className="py-12 md:py-16">
                        <div className="flex items-start justify-between">
                            <div className="flex-1">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl flex items-center justify-center">
                                        <Zap className="w-8 h-8 text-primary" />
                                    </div>
                                    <div>
                                        <h1 className="text-4xl md:text-5xl font-bold text-foreground">
                                            TanDelta
                                        </h1>
                                        <div className="flex items-center gap-2 mt-2">
                                            <Badge className="bg-gradient-to-r from-primary to-primary/80 text-white">
                                                <Star className="w-3 h-3 mr-1" />
                                                Featured Partner
                                            </Badge>
                                            <Badge variant="secondary">Oil Quality Technology</Badge>
                                        </div>
                                    </div>
                                </div>
                                
                                <p className="text-xl text-muted-foreground max-w-3xl leading-relaxed mb-8">
                                    Advanced real-time oil quality analysis sensors with molecular-level detection and FSH™ core technology. 
                                    Leading innovation in predictive maintenance and equipment protection.
                                </p>

                                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                                    <Button size="lg" className="bg-primary hover:bg-primary/90">
                                        <Phone className="w-4 h-4 mr-2" />
                                        Contact TanDelta Expert
                                    </Button>
                                    <Button variant="outline" size="lg">
                                        <ExternalLink className="w-4 h-4 mr-2" />
                                        Visit TanDelta Website
                                    </Button>
                                </div>

                                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                    <div className="text-center p-4 bg-white/50 backdrop-blur-sm rounded-xl border border-white/20">
                                        <div className="text-2xl font-bold text-primary mb-1">{tandeltaProducts.length}</div>
                                        <div className="text-sm text-muted-foreground">Products</div>
                                    </div>
                                    <div className="text-center p-4 bg-white/50 backdrop-blur-sm rounded-xl border border-white/20">
                                        <div className="text-2xl font-bold text-primary mb-1">5</div>
                                        <div className="text-sm text-muted-foreground">Categories</div>
                                    </div>
                                    <div className="text-center p-4 bg-white/50 backdrop-blur-sm rounded-xl border border-white/20">
                                        <div className="text-2xl font-bold text-primary mb-1">24/7</div>
                                        <div className="text-sm text-muted-foreground">Monitoring</div>
                                    </div>
                                    <div className="text-center p-4 bg-white/50 backdrop-blur-sm rounded-xl border border-white/20">
                                        <div className="text-2xl font-bold text-primary mb-1">3-5</div>
                                        <div className="text-sm text-muted-foreground">Days Delivery</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Search and Filter Section */}
            <div className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 max-w-7xl mx-auto py-8">
                <div className="bg-white rounded-xl shadow-sm border p-6">
                    <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
                        <div className="flex flex-col md:flex-row gap-4 flex-1">
                            <div className="relative flex-1">
                                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                                <input
                                    type="text"
                                    placeholder="Search TanDelta products..."
                                    className="w-full pl-10 pr-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                />
                            </div>
                            <div className="flex gap-2 flex-wrap">
                                {categories.map((category) => (
                                    <Button
                                        key={category.value}
                                        variant={selectedCategory === category.value ? "default" : "outline"}
                                        size="sm"
                                        onClick={() => setSelectedCategory(category.value)}
                                    >
                                        {category.name}
                                        <Badge variant="secondary" className="ml-2 text-xs">
                                            {category.count}
                                        </Badge>
                                    </Button>
                                ))}
                            </div>
                        </div>
                        
                        <div className="flex items-center gap-2">
                            <Button
                                variant={viewMode === 'grid' ? 'default' : 'outline'}
                                size="sm"
                                onClick={() => setViewMode('grid')}
                            >
                                <Grid className="w-4 h-4" />
                            </Button>
                            <Button
                                variant={viewMode === 'list' ? 'default' : 'outline'}
                                size="sm"
                                onClick={() => setViewMode('list')}
                            >
                                <List className="w-4 h-4" />
                            </Button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Products Section */}
            <div className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 max-w-7xl mx-auto pb-16">
                <div className="mb-8">
                    <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                        TanDelta Products
                    </h2>
                    <p className="text-muted-foreground">
                        Showing {filteredProducts.length} of {tandeltaProducts.length} products
                    </p>
                </div>

                {/* Grid View */}
                {viewMode === 'grid' && (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredProducts.map((product) => (
                            <Link key={product.id} href={product.href} className="block group">
                                <Card className="h-full border-2 hover:border-primary/50 transition-all duration-300 group-hover:shadow-xl group-hover:-translate-y-1 overflow-hidden">
                                    {/* Product Image */}
                                    <div className="relative h-56 bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden">
                                        <Image
                                            src={product.image}
                                            alt={product.name}
                                            fill
                                            className="object-contain p-4 group-hover:scale-105 transition-transform duration-300"
                                        />
                                        
                                        {/* Badges */}
                                        <div className="absolute top-3 right-3 flex flex-col gap-2">
                                            {product.isNew && (
                                                <Badge className="bg-green-500 text-white">New</Badge>
                                            )}
                                            {product.isFeatured && (
                                                <Badge className="bg-gradient-to-r from-primary to-primary/80 text-white">
                                                    <Star className="w-3 h-3 mr-1" />
                                                    Featured
                                                </Badge>
                                            )}
                                        </div>
                                        
                                        <div className="absolute top-3 left-3">
                                            <Badge variant="secondary" className="text-xs">
                                                {product.category}
                                            </Badge>
                                        </div>
                                    </div>

                                    {/* Product Content */}
                                    <div className="p-6">
                                        <div className="flex items-start justify-between mb-3">
                                            <h3 className="font-bold text-foreground group-hover:text-primary transition-colors leading-tight">
                                                {product.name}
                                            </h3>
                                            <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all flex-shrink-0 ml-2" />
                                        </div>
                                        
                                        <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                                            {product.description}
                                        </p>
                                        
                                        <div className="space-y-2">
                                            <h4 className="text-xs font-semibold text-foreground">Key Features:</h4>
                                            <div className="flex flex-wrap gap-1">
                                                {product.features.slice(0, 3).map((feature, index) => (
                                                    <Badge key={index} variant="outline" className="text-xs">
                                                        {feature}
                                                    </Badge>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </Card>
                            </Link>
                        ))}
                    </div>
                )}

                {/* List View */}
                {viewMode === 'list' && (
                    <div className="space-y-4">
                        {filteredProducts.map((product) => (
                            <Link key={product.id} href={product.href} className="block group">
                                <Card className="border-2 hover:border-primary/50 transition-all duration-300 group-hover:shadow-lg overflow-hidden">
                                    <div className="flex items-center gap-6 p-6">
                                        <div className="relative w-24 h-24 bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg overflow-hidden flex-shrink-0">
                                            <Image
                                                src={product.image}
                                                alt={product.name}
                                                fill
                                                className="object-contain p-2"
                                            />
                                        </div>
                                        
                                        <div className="flex-1">
                                            <div className="flex items-start justify-between mb-2">
                                                <div>
                                                    <h3 className="font-bold text-foreground group-hover:text-primary transition-colors">
                                                        {product.name}
                                                    </h3>
                                                    <Badge variant="secondary" className="text-xs mt-1">
                                                        {product.category}
                                                    </Badge>
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    {product.isNew && (
                                                        <Badge className="bg-green-500 text-white text-xs">New</Badge>
                                                    )}
                                                    {product.isFeatured && (
                                                        <Badge className="bg-gradient-to-r from-primary to-primary/80 text-white text-xs">
                                                            Featured
                                                        </Badge>
                                                    )}
                                                    <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                                                </div>
                                            </div>
                                            
                                            <p className="text-muted-foreground text-sm mb-3">
                                                {product.description}
                                            </p>
                                            
                                            <div className="flex flex-wrap gap-1">
                                                {product.features.map((feature, index) => (
                                                    <Badge key={index} variant="outline" className="text-xs">
                                                        {feature}
                                                    </Badge>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </Card>
                            </Link>
                        ))}
                    </div>
                )}

                {/* No Results */}
                {filteredProducts.length === 0 && (
                    <div className="text-center py-16">
                        <div className="bg-muted/20 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                            <Search className="w-10 h-10 text-muted-foreground" />
                        </div>
                        <h3 className="text-xl font-semibold text-foreground mb-3">No products found</h3>
                        <p className="text-muted-foreground text-lg mb-6">Try adjusting your search terms or filters</p>
                        <Button 
                            variant="outline" 
                            onClick={() => {
                                setSearchTerm('');
                                setSelectedCategory('all');
                            }}
                        >
                            Clear Filters
                        </Button>
                    </div>
                )}
            </div>

            {/* CTA Section */}
            <div className="bg-gradient-to-r from-primary/5 to-blue-500/5 py-16">
                <div className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 max-w-5xl mx-auto text-center">
                    <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                        Need Help Choosing the Right TanDelta Solution?
                    </h2>
                    <p className="text-muted-foreground text-lg mb-8">
                        Our experts can help you select the perfect oil quality monitoring solution for your specific application
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button size="lg" className="bg-primary hover:bg-primary/90">
                            <Phone className="w-4 h-4 mr-2" />
                            Speak with TanDelta Expert
                        </Button>
                        <Button variant="outline" size="lg">
                            <Mail className="w-4 h-4 mr-2" />
                            Request Technical Documentation
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
