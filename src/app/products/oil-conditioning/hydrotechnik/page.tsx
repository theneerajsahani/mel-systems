'use client';

import { useState, useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowRight, Zap, Star, Phone, Mail, ExternalLink, Search, Grid, List } from 'lucide-react';
import {
  watchlogUSBCategoryData,
  watchlogBluetoothSensorsGaugesAndMobileAppsCategoryData,
  watchlogWirelessPressureFlowTemperatureTestKitData,
  watchlogWirelessVisionData,
  watchlogAtexWirelessPressureSensorsData,
  watchlogWirelessPressureSensorsData,
  watchlogWirelessTemperatureSensorsData,
  watchlogWirelessLinearPositionSensorData,
  watchlogWirelessTurbineFlowMetersData,
  watchlogWirelessOvalGearFlowMetersData,
  watchlogWirelessUsbBaseStationsReceiversData,
  wlwArWirelessSignalExtenderData,
  watchlogWirelessSignalGatewayModulesData,
  watchlogWirelessConfigMonitoringLoggingSoftwareData,
  watchlogWirelessAccessoriesData,
  wlwplSeriesCellularLevelSensorData,
  watchlogProOrbCellularWiFiCloudGatewayForMobileApplicationsData,
  watchlogProQuadCellularWiFiCloudGatewayForFixedSystemsData,
  watchlogProHydraulicSystemMonitoringData,
  watchlogProCustomCloudMonitoringData,
  watchlogCSVVisualizerSoftwareData
} from '@/lib/oil-conditioning-products';

// Gather all category data
const hydrotechnikCategoryData = [
  watchlogUSBCategoryData,
  watchlogBluetoothSensorsGaugesAndMobileAppsCategoryData,
  watchlogWirelessPressureFlowTemperatureTestKitData,
  watchlogWirelessVisionData,
  watchlogAtexWirelessPressureSensorsData,
  watchlogWirelessPressureSensorsData,
  watchlogWirelessTemperatureSensorsData,
  watchlogWirelessLinearPositionSensorData,
  watchlogWirelessTurbineFlowMetersData,
  watchlogWirelessOvalGearFlowMetersData,
  watchlogWirelessUsbBaseStationsReceiversData,
  wlwArWirelessSignalExtenderData,
  watchlogWirelessSignalGatewayModulesData,
  watchlogWirelessConfigMonitoringLoggingSoftwareData,
  watchlogWirelessAccessoriesData,
  wlwplSeriesCellularLevelSensorData,
  watchlogProOrbCellularWiFiCloudGatewayForMobileApplicationsData,
  watchlogProQuadCellularWiFiCloudGatewayForFixedSystemsData,
  watchlogProHydraulicSystemMonitoringData,
  watchlogProCustomCloudMonitoringData,
  watchlogCSVVisualizerSoftwareData
];

// Flatten all products from all categories
const hydrotechnikProducts = hydrotechnikCategoryData.flatMap(cat => {
  if (cat.categoryProductIds && Array.isArray(cat.categoryProductIds)) {
    return cat.categoryProductIds.map(pid => {
      const product = hydrotechnikCategoryData.find(p => p.id === pid);
      return product ? {
        id: product.id,
        name: product.name,
        description: product.description?.[0] || '',
        image: product.images?.[0]?.src || '',
        href: `/products/oil-conditioning/hydrotechnik/${cat.slugPath?.[2] || cat.id}/${product.id}`,
        category: cat.name,
        features: product.features || []
      } : null;
    }).filter((p): p is NonNullable<typeof p> => !!p);
  } else {
    // If no categoryProductIds, treat the category as a product
    return [{
      id: cat.id,
      name: cat.name,
      description: cat.description?.[0] || '',
      image: cat.images?.[0]?.src || '',
      href: `/products/oil-conditioning/hydrotechnik/${cat.slugPath?.[2] || cat.id}/${cat.id}`,
      category: cat.name,
      features: cat.features || []
    }];
  }
}).flat();

// Build categories for filtering
const categories = [
  { name: 'All Products', value: 'all', count: hydrotechnikProducts.length },
  ...Array.from(new Set(hydrotechnikProducts.map(p => p.category))).map(cat => ({
    name: cat,
    value: cat.toLowerCase().replace(/\s+/g, '-'),
    count: hydrotechnikProducts.filter(p => p.category === cat).length
  }))
];

