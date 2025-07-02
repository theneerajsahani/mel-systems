import { notFound } from "next/navigation";
import DynamicProductPage from "@/components/DynamicProductPage";
import {
  systemsProductMapping,
  motecCategoryData,
  rearViewCamerasCategoryData,
  frontCameraSystemCategoryData,
  digitalCamerasCategoryData,
  monitorsCategoryData,
  digitalMonitorsCategoryData,
  forkCamerasCategoryData,
  videoControlUnitsCategoryData,
  craneCamerasCategoryData,
  transmissionsCategoryData,
} from "@/lib/systems-products";
import Link from "next/link";
import Image from "next/image";
import * as systemsProducts from "@/lib/systems-products";

const allCategories = [
  motecCategoryData,
  rearViewCamerasCategoryData,
  frontCameraSystemCategoryData,
  digitalCamerasCategoryData,
  monitorsCategoryData,
  digitalMonitorsCategoryData,
  forkCamerasCategoryData,
  videoControlUnitsCategoryData,
  craneCamerasCategoryData,
  transmissionsCategoryData,
];

function findCategoryBySlug(slugs: string[]): any {
  // Try to match the slug path to a category's slugPath
  return allCategories.find(
    (cat) =>
      cat.slugPath.join("/").toLowerCase() === slugs.join("/").toLowerCase(),
  );
}

function findProductBySlug(slugs: string[]): any {
  // Try to match the slug path to a product in the mapping
  const path = "/products/systems/" + slugs.join("/").toLowerCase();
  return systemsProductMapping[path];
}

export function generateStaticParams() {
  // Collect all category slug paths
  const categories = [
    motecCategoryData,
    rearViewCamerasCategoryData,
    frontCameraSystemCategoryData,
    digitalCamerasCategoryData,
    monitorsCategoryData,
    digitalMonitorsCategoryData,
    forkCamerasCategoryData,
    videoControlUnitsCategoryData,
    craneCamerasCategoryData,
    transmissionsCategoryData,
  ];
  const categoryParams = categories.map((cat) => ({
    slug: cat.slugPath.slice(1),
  }));

  // Collect all product slug paths
  const productParams = Object.values(systemsProducts)
    .filter((v: any) => v && v.slugPath && Array.isArray(v.slugPath))
    .map((v: any) => ({ slug: v.slugPath.slice(1) }));

  // Merge and deduplicate
  const allParams = [...categoryParams, ...productParams];
  const seen = new Set();
  const uniqueParams = allParams.filter(({ slug }) => {
    const key = slug.join("/");
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
  return uniqueParams;
}

export default function SystemsCatchAllPage({
  params,
}: {
  params: { slug: string[] };
}) {
  const slugs = params.slug || [];
  const product = findProductBySlug(slugs);
  if (!product) {
    if (typeof window === 'undefined') {
      // Only log on server/build
      // eslint-disable-next-line no-console
      console.warn(`No product mapping found for slug: ${slugs.join("/")}`);
    }
    if (process.env.NODE_ENV === 'development') {
      return (
        <div style={{ color: 'red', padding: 24 }}>
          <h2>Product mapping not found for slug: <code>{slugs.join("/")}</code></h2>
          <p>Check systemsProductMapping and the product's slugPath.</p>
        </div>
      );
    }
  }
  if (product && Array.isArray(product.slugPath)) {
    return <DynamicProductPage productData={product} />;
  }
  const category = findCategoryBySlug(slugs);
  if (category) {
    // Render a simple category page with product cards
    const products = (category.categoryProductIds || [])
      .map((id: string) => {
        const product = Object.values(systemsProductMapping).find((p: any) => p.id === id);
        if (!product || !Array.isArray(product.slugPath)) {
          if (typeof window === 'undefined') {
            // Only log on server/build
            // eslint-disable-next-line no-console
            console.warn(`Missing or invalid product for id: ${id}`);
          }
          return undefined;
        }
        return product;
      })
      .filter(Boolean);
    return (
      <div className="max-w-6xl mx-auto py-12 px-4">
        <h1 className="text-4xl font-bold mb-8">{category.name}</h1>
        {category.description && (
          <p className="text-lg text-gray-600 mb-8">
            {category.description[0]}
          </p>
        )}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.map((product: any) => (
            product && Array.isArray(product.slugPath) && (
              <Link
                key={product.id}
                href={`/products/systems/${product.slugPath.slice(1).join("/")}`}
                className="block group border rounded-xl overflow-hidden shadow hover:shadow-lg transition"
              >
                <div className="relative h-48 bg-gray-50">
                  {product.images && product.images[0] && (
                    <Image
                      src={product.images[0].src}
                      alt={product.images[0].alt}
                      fill
                      className="object-contain p-4"
                    />
                  )}
                </div>
                <div className="p-4">
                  <h2 className="text-lg font-semibold group-hover:text-primary mb-2">
                    {product.name}
                  </h2>
                  {product.description && (
                    <p className="text-sm text-gray-500 line-clamp-3">
                      {product.description[0]}
                    </p>
                  )}
                </div>
              </Link>
            )
          ))}
        </div>
      </div>
    );
  }
  return notFound();
}
