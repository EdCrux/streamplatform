"use client";

import { useState } from "react";
import { videos } from "@/lib/data";
import { Video } from "@/lib/types";

export function useSearchResults() {
  const [results, setResults] = useState<Video[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const search = async (query: string) => {
    setIsLoading(true);
    try {
      // Simulate API call delay
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Filter videos based on the search query
      const searchResults = videos.filter((video) => {
        const searchTerm = query.toLowerCase();
        return (
          video.title.toLowerCase().includes(searchTerm) ||
          video.description.toLowerCase().includes(searchTerm)
        );
      });

      setResults(searchResults);
    } catch (error) {
      console.error("Search error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return { results, isLoading, search };
}