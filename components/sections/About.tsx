import Image from 'next/image';
import { Button } from '@/components/ui/button';

export default function About() {
  return (
    <section id="about" className="py-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="relative h-[500px] rounded-2xl overflow-hidden">
          <Image
            src="https://images.pexels.com/photos/7681121/pexels-photo-7681121.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="Muntamah - Fashion Designer"
            fill
            className="object-cover"
          />
        </div>
        
        <div>
          <h2 className="text-sm font-medium uppercase tracking-wider text-neutral-500 dark:text-neutral-400 mb-2">
            Tentang Desainer
          </h2>
          <h3 className="text-4xl font-serif mb-6">
            Muntamah
          </h3>
          <div className="space-y-4 text-muted-foreground">
            <p>
              Dengan pengalaman lebih dari 15 tahun di dunia fashion, Muntamah telah menciptakan gaya yang khas dan tak terlupakan. 
              Setiap karya yang dirancang merupakan perpaduan antara tradisi dan modernitas yang elegant.
            </p>
            <p>
              "Fashion bukan hanya tentang pakaian, melainkan sebuah karya seni yang kita kenakan. Saya percaya setiap orang memiliki 
              cerita unik, dan busana yang tepat dapat membantu mereka mengekspresikan cerita itu."
            </p>
            <p>
              Filosofi desain Muntamah berfokus pada keseimbangan antara keindahan, kenyamanan, dan keberlanjutan. Setiap jahitan dibuat 
              dengan penuh perhatian pada detail untuk memastikan kualitas tertinggi.
            </p>
          </div>
          <div className="mt-8">
            <Button variant="outline" asChild>
              <a href="#booking">Konsultasi Desain</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}