import DynamicProductPage from '@/components/DynamicProductPage';
import { systemsProductMapping } from '@/lib/systems-products';

export default function MC9250Page() {
  const product = systemsProductMapping['/products/systems/motec/fork-cameras/mc9250'];
  return <DynamicProductPage productData={product} />;
} 