"use client";

import { useCallback, useEffect, useState } from "react";
import * as React from "react";
import Image from "next/image";
import { AspectRatio } from "@packages/ui";
import useEmblaCarousel from "embla-carousel-react";

import { type IImageSliderProps } from ".";

/**
 * ImageSlider component.
 * @param props - ImageSlider props.
 * @returns Header with component name.
 */
export const ImageSlider: React.FC<IImageSliderProps> = (props) => {
  const { images, onClick } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollTo = useCallback(
    (index: number) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi],
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi, setSelectedIndex]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, setScrollSnaps, onSelect]);

  return (
    <div className="embla relative" onClick={onClick}>
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="embla__container">
          {images?.map((image, index) => (
            <div className="embla__slide" key={index}>
              <AspectRatio ratio={3 / 4}>
                <Image
                  src={image}
                  alt={image}
                  fill
                  className="cursor-pointer rounded-xl object-contain object-center group-hover:opacity-75"
                  // placeholder='blur'
                  // blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mOccel1PQAHNQLWmSisQgAAAABJRU5ErkJggg=='
                />
              </AspectRatio>
            </div>
          ))}
        </div>
      </div>
      <div className="embla__dots overflow-hidden">
        {scrollSnaps.map((_, index) => (
          // <DotButton  selected={index === selectedIndex} onClick={() => scrollTo(index)} />
          <button
            key={index}
            className={"embla__dot after:bg-gray-500".concat(
              index === selectedIndex ? " embla__dot--selected" : "",
            )}
            type="button"
            onClick={() => scrollTo(index)}
          />
        ))}
      </div>
    </div>
  );
};
