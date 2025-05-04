"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { testimonials } from '@/data/testimonials';

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const prev = () => {
    setCurrent((current) => (current === 0 ? testimonials.length - 1 : current - 1));
  };

  const next = () => {
    setCurrent((current) => (current === testimonials.length - 1 ? 0 : current + 1));
  };

  // Auto-advance the testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      next();
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="testimonials" className="py-24">
      <div className="text-center mb-16">
        <h2 className="text-sm font-medium uppercase tracking-wider text-neutral-500 dark:text-neutral-400 mb-2">
          Apa Kata Mereka
        </h2>
        <h3 className="text-4xl font-serif">Testimoni Klien</h3>
      </div>

      <div className="relative max-w-4xl mx-auto">
        <div className="absolute -top-12 left-1/2 -translate-x-1/2 text-neutral-200 dark:text-neutral-800 z-0">
          <Quote size={120} strokeWidth={0.5} />
        </div>

        <div className="relative z-10">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`transition-opacity duration-500 ${
                index === current ? 'opacity-100' : 'opacity-0 absolute top-0 left-0'
              }`}
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-24 h-24 rounded-full overflow-hidden mb-6 border-2 border-white shadow-lg">
                  <Image
                    src={testimonial.imageUrl}
                    alt={testimonial.name}
                    width={96}
                    height={96}
                    className="object-cover w-full h-full"
                  />
                </div>
                <p className="text-xl md:text-2xl leading-relaxed mb-6 max-w-3xl italic">
                  "{testimonial.content}"
                </p>
                <h4 className="text-xl font-medium">{testimonial.name}</h4>
                <p className="text-neutral-500 dark:text-neutral-400">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-10 gap-3">
          <Button variant="outline" size="icon" onClick={prev} className="rounded-full">
            <ChevronLeft className="h-5 w-5" />
            <span className="sr-only">Previous testimonial</span>
          </Button>
          <Button variant="outline" size="icon" onClick={next} className="rounded-full">
            <ChevronRight className="h-5 w-5" />
            <span className="sr-only">Next testimonial</span>
          </Button>
        </div>
        
        <div className="flex justify-center mt-6 gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`h-2 rounded-full transition-all ${
                index === current ? 'w-8 bg-primary' : 'w-2 bg-neutral-300 dark:bg-neutral-700'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}