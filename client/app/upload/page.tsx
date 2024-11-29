"use client";

import { VideoUploadForm } from "@/components/video-upload-form";
import { motion } from "framer-motion";

export default function UploadPage() {
  return (
    <div className="min-h-screen bg-background py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8"
      >
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold">Upload Your Video</h1>
          <p className="text-muted-foreground mt-2">
            Share your creativity with the world
          </p>
        </div>
        <VideoUploadForm />
      </motion.div>
    </div>
  );
}