import { Card } from "@/components/ui/card"
import Image from "next/image"

interface ProductCardProps {
    image: string;
    name: string;
}

export default function ProductCard({ image, name }: ProductCardProps) {
  return (
    <Card className="flex flex-col items-center w-full p-4 h-[369px] gap-4 overflow-hidden">
      <div className="relative h-[305px] flex items-center justify-center flex-shrink-0 overflow-hidden">
        <Image
          src={image}
          alt={name}
          width={0}
          height={0}
          sizes="100vw"
          className="object-contain w-full h-full"
        />
      </div>
      <div className="text-[16px] font-medium text-center w-full">
        {name}
      </div>
    </Card>
  )
}