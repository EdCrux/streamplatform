export interface Video {
  id: string;
  title: string;
  description: string;
  duration: string;
  thumbnail: string;
  category: "trending" | "popular" | "new";
}