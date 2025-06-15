import { Card } from "@/components/ui/card"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import Image from "next/image"

interface ProductCardProps {
    image: string;
    name: string;
}

export default function ProductCard({ image, name }: ProductCardProps) {
  return (
    <Card className="items-center w-full gap-4 py-4">
      <AspectRatio ratio={1 / 1} className="w-full">
        <Image
          src={image}
          alt={name}
          fill
          className="object-contain"
        />
      </AspectRatio>
      <div className="text-[16px]">
        {name}
      </div>
    </Card>
  )
}