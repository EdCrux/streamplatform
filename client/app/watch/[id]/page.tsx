"use client";

import { VideoPlayer } from "@/components/video-player";
import { videos } from "@/lib/data";
import { notFound } from "next/navigation";
import { motion } from "framer-motion";

export default function WatchPage({ params }: { params: { id: string } }) {
  const video = videos.find((v) => v.id === params.id);

  if (!video) {
    notFound();
  }

  // For demo purposes, we're using a sample HLS stream
  const hlsUrl = "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8";

  return (
    <div className="min-h-screen bg-background pt-16">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="aspect-video"
        >
          <VideoPlayer url={hlsUrl} poster={video.thumbnail} />
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-6"
        >
          <h1 className="text-2xl font-bold">{video.title}</h1>
          <p className="mt-2 text-muted-foreground">{video.description}</p>
          <div className="mt-4">
            <span className="text-sm text-muted-foreground">{video.duration}</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
}