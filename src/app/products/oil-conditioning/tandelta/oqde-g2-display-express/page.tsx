import DynamicProductPage from "@/components/DynamicProductPage"
import { oqdeG2DisplayExpressData } from "@/lib/oil-conditioning-products"

export default function Page() {
    return <DynamicProductPage productData={oqdeG2DisplayExpressData} />
}
