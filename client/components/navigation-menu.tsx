"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Upload, Home, Search } from "lucide-react";

export function NavigationMenu() {
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold">
              VideoStream
            </Link>
          </div>

          <div className="flex items-center space-x-6">
            <Link
              href="/"
              className={cn(
                "flex items-center space-x-2 text-sm font-medium transition-colors hover:text-primary",
                pathname === "/" ? "text-primary" : "text-muted-foreground"
              )}
            >
              <Home className="h-4 w-4" />
              <span>Home</span>
            </Link>

            <Link
              href="/search"
              className={cn(
                "flex items-center space-x-2 text-sm font-medium transition-colors hover:text-primary",
                pathname === "/search" ? "text-primary" : "text-muted-foreground"
              )}
            >
              <Search className="h-4 w-4" />
              <span>Search</span>
            </Link>

            <Link
              href="/upload"
              className={cn(
                "flex items-center space-x-2 text-sm font-medium transition-colors hover:text-primary",
                pathname === "/upload" ? "text-primary" : "text-muted-foreground"
              )}
            >
              <Upload className="h-4 w-4" />
              <span>Upload</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}