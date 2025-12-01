"use client";

import { useState, useEffect } from "react";
import type { BestSellerProduct } from "@/types";
import { bestSellers, bestSellerFilters } from "@/data/home/bestsellers";

interface UseBestSellersReturn {
  products: BestSellerProduct[];
  filters: string[];
  loading: boolean;
  error: Error | null;
}

export const useBestSellers = (): UseBestSellersReturn => {
  const [products, setProducts] = useState<BestSellerProduct[]>([]);
  const [filters, setFilters] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchBestSellers = async () => {
      try {
        setLoading(true);
        setError(null);

                // Currently fetches from static data, later we can replace this with an API call


        setProducts(bestSellers);
        setFilters(bestSellerFilters);
      } catch (err) {
        const error =
          err instanceof Error ? err : new Error("Failed to fetch best sellers");
        setError(error);
        console.error("Error fetching best sellers:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBestSellers();
  }, []);

  return { products, filters, loading, error };
};