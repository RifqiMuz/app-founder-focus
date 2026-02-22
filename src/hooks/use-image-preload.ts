import { useEffect, useState } from "react";

export const useImagePreload = (imageSources: string[]) => {
  const [imagesPreloaded, setImagesPreloaded] = useState(false);

  useEffect(() => {
    let isMounted = true;

    const preloadImages = async () => {
      const imagePromises = imageSources.map((src) => {
        return new Promise<void>((resolve) => {
          const img = new Image();
          img.src = src;
          img.onload = () => resolve();
          img.onerror = () => resolve(); // Resolve anyway to not block
        });
      });

      await Promise.all(imagePromises);
      
      if (isMounted) {
        setImagesPreloaded(true);
      }
    };

    if (imageSources.length > 0) {
      preloadImages();
    } else {
      setImagesPreloaded(true);
    }

    return () => {
      isMounted = false;
    };
  }, [imageSources]);

  return imagesPreloaded;
};
