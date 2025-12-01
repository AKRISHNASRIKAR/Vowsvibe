"use client";

import { useState, useEffect } from "react";
import type { Testimonial } from "@/types";
import testimonials from "@/data/home/testimonials";

interface UseTestimonialsReturn {
  testimonials: Testimonial[];
  loading: boolean;
  error: Error | null;
}

export const useTestimonials = (): UseTestimonialsReturn => {
  const [testimonialList, setTestimonialList] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        setLoading(true);
        setError(null);

   // Currently fetches from static data, later we can replace this with an API call
         
        setTestimonialList(testimonials);
      } catch (err) {
        const error =
          err instanceof Error ? err : new Error("Failed to fetch testimonials");
        setError(error);
        console.error("Error fetching testimonials:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTestimonials();
  }, []);

  return { testimonials: testimonialList, loading, error };
};