function getValidImageSrc(image?: any) {
  // Only allow strings
  if (typeof image !== 'string') return '/placeholder.png';
  // Remove whitespace and check for empty, 'undefined', or 'null'
  const trimmed = image.trim();
  if (!trimmed || trimmed === 'undefined' || trimmed === 'null') {
    return '/placeholder.png';
  }
  // Absolute URL
  if (trimmed.startsWith('http://') || trimmed.startsWith('https://')) {
    return trimmed;
  }
  // If it looks like a file path but doesn't start with '/', add it
  if (!trimmed.startsWith('/')) {
    return '/' + trimmed;
  }
  return trimmed;
}

export default function HydrotechnikCategoryPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const filteredProducts = useMemo(() => {
    return hydrotechnikProducts.filter(product => {
      const matchesSearch = searchTerm === '' ||
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.features.some(feature => feature.toLowerCase().includes(searchTerm.toLowerCase()));
      const matchesCategory = selectedCategory === 'all' ||
        product.category.toLowerCase().replace(/\s+/g, '-') === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  // Debug: log all product.image values in filteredProducts
  if (typeof window !== 'undefined') {
    filteredProducts.forEach(product => {
      console.log('Hydrotechnik product image:', product.image);
    });
  }

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
                      Hydrotechnik
                    </h1>
                    <div className="flex items-center gap-2 mt-2">
                      <Badge className="bg-gradient-to-r from-primary to-primary/80 text-white">
                        <Star className="w-3 h-3 mr-1" />
                        Featured Partner
                      </Badge>
                      <Badge variant="secondary">Wireless Monitoring</Badge>
                    </div>
                  </div>
                </div>
                <p className="text-xl text-muted-foreground max-w-3xl leading-relaxed mb-8">
                  Comprehensive monitoring solutions for pressure, temperature, and flow with wireless connectivity.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <Button size="lg" className="bg-primary hover:bg-primary/90">
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
                    <div className="text-2xl font-bold text-primary mb-1">{hydrotechnikProducts.length}</div>
                    <div className="text-sm text-muted-foreground">Products</div>
                  </div>
                  <div className="text-center p-4 bg-white/50 backdrop-blur-sm rounded-xl border border-white/20">
                    <div className="text-2xl font-bold text-primary mb-1">{categories.length - 1}</div>
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
                  placeholder="Search Hydrotechnik products..."
                  className="w-full pl-10 pr-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                  value={searchTerm}
                  onChange={e => setSearchTerm(e.target.value)}
                />
              </div>
              <div className="flex gap-2 flex-wrap">
                {categories.map(category => (
                  <Button
                    key={category.value}
                    variant={selectedCategory === category.value ? 'default' : 'outline'}
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
            Hydrotechnik Products
          </h2>
          <p className="text-muted-foreground">
            Showing {filteredProducts.length} of {hydrotechnikProducts.length} products
          </p>
        </div>
        {/* Grid View */}
        {viewMode === 'grid' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map(product => {
              const imgSrc = getValidImageSrc(product.image);
              if (typeof window !== 'undefined') {
                console.log('Image src for product:', product.name, imgSrc);
              }
              return (
                <Link key={product.id} href={product.href} className="block group">
                  <Card className="h-full border-2 hover:border-primary/50 transition-all duration-300 group-hover:shadow-xl group-hover:-translate-y-1 overflow-hidden">
                    {/* Product Image */}
                    <div className="relative h-56 bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden">
                      <Image
                        src={imgSrc}
                        alt={product.name}
                        fill
                        className="object-contain p-4 group-hover:scale-105 transition-transform duration-300"
                      />
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
              );
            })}
          </div>
        )}
        {/* List View */}
        {viewMode === 'list' && (
          <div className="space-y-4">
            {filteredProducts.map(product => {
              const imgSrc = getValidImageSrc(product.image);
              if (typeof window !== 'undefined') {
                console.log('Image src for product:', product.name, imgSrc);
              }
              return (
                <Link key={product.id} href={product.href} className="block group">
                  <Card className="border-2 hover:border-primary/50 transition-all duration-300 group-hover:shadow-lg overflow-hidden">
                    <div className="flex items-center gap-6 p-6">
                      <div className="relative w-24 h-24 bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg overflow-hidden flex-shrink-0">
                        <Image
                          src={imgSrc}
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
                          <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
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
              );
            })}
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
            Need Help Choosing the Right Hydrotechnik Solution?
          </h2>
          <p className="text-muted-foreground text-lg mb-8">
            Our experts can help you select the perfect monitoring solution for your specific application
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
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
