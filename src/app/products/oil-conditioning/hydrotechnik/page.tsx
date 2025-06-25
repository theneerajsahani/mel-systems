'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Activity, Star, Wifi, Smartphone, Clock, Phone, Mail, ExternalLink, Search, Grid, List } from 'lucide-react';
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
    isNew?: boolean;
    isFeatured?: boolean;
}

const hydrotechnikProducts: ProductInfo[] = [
    // Watchlog USB Category
    {
        id: 'watchlog-usb',
        name: 'Watchlog USB',
        href: '/products/oil-conditioning/hydrotechnik/watchlog-usb',
        image: '/products/oil conditioning/Hydrotechnik/Watchlog-USB/Watchlog-USB.jpg',
        description: 'USB-based pressure and temperature measurement solutions with high-speed data acquisition',
        category: 'USB Solutions',
        features: ['USB connectivity', 'High-speed scanning', 'Multi-sensor support'],
        isFeatured: true
    },
    
    // Watchlog Bluetooth Sensors Category
    {
        id: 'watchlog-bluetooth',
        name: 'Watchlog Bluetooth Sensors, Gauges and Mobile Apps',
        href: '/products/oil-conditioning/hydrotechnik/watchlog-bluetooth-sensors-gauges-and-mobile-apps',
        image: '/products/oil conditioning/Hydrotechnik/Watchlog Bluetooth Sensors, Gauges and Mobile Apps/Watchlog Bluetooth Sensors, Gauges and Mobile Apps.jpg',
        description: 'Wireless Bluetooth monitoring solution with mobile app integration for real-time data collection',
        category: 'Bluetooth Solutions',
        features: ['Bluetooth connectivity', 'Mobile apps', 'Up to 12 sensors'],
        isFeatured: true
    },

    // Watchlog Wireless Sensors Category
    {
        id: 'watchlog-wireless-sensors',
        name: 'Watchlog Wireless Pressure, Temperature and Flow Sensors',
        href: '/products/oil-conditioning/hydrotechnik/watchlog-wireless-pressure-temperature-and-flow-sensors',
        image: '/products/oil conditioning/Hydrotechnik/Watchlog Wireless Pressure, Temperature and Flow Sensors/Watchlog Wireless Pressure, Temperature and Flow Sensors.jpg',
        description: 'Advanced wireless sensor systems for comprehensive hydraulic monitoring with long-range transmission',
        category: 'Wireless Solutions',
        features: ['Wireless technology', 'Multi-parameter sensing', 'Long-range transmission'],
        isNew: true
    },

    // Watchlog Pro Remote Monitoring Category
    {
        id: 'watchlog-pro-remote',
        name: 'Watchlog Pro Remote Monitoring',
        href: '/products/oil-conditioning/hydrotechnik/watchlog-pro-remote-monitoring',
        image: '/products/oil conditioning/Hydrotechnik/Watchlog Pro Remote Monitoring/Watchlog Pro Remote Monitoring.jpg',
        description: 'Professional cloud-based remote monitoring systems with cellular and Wi-Fi connectivity',
        category: 'Remote Monitoring',
        features: ['Cloud connectivity', 'Cellular/Wi-Fi', 'Professional grade'],
        isFeatured: true
    },

    // Watchlog CSV Visualizer Software
    {
        id: 'watchlog-csv-visualizer',
        name: 'Watchlog CSV Visualizer Software',
        href: '/products/oil-conditioning/hydrotechnik/watchlog-csv-visualizer-software',
        image: '/products/oil conditioning/Hydrotechnik/Watchlog CSV Visualizer Software/Watchlog CSV Visualizer Software.jpg',
        description: 'Advanced data visualization and analysis software for comprehensive reporting and insights',
        category: 'Software Solutions',
        features: ['Data visualization', 'CSV processing', 'Advanced analytics']
    }
];

const categories = [
    { name: 'All Products', value: 'all', count: hydrotechnikProducts.length },
    { name: 'USB Solutions', value: 'usb', count: hydrotechnikProducts.filter(p => p.category === 'USB Solutions').length },
    { name: 'Bluetooth Solutions', value: 'bluetooth', count: hydrotechnikProducts.filter(p => p.category === 'Bluetooth Solutions').length },
    { name: 'Wireless Solutions', value: 'wireless', count: hydrotechnikProducts.filter(p => p.category === 'Wireless Solutions').length },
    { name: 'Remote Monitoring', value: 'remote', count: hydrotechnikProducts.filter(p => p.category === 'Remote Monitoring').length },
    { name: 'Software Solutions', value: 'software', count: hydrotechnikProducts.filter(p => p.category === 'Software Solutions').length }
];

