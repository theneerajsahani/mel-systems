import Image from "next/image"

interface ProductCardProps {
    image: string;
    name: string;
}

export default function ProductCard({ image, name }: ProductCardProps) {
  return (
    <div className="flex flex-col items-center gap-4 pb-4">
      <div className="border rounded w-full aspect-square overflow-hidden relative">
        <Image
          src={image}
          alt={name}
          fill
          className="object-contain rounded-lg"
        />
      </div>
      <div>
        <p className="text-[12px] text-center lg:text-[16px]">{name}</p>
      </div>
    </div>
  )
}