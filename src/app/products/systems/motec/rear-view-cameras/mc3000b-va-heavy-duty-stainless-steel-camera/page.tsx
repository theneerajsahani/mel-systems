import DynamicProductPage from '@/components/DynamicProductPage';
import { systemsProductMapping } from '@/lib/systems-products';

export default function MC3000BVaPage() {
  const product = systemsProductMapping['/products/systems/motec/rear-view-cameras/mc3000b-va-heavy-duty-stainless-steel-camera'];
  return <DynamicProductPage productData={product} />;
}
