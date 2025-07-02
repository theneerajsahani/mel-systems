import DynamicProductPage from '@/components/DynamicProductPage';
import { systemsProductMapping } from '@/lib/systems-products';

export default function MVRD1100Page() {
  const product = systemsProductMapping['/products/systems/motec/transmissions/mvrd1100'];
  return <DynamicProductPage productData={product} />;
} 