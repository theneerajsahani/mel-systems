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
import { tandeltaCategoryData, hydrotechnikCategoryData, filtertechnikCategoryData, evamoSmartBubbleSystemData } from "@/lib/oil-conditioning-products"
import { rearViewCamerasCategoryData, frontCameraSystemCategoryData, digitalCamerasCategoryData, monitorsCategoryData, digitalMonitorsCategoryData, forkCamerasCategoryData, videoControlUnitsCategoryData, craneCamerasCategoryData, transmissionsCategoryData } from "@/lib/systems-products"

export default function products() {
    return (
        <div className="min-h-screen w-full bg-background">
            {/* Hero Section */}
            <div className="relative bg-gradient-to-r from-blue-600 to-blue-800">
                <div className="py-16 sm:py-20 md:py-24 lg:py-28 xl:py-32 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 max-w-7xl mx-auto">
                    <div className="text-center space-y-4">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white tracking-tight">
                            Our Products
                        </h1>
                        <p className="text-lg sm:text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
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
                                    loop: false,
                                    slidesToScroll: 1,
                                    skipSnaps: false,
                                    dragFree: true,
                                }} 
                                className="w-full"
                            >
                                <CarouselContent className="-ml-2 sm:-ml-4">
                                    <CarouselItem className="pl-4 sm:pl-10">
                                        <div className="h-[320px] w-[280px]">
                                            <ProductCard 
                                                image={tandeltaCategoryData.images?.[0]?.src || "/fallback.jpg"}
                                                name={tandeltaCategoryData.name}
                                            />
                                        </div>
                                    </CarouselItem>
                                    <CarouselItem className="pl-4 sm:pl-10">
                                        <div className="h-[320px] w-[280px]">
                                            <ProductCard 
                                                image={hydrotechnikCategoryData.images?.[0]?.src || "/fallback.jpg"}
                                                name={hydrotechnikCategoryData.name}
                                            />
                                        </div>
                                    </CarouselItem>
                                    <CarouselItem className="pl-4 sm:pl-10">
                                        <div className="h-[320px] w-[280px]">
                                            <ProductCard 
                                                image={filtertechnikCategoryData.images?.[0]?.src || "/fallback.jpg"}
                                                name={filtertechnikCategoryData.name}
                                            />
                                        </div>
                                    </CarouselItem>
                                    <CarouselItem className="pl-4 sm:pl-10">
                                        <div className="h-[320px] w-[280px]">
                                            <ProductCard 
                                                image={evamoSmartBubbleSystemData.images?.[0]?.src || "/fallback.jpg"}
                                                name={evamoSmartBubbleSystemData.name}
                                            />
                                        </div>
                                    </CarouselItem>
                                </CarouselContent>
                                <div className="hidden sm:block">
                                    <CarouselPrevious className="" />
                                    <CarouselNext className="" />
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
                                    loop: false,
                                    slidesToScroll: 1,
                                    skipSnaps: false,
                                    dragFree: true,
                                }} 
                                className="w-full"
                            >
                                <CarouselContent className="-ml-2 sm:-ml-4">
                                    <CarouselItem className="pl-4 sm:pl-10">
                                        <div className="h-[320px] w-[280px]">
                                            <ProductCard 
                                                image={rearViewCamerasCategoryData.images?.[0]?.src || "/fallback.jpg"}
                                                name="Rear View Camera"
                                            />
                                        </div>
                                    </CarouselItem>
                                    <CarouselItem className="pl-4 sm:pl-10">
                                        <div className="h-[320px] w-[280px]">
                                            <ProductCard 
                                                image={frontCameraSystemCategoryData.images?.[0]?.src || "/fallback.jpg"}
                                                name="Front Camera"
                                            />
                                        </div>
                                    </CarouselItem>
                                    <CarouselItem className="pl-4 sm:pl-10">
                                        <div className="h-[320px] w-[280px]">
                                            <ProductCard 
                                                image={digitalCamerasCategoryData.images?.[0]?.src || "/fallback.jpg"}
                                                name="Digital Camera"
                                            />
                                        </div>
                                    </CarouselItem>
                                    <CarouselItem className="pl-4 sm:pl-10">
                                        <div className="h-[320px] w-[280px]">
                                            <ProductCard 
                                                image={monitorsCategoryData.images?.[0]?.src || "/fallback.jpg"}
                                                name="Monitor"
                                            />
                                        </div>
                                    </CarouselItem>
                                    <CarouselItem className="pl-4 sm:pl-10">
                                        <div className="h-[320px] w-[280px]">
                                            <ProductCard 
                                                image={digitalMonitorsCategoryData.images?.[0]?.src || "/fallback.jpg"}
                                                name="Digital Monitor"
                                            />
                                        </div>
                                    </CarouselItem>
                                    <CarouselItem className="pl-4 sm:pl-10">
                                        <div className="h-[320px] w-[280px]">
                                            <ProductCard 
                                                image={forkCamerasCategoryData.images?.[0]?.src || "/fallback.jpg"}
                                                name="Fork Camera"
                                            />
                                        </div>
                                    </CarouselItem>
                                    <CarouselItem className="pl-4 sm:pl-10">
                                        <div className="h-[320px] w-[280px]">
                                            <ProductCard 
                                                image={videoControlUnitsCategoryData.images?.[0]?.src || "/fallback.jpg"}
                                                name="Video Control Unit"
                                            />
                                        </div>
                                    </CarouselItem>
                                    <CarouselItem className="pl-4 sm:pl-10">
                                        <div className="">
                                            <ProductCard 
                                                image={craneCamerasCategoryData.images?.[0]?.src || "/fallback.jpg"}
                                                name="Crane Camera"
                                            />
                                        </div>
                                    </CarouselItem>
                                    <CarouselItem className="pl-4 sm:pl-10">
                                        <div className="">
                                            <ProductCard 
                                                image={transmissionsCategoryData.images?.[0]?.src || "/fallback.jpg"}
                                                name="Transmissions"
                                            />
                                        </div>
                                    </CarouselItem>
                                </CarouselContent>
                                <div className="hidden sm:block">
                                    <CarouselPrevious className="" />
                                    <CarouselNext className="" />
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