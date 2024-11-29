"use client";

import { VideoHero } from "@/components/video-hero";
import { VideoGrid } from "@/components/video-grid";
import { Categories } from "@/components/categories";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <VideoHero />
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8"
      >
        <Categories />
        <section className="mt-8">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl font-semibold mb-6"
          >
            Trending Now
          </motion.h2>
          <VideoGrid category="trending" />
        </section>
        <section className="mt-12">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl font-semibold mb-6"
          >
            Popular in Your Area
          </motion.h2>
          <VideoGrid category="popular" />
        </section>
        <section className="mt-12">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl font-semibold mb-6"
          >
            New Releases
          </motion.h2>
          <VideoGrid category="new" />
        </section>
      </motion.div>
    </main>
  );
}