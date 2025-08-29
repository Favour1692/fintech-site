"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { howcard } from "@/constants";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { FaArrowRightLong } from "react-icons/fa6";
import Autoplay from "embla-carousel-autoplay";

const How = () => {
  return (
    <Carousel
      opts={{
        loop: true,
      }}
      plugins={[
        Autoplay({
          delay: 2000,
          stopOnMouseEnter: true,
          stopOnInteraction: false,
        }),
      ]}
    >
      <CarouselContent className="-ml-2 md:-ml-4">
        {howcard.map((data) => (
          <CarouselItem
            key={data.id}
            className="md:basis-1/2 lg:basis-1/3 pl-2 md:pl-4"
          >
            <Card className="h-[220px] flex flex-col justify-center">
              <CardHeader className="md:pt-2">
                <CardTitle>{data.step}</CardTitle>
                <CardDescription className="font-semibold text-darkblue dark:text-lightblue">
                  {data.title}
                </CardDescription>
                <CardAction>
                  <FaArrowRightLong />
                </CardAction>
              </CardHeader>
              <CardContent className="flex flex-col justify-center items-center gap-2 md:pb-2">
                <div className="text-5xl font-semibold text-dim dark:text-darkblue">
                  {data.icon}
                </div>
                <p>{data.description}</p>
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="absolute -left-2 top-1/2 -translate-y-1/2 z-10 bg-lightblue text-ivory dark:text-dim dark:bg-darkwhite font-semibold" />
      <CarouselNext className="absolute -right-2 top-1/2 -translate-y-1/2 z-10 bg-lightblue text-ivory dark:text-dim dark:bg-darkwhite font-semibold" />
    </Carousel>
  );
};

export default How;
