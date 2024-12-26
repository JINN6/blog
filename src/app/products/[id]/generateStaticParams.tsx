// src/app/products/[id]/generateStaticParams.tsx
import { products } from "../../maal/maal";

export function generateStaticParams() {
  return products.map((product) => ({
    id: product.id,
  }));
}
