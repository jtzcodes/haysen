import { products } from "@/config/products"
import { notFound } from "next/navigation"
import { Metadata } from "next"
import { ProductClientView } from "@/components/products/product-client-view"

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const product = products.find((p) => p.slug === slug)
  
  if (!product) {
    return {
      title: 'Producto no encontrado | Haysen Group Chile',
    }
  }

  return {
    title: `${product.name} | Venta por Mayor - Haysen Group Chile`,
    description: product.description,
    openGraph: {
      title: `${product.name} | Haysen Group Chile`,
      description: product.description,
      images: product.image ? [{ url: product.image }] : [],
    },
  }
}

export default async function ProductDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const product = products.find((p) => p.slug === slug)

  if (!product) {
    notFound()
  }

  return <ProductClientView key={product.id} product={product} />
}
