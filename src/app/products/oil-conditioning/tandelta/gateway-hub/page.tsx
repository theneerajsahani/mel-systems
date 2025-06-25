import DynamicProductPage from "@/components/DynamicProductPage"
import { gatewayHubData } from "@/lib/products"

export default function GatewayHubPage() {
    return <DynamicProductPage productData={gatewayHubData} />
}
