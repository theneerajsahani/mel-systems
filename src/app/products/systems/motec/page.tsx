import { motecCategoryData } from '@/lib/systems-products';
import DynamicProductPage from '@/components/DynamicProductPage';

export default function MotecCategoryPage() {
  return <DynamicProductPage productData={motecCategoryData} />;
}
