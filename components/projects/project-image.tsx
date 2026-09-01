import React from "react";
import { cn } from "@/lib/utils";

interface ProjectImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  className?: string;
}

export default function ProjectImage({
  src,
  alt,
  className,
  ...props
}: ProjectImageProps) {
  return (
    <div
      className={cn(
        "my-8 mx-auto w-full max-w-[500px] aspect-video overflow-hidden rounded-md border bg-muted transition-colors shadow-sm",
        className
      )}
    >
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover block"
        {...props}
      />
    </div>
  );
}
