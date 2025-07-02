import DynamicProductPage from "@/components/DynamicProductPage"
import { gatewayHubData } from "@/lib/oil-conditioning-products"

export default function Page() {
    return <DynamicProductPage productData={gatewayHubData} />
}
