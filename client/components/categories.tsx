"use client";

import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const categories = [
  "All",
  "Action",
  "Comedy",
  "Drama",
  "Horror",
  "Romance",
  "Sci-Fi",
  "Documentary",
  "Animation",
  "Thriller",
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export function Categories() {
  return (
    <ScrollArea>
      <motion.div 
        variants={container}
        initial="hidden"
        animate="show"
        className="flex space-x-2 pb-4"
      >
        {categories.map((category) => (
          <motion.div key={category} variants={item}>
            <Button
              variant="secondary"
              className="flex-shrink-0 rounded-full hover:scale-105 transition-transform"
            >
              {category}
            </Button>
          </motion.div>
        ))}
      </motion.div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  );
}