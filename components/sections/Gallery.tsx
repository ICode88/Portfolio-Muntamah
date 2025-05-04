"use client";

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { galleryItems, categories } from '@/data/gallery';

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredItems = activeCategory === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);

  return (
    <section id="collection" className="py-24">
      <div className="text-center mb-12">
        <h2 className="text-sm font-medium uppercase tracking-wider text-neutral-500 dark:text-neutral-400 mb-2">
          Karya Eksklusif
        </h2>
        <h3 className="text-4xl font-serif mb-6">Koleksi Terbaru</h3>
        <p className="max-w-2xl mx-auto text-muted-foreground">
          Jelajahi koleksi desain terbaru dari Muntamah yang menampilkan keindahan 
          dan keunikan dalam setiap detail. Setiap karya dirancang dengan penuh 
          passion dan dedikasi untuk para pencinta fashion yang menghargai kreativitas.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-3 mb-10">
        {categories.map((category) => (
          <Button
            key={category.value}
            variant={activeCategory === category.value ? "default" : "outline"}
            onClick={() => setActiveCategory(category.value)}
            className="rounded-full"
          >
            {category.label}
          </Button>
        ))}
      </div>

      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        layout
      >
        {filteredItems.map((item) => (
          <motion.div
            key={item.id}
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="group relative h-[450px] rounded-xl overflow-hidden"
          >
            <Image
              src={item.imageUrl}
              alt={item.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
              <h4 className="text-white text-xl font-medium mb-2">{item.title}</h4>
              <p className="text-white/80 text-sm">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}