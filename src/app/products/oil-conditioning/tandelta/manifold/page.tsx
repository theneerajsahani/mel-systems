import DynamicProductPage from "@/components/DynamicProductPage"
import { manifoldData } from "@/lib/oil-conditioning-products"

export default function ManifoldPage() {
    return <DynamicProductPage productData={manifoldData} />
}
