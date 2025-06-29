'use client';
import Link from 'next/link';
import Image from 'next/image';
import { Monitor, Camera, Video, ArrowRight } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const systemCategories = [
    {
        id: 'rear-view-cameras',
        name: 'Rear View Cameras',
        description: 'Reliable rear visibility for industrial vehicles.',
        icon: Camera,
        products: [
            {
                name: 'MC3000B',
                image: '/products/systems/Motec/Rear view cameras/MC3000B/MC3000B.jpg',
                href: '/products/systems/rear-view-cameras/mc3000b',
                description: 'High performance rear view camera for all conditions.'
            },
            // Add more products here as needed
        ]
    },
    {
        id: 'front-camera-system',
        name: 'Front Camera System',
        description: 'Enhanced front monitoring and safety.',
        icon: Camera,
        products: [
            {
                name: 'MC3050B-4-VKMS',
                image: '/products/systems/Motec/Front camera system/MC3050B-4-VKMS/MC3050B-4-VKMS.jpg',
                href: '/products/systems/front-camera-system/mc3050b-4-vkms',
                description: 'Wide angle front camera system for industrial vehicles.'
            },
            // Add more products here as needed
        ]
    },
    {
        id: 'digital-cameras',
        name: 'Digital Cameras',
        description: 'High-resolution digital imaging solutions.',
        icon: Camera,
        products: [
            {
                name: 'MCDB7000A',
                image: '/products/systems/Motec/Digital camera/MCDB7000A/MCDB7000A.jpg',
                href: '/products/systems/digital-cameras/mcdb7000a',
                description: 'Digital camera for precise monitoring.'
            },
        ]
    },
    {
        id: 'monitors',
        name: 'Monitors',
        description: 'Durable displays for all environments.',
        icon: Monitor,
        products: [
            {
                name: 'MD3071A',
                image: '/products/systems/Motec/Monitors/MD3071A/MD3071A.jpg',
                href: '/products/systems/monitors/md3071a',
                description: 'Industrial-grade monitor for clear visuals.'
            },
        ]
    },
    {
        id: 'digital-monitors',
        name: 'Digital Monitors',
        description: 'Advanced digital monitoring displays.',
        icon: Monitor,
        products: [
            {
                name: 'MDDE1072',
                image: '/products/systems/Motec/Digital Monitors/MDDE1072/MDDE1072.jpg',
                href: '/products/systems/digital-monitors/mdde1072',
                description: 'Digital monitor for advanced applications.'
            },
        ]
    },
    {
        id: 'fork-cameras',
        name: 'Fork Cameras',
        description: 'Precision vision for fork operations.',
        icon: Camera,
        products: [
            {
                name: 'MC9000',
                image: '/products/systems/Motec/Fork Camera/MC9000/MC9000.jpg',
                href: '/products/systems/fork-cameras/mc9000',
                description: 'Fork camera for accurate positioning.'
            },
        ]
    },
    {
        id: 'video-control-units',
        name: 'Video Control Units',
        description: 'Centralized video management.',
        icon: Video,
        products: [
            {
                name: 'MVCD2000',
                image: '/products/systems/Motec/Video control units/MVCD2000/MVCD2000.jpg',
                href: '/products/systems/video-control-units/mvcd2000',
                description: 'Video control unit for system integration.'
            },
        ]
    },
    {
        id: 'crane-cameras',
        name: 'Crane Cameras',
        description: 'Safety and visibility for crane operators.',
        icon: Camera,
        products: [
            {
                name: 'MWS',
                image: '/products/systems/Motec/Crane Camera/MWS/MWS.jpg',
                href: '/products/systems/crane-cameras/mws',
                description: 'Crane camera for operator safety.'
            },
        ]
    },
    {
        id: 'transmissions',
        name: 'Transmissions',
        description: 'Robust transmission monitoring.',
        icon: Video,
        products: [
            {
                name: 'MVRD1100',
                image: '/products/systems/Motec/Transmission/MVRD1100/MVRD1100.jpg',
                href: '/products/systems/transmissions/mvrd1100',
                description: 'Transmission monitoring for reliability.'
            },
        ]
    },
];

