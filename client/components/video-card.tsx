"use client";

import { Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimatedCard } from "@/components/ui/animated-card";
import { Video } from "@/lib/types";
import { motion } from "framer-motion";
import Link from "next/link";

interface VideoCardProps {
  video: Video;
}

export function VideoCard({ video }: VideoCardProps) {
  return (
    <Link href={`/watch/${video.id}`}>
      <AnimatedCard className="w-[300px] flex-shrink-0">
        <div className="relative aspect-video">
          <img
            src={video.thumbnail}
            alt={video.title}
            className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
          />
          <motion.div 
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            className="absolute inset-0 bg-black/60 flex items-center justify-center"
          >
            <Button 
              size="icon" 
              variant="ghost" 
              className="rounded-full hover:scale-110 transition-transform"
            >
              <Play className="h-8 w-8" />
            </Button>
          </motion.div>
        </div>
        <div className="p-4">
          <h3 className="font-semibold truncate">{video.title}</h3>
          <p className="text-sm text-muted-foreground mt-1">{video.duration}</p>
          <p className="text-sm text-muted-foreground mt-2 line-clamp-2">{video.description}</p>
        </div>
      </AnimatedCard>
    </Link>
  );
}