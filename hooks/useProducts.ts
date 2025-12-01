"use client";

import { useState, useEffect } from "react";
import type { Product } from "@/types";
import { productCategories } from "@/data/home/products";

interface UseProductsReturn {
  products: Product[];
  loading: boolean;
  error: Error | null;
}

export const useProducts = (): UseProductsReturn => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        setError(null);

        // Currently fetches from static data, later we can replace this with an API call
       
        setProducts(productCategories);
      } catch (err) {
        const error =
          err instanceof Error ? err : new Error("Failed to fetch products");
        setError(error);
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return { products, loading, error };
};