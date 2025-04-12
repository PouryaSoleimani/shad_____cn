import * as React from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, } from "@/components/ui/carousel"


export function CarouselComponent() {
    return (
        <Carousel opts={{ align: "start", loop: true }} className="w-full max-w-6xl mx-auto mt-10">
            <CarouselContent>
                {Array.from({ length: 5 }).map((_, index) => (
                    <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 ">
                        <div className="p-1">
                            <Card className="bg-zinc-700 text-white">
                                <CardContent className="flex aspect-square items-center justify-center p-6  bg-zinc-700">
                                    <span className="text-3xl font-semibold">{index + 1}</span>
                                </CardContent>
                            </Card>
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    )
}
