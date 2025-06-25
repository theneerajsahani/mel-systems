import DynamicProductPage from "@/components/DynamicProductPage"
import { manifoldData } from "@/lib/products"

export default function ManifoldPage() {
    return <DynamicProductPage productData={manifoldData} />
}
