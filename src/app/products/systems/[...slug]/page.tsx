import { notFound } from "next/navigation"
import DynamicProductPage from "@/components/DynamicProductPage"
import { systemsProductMapping } from "@/lib/systems-products"

interface SystemsProductPageProps {
  params: {
    slug: string[]
  }
}

export default function SystemsProductPage({ params }: SystemsProductPageProps) {
  // Construct the full path from the slug array
  const fullPath = `/products/systems/${params.slug.join('/')}`
  
  // Get the product data from the mapping
  const productData = systemsProductMapping[fullPath]
  
  if (!productData) {
    notFound()
  }
  
  return <DynamicProductPage productData={productData} />
} 