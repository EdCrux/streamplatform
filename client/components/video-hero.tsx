"use client";

import { Play, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export function VideoHero() {
  return (
    <div className="relative h-[80vh] w-full overflow-hidden">
      <motion.div 
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 10 }}
        className="absolute inset-0"
      >
        <img
          src="https://images.unsplash.com/photo-1536440136628-849c177e76a1"
          alt="Hero Background"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
      </motion.div>
      <div className="relative h-full flex items-center">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="max-w-2xl"
          >
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              The Greatest Showman
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Step right up and witness the spectacular story of P.T. Barnum's rise from nothing to create a mesmerizing spectacle that became a worldwide sensation.
            </p>
            <div className="mt-10 flex items-center gap-x-6">
              <Button size="lg" className="gap-2 hover:scale-105 transition-transform">
                <Play className="h-5 w-5" />
                Play Now
              </Button>
              <Button variant="outline" size="lg" className="gap-2 hover:scale-105 transition-transform">
                <Info className="h-5 w-5" />
                More Info
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}