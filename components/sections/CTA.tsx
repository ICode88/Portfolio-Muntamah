import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { MessageSquare, Calendar } from 'lucide-react';

export default function CTA() {
  return (
    <section id="booking" className="py-24">
      <div className="bg-neutral-100 dark:bg-neutral-900 rounded-3xl overflow-hidden relative">
        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-radial from-primary/20 to-transparent opacity-70"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-radial from-primary/20 to-transparent opacity-70"></div>
        
        <div className="px-8 py-16 md:px-16 md:py-24 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-serif mb-6">Wujudkan Gaya Impianmu</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
            Jadwalkan konsultasi dengan Muntamah untuk mendiskusikan desain baju 
            yang sesuai dengan kepribadian dan kebutuhan Anda.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-base" asChild>
              <Link href="https://wa.me/6281234567890">
                <MessageSquare className="mr-2 h-5 w-5" />
                WhatsApp Sekarang
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="text-base" asChild>
              <Link href="#contact">
                <Calendar className="mr-2 h-5 w-5" />
                Jadwalkan Konsultasi
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}