"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Search as SearchIcon, Upload, Image as ImageIcon, Loader2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ImageSearch } from "@/components/image-search";
import { VideoGrid } from "@/components/video-grid";
import { useSearchResults } from "@/hooks/use-search";

export default function SearchPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState("text");
  const { results, isLoading, search } = useSearchResults();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    search(searchQuery);
  };

  return (
    <div className="min-h-screen bg-background pt-20">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
      >
        <h1 className="text-4xl font-bold mb-8">Search Videos</h1>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full max-w-md grid-cols-2">
            <TabsTrigger value="text">Text Search</TabsTrigger>
            <TabsTrigger value="image">Image Search</TabsTrigger>
          </TabsList>

          <TabsContent value="text" className="mt-6">
            <form onSubmit={handleSearch} className="flex gap-4 mb-8">
              <div className="relative flex-1">
                <SearchIcon className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  placeholder="Search videos..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Button type="submit" disabled={isLoading}>
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Searching...
                  </>
                ) : (
                  "Search"
                )}
              </Button>
            </form>
          </TabsContent>

          <TabsContent value="image" className="mt-6">
            <ImageSearch onSearchComplete={search} />
          </TabsContent>
        </Tabs>

        {results && results.length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-8"
          >
            <h2 className="text-2xl font-semibold mb-6">Search Results</h2>
            <VideoGrid videos={results} />
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}