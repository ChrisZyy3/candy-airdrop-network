"use client"

import { useLanguage } from "@/app/context/language-context"
import Image from "next/image"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"

export function HeroCarousel() {
  const { locale, t } = useLanguage()
  const slides = t.hero.carouselSlides // 从语言文件获取配置

  return (
    <Carousel className="w-full h-[500px] relative"
      plugins={[
        Autoplay({
          delay: 3000,
        }),
      ]}>
      <CarouselContent>
        {slides.map((slide, index) => (
          <CarouselItem key={index} className="h-[500px]">
            <div className="relative w-full h-full">
              <Image
                src={slide.image}
                alt={`${slide.title} - ${slide.highlight}`}
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-black/30">
                <div className="container mx-auto px-4 h-full flex flex-col justify-center">
                  <div className="max-w-2xl">
                    <h1 className="text-2xl md:text-4xl font-bold text-white">
                      {slide.title}
                    </h1>
                    <h2 className="text-2xl md:text-4xl font-bold text-primary mb-4">
                      {slide.highlight}
                    </h2>
                    <div className="mt-4">
                      <p className="text-xl text-white">{slide.subtitle}</p>
                      <p className="text-xl text-primary">{slide.subtitle2}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/20 text-white hover:bg-black/40 border-none" />
      <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/20 text-white hover:bg-black/40 border-none" />
    </Carousel>
  )
}

