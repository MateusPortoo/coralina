import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { products, getProduct } from "@/lib/products";
import { SiteHeader } from "@/components/SiteHeader";
import { ProductDetail } from "@/components/ProductDetail";

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return { title: "Produto não encontrado — CORALINA" };

  return {
    title: `${product.name} — CORALINA`,
    description: product.description,
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  return (
    <>
      <SiteHeader />
      <ProductDetail product={product} />
    </>
  );
}
