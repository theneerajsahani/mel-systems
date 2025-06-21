import ProductCard from "@/components/ProductCard"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

export default function products() {
    return (
        <div className="min-h-screen w-full bg-background">
            {/* Hero Section */}
            <div className="relative bg-gradient-to-r from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
                <div className="py-16 sm:py-20 md:py-24 lg:py-28 xl:py-32 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 max-w-7xl mx-auto">
                    <div className="text-center space-y-4">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground tracking-tight">
                            Our Products
                        </h1>
                        <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                            Discover our comprehensive range of industrial solutions designed for precision and reliability
                        </p>
                    </div>
                </div>
            </div>
            
            {/* Product Categories */}
            <div className="py-16 sm:py-20 md:py-24">
                {/* Oil Conditioning Section */}
                <div className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 max-w-7xl mx-auto">
                    <div className="flex flex-col lg:flex-row py-12 sm:py-16 md:py-20 border-t border-border items-start lg:items-center gap-8 lg:gap-16">
                        {/* Title Section */}
                        <div className="flex flex-col gap-4 md:gap-6 lg:w-80 xl:w-96 flex-shrink-0">
                            <div className="space-y-2">
                                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
                                    Oil Conditioning
                                </h2>
                                <div className="w-16 h-1 bg-primary rounded-full"></div>
                            </div>
                            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                                Advanced oil quality monitoring and conditioning solutions to ensure optimal equipment performance and longevity.
                            </p>
                            <Link href="/products/oil-conditioning" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-medium group">
                                <span className="text-base md:text-lg">Explore Oil Conditioning</span>
                                <ArrowRight className="w-5 h-5 md:w-6 md:h-6 transition-transform group-hover:translate-x-1" />
                            </Link>
                        </div>
                        
                        {/* Products Carousel */}
                        <div className="w-full lg:flex-1 relative">
                            <Carousel 
                                opts={{
                                    align: "start",
                                    loop: true,
                                    slidesToScroll: 1,
                                    skipSnaps: false,
                                    dragFree: true,
                                }} 
                                className="w-full"
                            >
                                <CarouselContent className="-ml-2 sm:-ml-4">
                                    <CarouselItem className="pl-2 sm:pl-4 basis-full sm:basis-1/3">
                                        <div className="h-full">
                                            <ProductCard 
                                                image="/products/oil conditioning/Tandelta/OQSx-G2 Oil Quality Sensor/OQSx-G2 Oil Quality Sensor-1.jpg"
                                                name="Tandelta Oil Quality Sensors"
                                            />
                                        </div>
                                    </CarouselItem>
                                    <CarouselItem className="pl-2 sm:pl-4 basis-full sm:basis-1/3">
                                        <div className="h-full">
                                            <ProductCard 
                                                image="/products/oil conditioning/Hydrotechnik/Watchlog-USB/Wactchlog USB.png"
                                                name="Hydrotechnik Monitoring Systems"
                                            />
                                        </div>
                                    </CarouselItem>
                                    <CarouselItem className="pl-2 sm:pl-4 basis-full sm:basis-1/3">
                                        <div className="h-full">
                                            <ProductCard 
                                                image="/products/oil conditioning/Filtertechnik/S120 Digital Imaging Particle Counter/S120 Digital Imaging Particle Counter.png"
                                                name="Filtertechnik Particle Counters"
                                            />
                                        </div>
                                    </CarouselItem>
                                    <CarouselItem className="pl-2 sm:pl-4 basis-full sm:basis-1/3">
                                        <div className="h-full">
                                            <ProductCard 
                                                image="/products/oil conditioning/Tandelta/MOT – Mobile Oil Test Kit/MOT – Mobile Oil Test Kit-1.png"
                                                name="Mobile Oil Test Kits"
                                            />
                                        </div>
                                    </CarouselItem>
                                </CarouselContent>
                                <div className="hidden sm:block">
                                    <CarouselPrevious className="absolute -left-4 lg:-left-6 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white border-2 shadow-lg" />
                                    <CarouselNext className="absolute -right-4 lg:-right-6 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white border-2 shadow-lg" />
                                </div>
                            </Carousel>
                        </div>
                    </div>
                </div>
                
                {/* Systems Section */}
                <div className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 max-w-7xl mx-auto">
                    <div className="flex flex-col lg:flex-row py-12 sm:py-16 md:py-20 border-t border-border items-start lg:items-center gap-8 lg:gap-16">
                        {/* Title Section */}
                        <div className="flex flex-col gap-4 md:gap-6 lg:w-80 xl:w-96 flex-shrink-0">
                            <div className="space-y-2">
                                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
                                    Systems
                                </h2>
                                <div className="w-16 h-1 bg-primary rounded-full"></div>
                            </div>
                            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                                Complete camera and monitoring systems for enhanced visibility and safety in industrial environments.
                            </p>
                            <Link href="/products/systems" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-medium group">
                                <span className="text-base md:text-lg">Explore Systems</span>
                                <ArrowRight className="w-5 h-5 md:w-6 md:h-6 transition-transform group-hover:translate-x-1" />
                            </Link>
                        </div>
                        
                        {/* Products Carousel */}
                        <div className="w-full lg:flex-1 relative">
                            <Carousel 
                                opts={{
                                    align: "start",
                                    loop: true,
                                    slidesToScroll: 1,
                                    skipSnaps: false,
                                    dragFree: true,
                                }} 
                                className="w-full"
                            >
                                <CarouselContent className="-ml-2 sm:-ml-4">
                                    <CarouselItem className="pl-2 sm:pl-4 basis-full sm:basis-1/3">
                                        <div className="h-full">
                                            <ProductCard 
                                                image="/products/systems/Motec/Rear view cameras/MC7180N/MC7180N.png"
                                                name="Rear View Camera Systems"
                                            />
                                        </div>
                                    </CarouselItem>
                                    <CarouselItem className="pl-2 sm:pl-4 basis-full sm:basis-1/3">
                                        <div className="h-full">
                                            <ProductCard 
                                                image="/products/systems/Motec/Front camera system/MC3050B-4-VKMS/MC3050B-4-VKMS.png"
                                                name="Front Camera Systems"
                                            />
                                        </div>
                                    </CarouselItem>
                                    <CarouselItem className="pl-2 sm:pl-4 basis-full sm:basis-1/3">
                                        <div className="h-full">
                                            <ProductCard 
                                                image="/products/systems/Motec/Video control units/MVCU1600/MVCU1600.png"
                                                name="Video Control Units"
                                            />
                                        </div>
                                    </CarouselItem>
                                    <CarouselItem className="pl-2 sm:pl-4 basis-full sm:basis-1/3">
                                        <div className="h-full">
                                            <ProductCard 
                                                image="/products/systems/Motec/Digital Monitors/MDDE1122/MDDE1122.png"
                                                name="Digital Monitors"
                                            />
                                        </div>
                                    </CarouselItem>
                                </CarouselContent>
                                <div className="hidden sm:block">
                                    <CarouselPrevious className="absolute -left-4 lg:-left-6 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white border-2 shadow-lg" />
                                    <CarouselNext className="absolute -right-4 lg:-right-6 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white border-2 shadow-lg" />
                                </div>
                            </Carousel>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* Call to Action Section */}
            <div className="bg-gradient-to-r from-primary/5 to-primary/10 py-16 sm:py-20 md:py-24">
                <div className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 max-w-4xl mx-auto text-center">
                    <div className="space-y-6">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground">
                            Need Custom Solutions?
                        </h2>
                        <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                            Our team of experts can help you find the perfect products for your specific industrial requirements.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
                            <Link 
                                href="/contact" 
                                className="inline-flex items-center justify-center px-8 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors shadow-sm"
                            >
                                Contact Our Experts
                            </Link>
                            <Link 
                                href="/applications" 
                                className="inline-flex items-center justify-center px-8 py-3 border border-border bg-background text-foreground rounded-lg font-medium hover:bg-muted transition-colors"
                            >
                                View Applications
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}