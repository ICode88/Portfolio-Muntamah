import Link from 'next/link';
import { Instagram, Facebook, Twitter, Mail, MapPin, Phone } from 'lucide-react';
import Container from './Container';

export default function Footer() {
  return (
    <footer className="bg-neutral-950 text-white pt-16 pb-8">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-16 mb-10">
          <div>
            <h3 className="text-xl font-serif mb-4">Muntamah</h3>
            <p className="text-neutral-400 mb-6">
              Exclusive fashion design that celebrates individuality and elegance. 
              Every stitch tells a story of creativity and passion.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-white/70 hover:text-white transition-colors">
                <Instagram size={20} />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-white/70 hover:text-white transition-colors">
                <Facebook size={20} />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-white/70 hover:text-white transition-colors">
                <Twitter size={20} />
                <span className="sr-only">Twitter</span>
              </Link>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#about" className="text-neutral-400 hover:text-white transition-colors">
                  About Muntamah
                </Link>
              </li>
              <li>
                <Link href="#collection" className="text-neutral-400 hover:text-white transition-colors">
                  Collection Gallery
                </Link>
              </li>
              <li>
                <Link href="#testimonials" className="text-neutral-400 hover:text-white transition-colors">
                  Client Testimonials
                </Link>
              </li>
              <li>
                <Link href="#booking" className="text-neutral-400 hover:text-white transition-colors">
                  Book a Consultation
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-neutral-400">
                <MapPin size={20} className="shrink-0 mt-1" />
                <span>Studio Muntamah, Jl. Fashion Design 123, Jakarta Selatan</span>
              </li>
              <li className="flex items-center gap-3 text-neutral-400">
                <Phone size={20} />
                <span>+62 812 3456 7890</span>
              </li>
              <li className="flex items-center gap-3 text-neutral-400">
                <Mail size={20} />
                <span>info@muntamah.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-neutral-800 pt-8 text-center text-neutral-500">
          <p>&copy; {new Date().getFullYear()} Muntamah Fashion Design. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  );
}