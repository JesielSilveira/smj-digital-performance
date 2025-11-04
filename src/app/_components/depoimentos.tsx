"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const testimonials = [
  {
    name: "Ana Souza",
    text: "A SMJ Digital transformou meu negócio! Meu faturamento dobrou em poucos meses.",
    stars: 5,
    avatar: "/avatars/avatar1.png",
  },
  {
    name: "Carlos Lima",
    text: "Profissionais competentes e super atenciosos. Recomendo 100%.",
    stars: 4,
    avatar: "/avatars/avatar2.png",
  },
  {
    name: "Mariana Reis",
    text: "Serviço excelente, vídeos explicativos e suporte rápido. Adorei!",
    stars: 5,
    avatar: "/avatars/avatar3.png",
  },
];

export function Testimonials() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">

        <Carousel className="w-full max-w-md mx-auto">
          <CarouselContent>
            {testimonials.map((t, i) => (
              <CarouselItem key={i} className="p-4">
                <Card>
                  <CardHeader className="flex items-center gap-4">
                    <Avatar>
                      <AvatarImage src={t.avatar} alt={t.name} />
                      <AvatarFallback>{t.name[0]}</AvatarFallback>
                    </Avatar>
                    <CardTitle>{t.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 mb-4">{t.text}</p>
                    <div className="flex gap-1">
                      {Array.from({ length: 5 }).map((_, idx) => (
                        <Star
                          key={idx}
                          className={`w-5 h-5 ${
                            idx < t.stars ? "text-yellow-400" : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute -left-4 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow">
            ◀
          </CarouselPrevious>
          <CarouselNext className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow">
            ▶
          </CarouselNext>
        </Carousel>
      </div>
    </section>
  );
}
