import DynamicProductPage from '@/components/DynamicProductPage';
import { systemsProductMapping } from '@/lib/systems-products';

export default function MCDL7000APage() {
  const product = systemsProductMapping['/products/systems/motec/digital-cameras/mcdl7000a'];
  return <DynamicProductPage productData={product} />;
} 