export default function SystemsPage() {
    return (
        <div className="min-h-screen bg-background">
            {/* Hero Section */}
            <div className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-secondary/5">
                <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
                <div className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 max-w-7xl mx-auto relative">
                    <div className="py-12 md:py-20">
                        <div className="text-center mb-12">
                            <div className="inline-flex items-center justify-center p-2 bg-primary/10 rounded-full mb-6">
                                <Monitor className="w-6 h-6 text-primary" />
                            </div>
                            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
                                Camera & Monitoring
                                <span className="block text-primary">Systems</span>
                            </h1>
                            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed mb-8">
                                Professional camera and monitoring systems for industrial applications. 
                                Enhance safety, visibility, and operational efficiency with advanced technology.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* System Categories & Products Section */}
            <div className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 max-w-7xl mx-auto pb-16">
                <div className="mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                        Leading Camera & Monitoring Technologies
                    </h2>
                    <p className="text-muted-foreground text-lg mb-6">
                        Explore systems and solutions from industry-leading technology providers
                    </p>
                </div>

                {/* Category Sections */}
                <div className="space-y-16">
                    {systemCategories.map((category) => {
                        const IconComponent = category.icon;
                        return (
                            <div key={category.id} className="company-section">
                                {/* Category Header */}
                                <div className="flex items-start justify-between mb-8 p-6 bg-gradient-to-r from-white to-gray-50/50 rounded-2xl border border-gray-200/50 shadow-sm">
                                    <div className="flex items-start gap-6">
                                        <div className="w-16 h-16 bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl flex items-center justify-center shadow-sm">
                                            <IconComponent className="w-8 h-8 text-primary" />
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                                                {category.name}
                                            </h3>
                                            <p className="text-muted-foreground text-lg leading-relaxed mb-4 max-w-3xl">
                                                {category.description}
                                            </p>
                                            <div className="flex items-center gap-6 text-sm">
                                                <div className="flex items-center gap-2 text-muted-foreground">
                                                    <Badge variant="secondary">{category.products.length} Products</Badge>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Product Carousel */}
                                <div className="relative">
                                    <Carousel
                                        opts={{
                                            align: "start",
                                            loop: false,
                                            slidesToScroll: 1,
                                        }}
                                        className="w-full"
                                    >
                                        <CarouselContent className="-ml-4">
                                            {category.products.map((product) => (
                                                <CarouselItem key={product.name} className="pl-4 md:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                                                    <Link href={product.href} className="block h-full group">
                                                        <Card className="h-full border-2 hover:border-primary/50 transition-all duration-300 group-hover:shadow-lg group-hover:-translate-y-1 overflow-hidden">
                                                            <div className="relative h-48 bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden">
                                                                <Image
                                                                    src={product.image}
                                                                    alt={product.name}
                                                                    fill
                                                                    className="object-contain p-4 group-hover:scale-105 transition-transform duration-300"
                                                                />
                                                                <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                                            </div>
                                                            <div className="p-4">
                                                                <div className="flex items-start justify-between mb-2">
                                                                    <h4 className="font-semibold text-foreground text-sm leading-tight group-hover:text-primary transition-colors">
                                                                        {product.name}
                                                                    </h4>
                                                                    <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all flex-shrink-0 ml-2" />
                                                                </div>
                                                                <p className="text-xs text-muted-foreground mb-3 leading-relaxed">
                                                                    {product.description}
                                                                </p>
                                                            </div>
                                                        </Card>
                                                    </Link>
                                                </CarouselItem>
                                            ))}
                                        </CarouselContent>
                                        <div className="hidden md:block">
                                            <CarouselPrevious className="absolute -left-6 top-1/2 -translate-y-1/2 bg-white hover:bg-gray-50 border-2 shadow-lg" />
                                            <CarouselNext className="absolute -right-6 top-1/2 -translate-y-1/2 bg-white hover:bg-gray-50 border-2 shadow-lg" />
                                        </div>
                                    </Carousel>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
