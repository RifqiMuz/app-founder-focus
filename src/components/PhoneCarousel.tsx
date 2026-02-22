import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useImagePreload } from "@/hooks/use-image-preload";

interface PhoneCarouselProps {
  images: string[];
  projectName: string;
}

const PhoneCarousel = ({ images, projectName }: PhoneCarouselProps) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "center", containScroll: false },
    [Autoplay({ delay: 3000, stopOnInteraction: true })]
  );
  const [selectedIndex, setSelectedIndex] = useState(0);
  const imagesLoaded = useImagePreload(images);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    return () => { emblaApi.off("select", onSelect); };
  }, [emblaApi, onSelect]);

  if (!imagesLoaded) {
    return (
      <div className="relative py-8 overflow-hidden -mx-6 px-6">
        <div className="flex items-center justify-center">
          <div className="max-w-[200px] md:max-w-[180px]">
            <div className="rounded-[2rem] border-[6px] border-foreground/90 bg-foreground/90 p-1">
              <div className="w-full aspect-[7/16] bg-muted/50 rounded-[1.5rem] animate-pulse flex items-center justify-center">
                <div className="text-muted-foreground text-sm">Loading...</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative py-8 overflow-hidden -mx-6 px-6">
      <div ref={emblaRef} className="overflow-hidden" style={{ touchAction: 'pan-y pinch-zoom' }}>
        <div className="flex items-center -ml-2">
          {images.map((img, idx) => {
            const isActive = idx === selectedIndex;
            return (
              <div
                key={idx}
                className="
                  flex-[0_0_auto]
                  shrink-0
                  min-w-0
                  transition-all duration-300 ease-out
                  px-2
                "
                style={{
                  transform: isActive ? "scale(1)" : "scale(0.85)",
                  opacity: isActive ? 1 : 0.5,
                  zIndex: isActive ? 10 : 1,
                }}
              >
                {isActive ? (
                  /* Phone frame for center slide */
                  <div className="relative max-w-[200px] md:max-w-[180px]">
                    {/* Phone bezel */}
                    <div className="rounded-[2rem] border-[6px] border-foreground/90 bg-foreground/90 p-1">
                      {/* Notch */}
                      <div className="relative">
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-5 bg-foreground/90 rounded-b-xl z-10" />
                        <img
                          src={img}
                          alt={`${projectName} screenshot ${idx + 1}`}
                          className="w-full aspect-[7/16] object-fill rounded-[1.5rem]"
                          loading="lazy"
                        />
                      </div>
                    </div>
                  </div>
                ) : (
                  /* Plain image for side slides */
                  <div className="max-w-[150px] md:max-w-[120px]">
                    <img
                      src={img}
                      alt={`${projectName} screenshot ${idx + 1}`}
                      className="w-full aspect-[7/16] object-cover rounded-xl"
                      loading="lazy"
                    />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
      {/* Dots */}
      <div className="flex justify-center gap-1.5 mt-4">
        {images.map((_, idx) => (
          <button
            key={idx}
            className={`w-1.5 h-1.5 rounded-full transition-all ${
              idx === selectedIndex ? "bg-foreground w-4" : "bg-muted-foreground/30"
            }`}
            onClick={() => emblaApi?.scrollTo(idx)}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default PhoneCarousel;
