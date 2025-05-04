"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { ModeToggle } from './ModeToggle';
import { Button } from './ui/button';
import Container from './Container';
import { cn } from '@/lib/utils';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={cn(
        'fixed top-0 left-0 right-0 transition-all duration-300 z-50',
        isScrolled ? 'bg-background/80 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'
      )}
    >
      <Container>
        <nav className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-semibold font-serif">
            Muntamah
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <div className="flex gap-6">
              <Link href="#about" className="text-foreground/80 hover:text-foreground transition-colors">
                About
              </Link>
              <Link href="#collection" className="text-foreground/80 hover:text-foreground transition-colors">
                Collection
              </Link>
              <Link href="#testimonials" className="text-foreground/80 hover:text-foreground transition-colors">
                Testimonials
              </Link>
              <Link href="#contact" className="text-foreground/80 hover:text-foreground transition-colors">
                Contact
              </Link>
            </div>
            <div className="flex items-center gap-4">
              <ModeToggle />
              <Button asChild>
                <Link href="#booking">Book Consultation</Link>
              </Button>
            </div>
          </div>

          {/* Mobile Navigation Toggle */}
          <div className="flex items-center md:hidden gap-2">
            <ModeToggle />
            <Button variant="ghost" size="icon" onClick={toggleMenu} aria-label="Toggle Menu">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </nav>
      </Container>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 top-16 bg-background z-40 px-4 pt-4 pb-6 transition-all">
          <div className="flex flex-col space-y-4 text-center text-lg">
            <Link href="#about" className="py-3 border-b border-border" onClick={toggleMenu}>
              About
            </Link>
            <Link href="#collection" className="py-3 border-b border-border" onClick={toggleMenu}>
              Collection
            </Link>
            <Link href="#testimonials" className="py-3 border-b border-border" onClick={toggleMenu}>
              Testimonials
            </Link>
            <Link href="#contact" className="py-3 border-b border-border" onClick={toggleMenu}>
              Contact
            </Link>
            <div className="pt-4">
              <Button className="w-full" asChild>
                <Link href="#booking" onClick={toggleMenu}>Book Consultation</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}