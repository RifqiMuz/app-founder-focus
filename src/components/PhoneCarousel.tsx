import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

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

  return (
    <div className="relative py-8">
      <div ref={emblaRef} className="overflow-hidden">
        <div className="flex items-center">
          {images.map((img, idx) => {
            const isActive = idx === selectedIndex;
            return (
              <div
                key={idx}
                className="flex-[0_0_60%] min-w-0 px-2 transition-all duration-300 ease-out"
                style={{
                  transform: isActive ? "scale(1)" : "scale(0.85)",
                  opacity: isActive ? 1 : 0.5,
                  zIndex: isActive ? 10 : 1,
                }}
              >
                {isActive ? (
                  /* Phone frame for center slide */
                  <div className="relative mx-auto max-w-[240px] md:max-w-[280px]">
                    {/* Phone bezel */}
                    <div className="rounded-[2rem] border-[6px] border-foreground/90 bg-foreground/90 p-1 shadow-2xl">
                      {/* Notch */}
                      <div className="relative">
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-5 bg-foreground/90 rounded-b-xl z-10" />
                        <img
                          src={img}
                          alt={`${projectName} screenshot ${idx + 1}`}
                          className="w-full aspect-[9/16] object-cover rounded-[1.5rem]"
                          loading="lazy"
                        />
                      </div>
                    </div>
                  </div>
                ) : (
                  /* Plain image for side slides */
                  <div className="mx-auto max-w-[220px] md:max-w-[260px]">
                    <img
                      src={img}
                      alt={`${projectName} screenshot ${idx + 1}`}
                      className="w-full aspect-[9/16] object-cover rounded-xl"
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
