import { useState } from "react";
import Image from "next/image";
import LoadingAnimation from "@/components/LoadingAnimation";

interface IImageProps {
    src: string;
    alt: string;
}

export default function NextImage({ src, alt }: IImageProps) {
    const [isLoading, setIsLoading] = useState(true);
    const [hasError, setHasError] = useState(false);

    const handleLoadingComplete = () => {
        setIsLoading(false);
    };

    const handleLoadingError = () => {
        setIsLoading(false);
        setHasError(true);
    };

    return (
        <>
            {isLoading && <LoadingAnimation />}
            <Image
                src={src}
                alt={alt}
                fill
                sizes={"100%"}
                onLoad={handleLoadingComplete}
                onError={handleLoadingError}
            />
            {hasError && <div>Failed to load image</div>}
        </>
    );
}
