import Image from "next/image";

interface ProductCardProps {
  image: string;
  name: string;
}

export default function ProductCard({ image, name }: ProductCardProps) {
  return (
    <div className="group cursor-pointer h-full touch-manipulation">
      <div className="bg-card rounded-lg border border-border shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden h-full flex flex-col min-h-[280px] sm:min-h-[320px] lg:min-h-[300px]">
        {/* Image Container */}
        <div className="relative aspect-square overflow-hidden bg-white flex-1">
          <Image
            src={image}
            alt={name}
            fill
            sizes="(max-width: 640px) 80vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
            className="object-contain p-3 sm:p-4 transition-transform duration-300 group-hover:scale-105"
            priority={false}
          />
          {/* Hover Overlay */}
          <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>

        {/* Content */}
        <div className="p-3 sm:p-4 flex-shrink-0">
          <h3 className="text-sm sm:text-base md:text-lg font-medium text-center text-foreground group-hover:text-primary transition-colors duration-200 leading-tight line-clamp-2">
            {name}
          </h3>
        </div>
      </div>
    </div>
  );
}
