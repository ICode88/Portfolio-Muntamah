import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.pexels.com/photos/6621172/pexels-photo-6621172.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt="Fashion designer working"
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-xl text-white">
          <h1 className="text-5xl lg:text-6xl font-serif font-medium leading-tight mb-6">
            Elegance in <span className="text-amber-200">Every Stitch</span>
          </h1>
          <p className="text-xl text-white/90 mb-8">
            Desain baju eksklusif oleh Muntamah — tampil beda dengan gaya khasmu.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" className="text-base">
              <Link href="#collection">
                Lihat Koleksi
                <ChevronRight size={18} className="ml-2" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild className="text-base bg-transparent border-white text-white hover:bg-white/10">
              <Link href="#booking">Booking Konsultasi</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}