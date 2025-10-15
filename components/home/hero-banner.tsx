'use client';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import { useCallback, useEffect, useState } from 'react';

interface BannerSlide {
  id: number;
  image: string;
  alt: string;
  bgColor: string;
}

const bannerSlides: BannerSlide[] = [
  {
    id: 1,
    image: '/images/banner-1.png',
    alt: 'Banner 1',
    bgColor: 'bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400',
  },
  {
    id: 2,
    image: '/images/banner-2.png',
    alt: 'Banner 2',
    bgColor: 'bg-gradient-to-r from-blue-600 to-blue-800',
  },
  {
    id: 3,
    image: '/images/banner-3.png',
    alt: 'Banner 3',
    bgColor: 'bg-gradient-to-r from-yellow-300 to-yellow-500',
  },
  {
    id: 4,
    image: '/images/banner-4.png',
    alt: 'Banner 4',
    bgColor: 'bg-gradient-to-r from-green-500 to-emerald-600',
  },
  {
    id: 5,
    image: '/images/banner-5.png',
    alt: 'Banner 5',
    bgColor: 'bg-gradient-to-r from-red-500 to-pink-600',
  },
];

export function HeroBanner() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  // Update current slide and total count on selection
  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());

    api.on('select', () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  // Manual navigation
  const scrollTo = useCallback(
    (index: number) => {
      api?.scrollTo(index);
    },
    [api]
  );

  return (
    <div className="border-border-default border-b py-4">
      <div className="px-6">
        <Carousel
          setApi={setApi}
          opts={{
            align: 'start',
            loop: true,
            slidesToScroll: 1,
          }}
          plugins={[
            Autoplay({
              delay: 5000,
              stopOnInteraction: false,
              stopOnMouseEnter: true,
            }),
          ]}
          className="w-full"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {bannerSlides.map((slide) => (
              <CarouselItem
                key={slide.id}
                className="pl-2 md:basis-1/2 md:pl-4 lg:basis-1/3"
              >
                <div
                  className={`h-[136px] overflow-hidden rounded-md ${slide.bgColor}`}
                >
                  {/* Placeholder for banner image */}
                  <div className="flex h-full w-full items-center justify-center text-white">
                    <span className="text-xl font-semibold md:text-2xl">
                      Banner {slide.id}
                    </span>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        {/* Pagination dots */}
        <div className="mt-4 flex items-center justify-center gap-1">
          {Array.from({ length: count }).map((_, index) => (
            <button
              key={index}
              onClick={() => scrollTo(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                current === index ? 'w-4 bg-white' : 'size-2 bg-white/50'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