export default function HydrotechnikPage() {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

    const filteredProducts = hydrotechnikProducts.filter(product => {
        const matchesSearch = searchTerm === '' || 
            product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            product.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
            product.features.some(feature => feature.toLowerCase().includes(searchTerm.toLowerCase()));

        const matchesCategory = selectedCategory === 'all' || 
            (selectedCategory === 'usb' && product.category === 'USB Solutions') ||
            (selectedCategory === 'bluetooth' && product.category === 'Bluetooth Solutions') ||
            (selectedCategory === 'wireless' && product.category === 'Wireless Solutions') ||
            (selectedCategory === 'remote' && product.category === 'Remote Monitoring') ||
            (selectedCategory === 'software' && product.category === 'Software Solutions');

        return matchesSearch && matchesCategory;
    });

    return (
        <div className="min-h-screen bg-background">
            {/* Hero Section */}
            <div className="relative overflow-hidden bg-gradient-to-br from-blue-500/10 via-background to-primary/5">
                <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
                <div className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 max-w-7xl mx-auto relative">
                    <div className="py-12 md:py-16">
                        <div className="flex items-start justify-between">
                            <div className="flex-1">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500/20 to-blue-500/10 rounded-2xl flex items-center justify-center">
                                        <Activity className="w-8 h-8 text-blue-500" />
                                    </div>
                                    <div>
                                        <h1 className="text-4xl md:text-5xl font-bold text-foreground">
                                            Hydrotechnik
                                        </h1>
                                        <div className="flex items-center gap-2 mt-2">
                                            <Badge className="bg-gradient-to-r from-blue-500 to-blue-600 text-white">
                                                <Wifi className="w-3 h-3 mr-1" />
                                                Wireless Technology
                                            </Badge>
                                            <Badge variant="secondary">Hydraulic Monitoring</Badge>
                                        </div>
                                    </div>
                                </div>
                                
                                <p className="text-xl text-muted-foreground max-w-3xl leading-relaxed mb-8">
                                    Leading provider of hydraulic test equipment and monitoring solutions with advanced Watchlog wireless technology. 
                                    Specializing in pressure, temperature, and flow monitoring for industrial applications.
                                </p>

                                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                                    <Button size="lg" className="bg-blue-500 hover:bg-blue-600 text-white">
                                        <Phone className="w-4 h-4 mr-2" />
                                        Contact Hydrotechnik Expert
                                    </Button>
                                    <Button variant="outline" size="lg">
                                        <ExternalLink className="w-4 h-4 mr-2" />
                                        Visit Hydrotechnik Website
                                    </Button>
                                </div>

                                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                    <div className="text-center p-4 bg-white/50 backdrop-blur-sm rounded-xl border border-white/20">
                                        <div className="text-2xl font-bold text-blue-500 mb-1">{hydrotechnikProducts.length}</div>
                                        <div className="text-sm text-muted-foreground">Product Lines</div>
                                    </div>
                                    <div className="text-center p-4 bg-white/50 backdrop-blur-sm rounded-xl border border-white/20">
                                        <div className="text-2xl font-bold text-blue-500 mb-1">5</div>
                                        <div className="text-sm text-muted-foreground">Categories</div>
                                    </div>
                                    <div className="text-center p-4 bg-white/50 backdrop-blur-sm rounded-xl border border-white/20">
                                        <div className="text-2xl font-bold text-blue-500 mb-1">Wireless</div>
                                        <div className="text-sm text-muted-foreground">Technology</div>
                                    </div>
                                    <div className="text-center p-4 bg-white/50 backdrop-blur-sm rounded-xl border border-white/20">
                                        <div className="text-2xl font-bold text-blue-500 mb-1">Cloud</div>
                                        <div className="text-sm text-muted-foreground">Connected</div>
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
                                    placeholder="Search Hydrotechnik products..."
                                    className="w-full pl-10 pr-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
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
                                        className={selectedCategory === category.value ? "bg-blue-500 hover:bg-blue-600" : ""}
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
                                className={viewMode === 'grid' ? "bg-blue-500 hover:bg-blue-600" : ""}
                            >
                                <Grid className="w-4 h-4" />
                            </Button>
                            <Button
                                variant={viewMode === 'list' ? 'default' : 'outline'}
                                size="sm"
                                onClick={() => setViewMode('list')}
                                className={viewMode === 'list' ? "bg-blue-500 hover:bg-blue-600" : ""}
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
                        Hydrotechnik Products
                    </h2>
                    <p className="text-muted-foreground">
                        Showing {filteredProducts.length} of {hydrotechnikProducts.length} products
                    </p>
                </div>

                {/* Grid View */}
                {viewMode === 'grid' && (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredProducts.map((product) => (
                            <Link key={product.id} href={product.href} className="block group">
                                <Card className="h-full border-2 hover:border-blue-500/50 transition-all duration-300 group-hover:shadow-xl group-hover:-translate-y-1 overflow-hidden">
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
                                                <Badge className="bg-gradient-to-r from-blue-500 to-blue-600 text-white">
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
                                            <h3 className="font-bold text-foreground group-hover:text-blue-500 transition-colors leading-tight">
                                                {product.name}
                                            </h3>
                                            <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-blue-500 group-hover:translate-x-1 transition-all flex-shrink-0 ml-2" />
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
                                <Card className="border-2 hover:border-blue-500/50 transition-all duration-300 group-hover:shadow-lg overflow-hidden">
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
                                                    <h3 className="font-bold text-foreground group-hover:text-blue-500 transition-colors">
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
                                                        <Badge className="bg-gradient-to-r from-blue-500 to-blue-600 text-white text-xs">
                                                            Featured
                                                        </Badge>
                                                    )}
                                                    <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-blue-500 group-hover:translate-x-1 transition-all" />
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
            <div className="bg-gradient-to-r from-blue-500/5 to-primary/5 py-16">
                <div className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 max-w-5xl mx-auto text-center">
                    <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                        Need Help with Hydraulic Monitoring Solutions?
                    </h2>
                    <p className="text-muted-foreground text-lg mb-8">
                        Our Hydrotechnik experts can help you select the perfect wireless monitoring solution for your hydraulic systems
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button size="lg" className="bg-blue-500 hover:bg-blue-600 text-white">
                            <Phone className="w-4 h-4 mr-2" />
                            Speak with Hydrotechnik Expert
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
