"use client";

import { useState, useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { motion } from "framer-motion";
import { Upload, Loader2 } from "lucide-react";

interface ImageSearchProps {
  onSearchComplete: (query: string) => void;
}

export function ImageSearch({ onSearchComplete }: ImageSearchProps) {
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  const analyzeImage = async (imageFile: File) => {
    setIsAnalyzing(true);
    try {
      throw new Error("PEPE")
    } catch (error) {
      console.error("Error analyzing image:", error);
    } finally {
      setIsAnalyzing(false);
    }
  };

  const onDrop = useCallback((acceptedFiles: File[]) => {
    const file = acceptedFiles[0];
    if (file) {
      setPreviewUrl(URL.createObjectURL(file));
      analyzeImage(file);
    }
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "image/*": [".png", ".jpg", ".jpeg", ".gif"],
    },
    maxFiles: 1,
  });

  return (
    <div className="space-y-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="border-2 border-dashed rounded-lg p-8"
        {...getRootProps()}
      >
        <input {...getInputProps()} />
        <div className="flex flex-col items-center justify-center space-y-4">
          <Upload className="h-12 w-12 text-muted-foreground" />
          <div className="text-center">
            <p className="text-sm font-medium">
              {isDragActive
                ? "Drop the image here"
                : "Drag and drop an image here, or click to select"}
            </p>
            <p className="text-xs text-muted-foreground mt-1">
              Supports PNG, JPG, JPEG, GIF
            </p>
          </div>
        </div>
      </motion.div>

      {previewUrl && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="relative aspect-video rounded-lg overflow-hidden"
        >
          <img
            src={previewUrl}
            alt="Preview"
            className="w-full h-full object-cover"
          />
          {isAnalyzing && (
            <div className="absolute inset-0 bg-background/80 flex items-center justify-center">
              <div className="flex items-center space-x-2">
                <Loader2 className="h-6 w-6 animate-spin" />
                <span>Analyzing image...</span>
              </div>
            </div>
          )}
        </motion.div>
      )}
    </div>
  );
}