"use client";

import { VideoCard } from "@/components/video-card";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Video } from "@/lib/types";
import { videos } from "@/lib/data";
import { motion } from "framer-motion";

interface VideoGridProps {
  category?: "trending" | "popular" | "new";
  videos?: Video[];
}

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
  hidden: { opacity: 0, x: 20 },
  show: { opacity: 1, x: 0 }
};

export function VideoGrid({ category, videos: propVideos }: VideoGridProps) {
  // If videos are provided directly, use them; otherwise filter by category
  const displayVideos = propVideos || 
    (category ? videos.filter(video => video.category === category) : videos);

  return (
    <ScrollArea>
      <motion.div 
        variants={container}
        initial="hidden"
        animate="show"
        className="flex space-x-4 pb-4"
      >
        {displayVideos.map((video) => (
          <motion.div key={video.id} variants={item}>
            <VideoCard video={video} />
          </motion.div>
        ))}
      </motion.div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  );
}