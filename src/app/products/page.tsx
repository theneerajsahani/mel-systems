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
        <>
            <div className="py-[100px] px-[64px] align-start ">
                <h1 className="text-[48px] font-bold">PRODUCTS</h1>
            </div>
            <div className="px-[64px]">
                <div className="flex flex-row gap-[40px] py-10 border-y border-black">
                    {/* Title */}
                    <div className="flex flex-col gap-[16px] items-start" >
                        <p className="text-[32px] font-bold">Oil Conditioning</p>
                        <p>Description</p>
                        <Link href="/products" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                            <span>Explore all products</span>
                            <ArrowRight className="w-5 h-5" />
                        </Link>
                    </div>
                    {/* Products Carousel */}
                    <Carousel className="">
                        <CarouselContent>
                            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                                <ProductCard
                                    image="/products/oil conditioning/Tandelta/OQSx-G2 Oil Quality Sensor/OQSx-G2 Oil Quality Sensor-1.jpg"
                                    name="Tandelta"
                                />
                            </CarouselItem>
                            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                                <ProductCard
                                    image="/images/hydro.png"
                                    name="Hydrotechnik"
                                />
                            </CarouselItem>
                            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                                <ProductCard
                                    image="/images/product3.png"
                                    name="Third Product"
                                />
                            </CarouselItem>
                        </CarouselContent>
                        <CarouselPrevious />
                        <CarouselNext />
                    </Carousel>
                </div>
            </div>
        </>
    )
}