"use client";

import Image, { ImageProps } from "next/image";
import { useState, useEffect } from "react";

interface SmartImageProps extends Omit<ImageProps, "src"> {
    src: string | null | undefined;
    fallbackSrc?: string;
}

export const SmartImage = ({
    src,
    alt,
    fallbackSrc = "/images/placeholder.jpg",
    className,
    fill,
    width,
    height,
    priority,
    ...props
}: SmartImageProps) => {
    const [imgSrc, setImgSrc] = useState<string>(src || fallbackSrc);

    useEffect(() => {
        setImgSrc(src || fallbackSrc);
    }, [src, fallbackSrc]);

    // If no source, return null or placeholder
    if (!imgSrc) return null;

    // Check if it's a local URL (localhost or private IP)
    const isLocal = imgSrc.includes("localhost") || imgSrc.includes("127.0.0.1");

    // Use standard img tag for local development to avoid Next.js Image Optimization IP blocking
    if (isLocal) {
        // eslint-disable-next-line @next/next/no-img-element
        return (
            <img
                src={imgSrc}
                alt={alt}
                className={className}
                style={fill ? { position: "absolute", height: "100%", width: "100%", inset: 0, objectFit: "cover" } : { width, height }}
                {...(props as any)}
            />
        );
    }

    // Use Next.js Image for production/remote images
    return (
        <Image
            src={imgSrc}
            alt={alt}
            className={className}
            fill={fill}
            width={width}
            height={height}
            priority={priority}
            onError={() => setImgSrc(fallbackSrc)}
            {...props}
        />
    );
};
