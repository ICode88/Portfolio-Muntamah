export interface GalleryItem {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  category: 'casual' | 'formal' | 'traditional' | 'bridal';
}

export const galleryItems: GalleryItem[] = [
  {
    id: 1,
    title: 'Summer Collection',
    description: 'Light and elegant designs for the summer season',
    imageUrl: 'https://images.pexels.com/photos/6817184/pexels-photo-6817184.jpeg?auto=compress&cs=tinysrgb&w=1600',
    category: 'casual'
  },
  {
    id: 2,
    title: 'Evening Elegance',
    description: 'Sophisticated gowns for special occasions',
    imageUrl: 'https://images.pexels.com/photos/4857775/pexels-photo-4857775.jpeg?auto=compress&cs=tinysrgb&w=1600',
    category: 'formal'
  },
  {
    id: 3,
    title: 'Modern Kebaya',
    description: 'Contemporary twist on traditional Indonesian attire',
    imageUrl: 'https://images.pexels.com/photos/11679956/pexels-photo-11679956.jpeg?auto=compress&cs=tinysrgb&w=1600',
    category: 'traditional'
  },
  {
    id: 4,
    title: 'Corporate Line',
    description: 'Professional yet stylish workplace attire',
    imageUrl: 'https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1600',
    category: 'formal'
  },
  {
    id: 5,
    title: 'Casual Chic',
    description: 'Effortlessly stylish everyday wear',
    imageUrl: 'https://images.pexels.com/photos/1126993/pexels-photo-1126993.jpeg?auto=compress&cs=tinysrgb&w=1600',
    category: 'casual'
  },
  {
    id: 6,
    title: 'Wedding Collection',
    description: 'Timeless wedding gowns with modern accents',
    imageUrl: 'https://images.pexels.com/photos/2122363/pexels-photo-2122363.jpeg?auto=compress&cs=tinysrgb&w=1600',
    category: 'bridal'
  }
];

export const categories = [
  { value: 'all', label: 'All Designs' },
  { value: 'casual', label: 'Casual Wear' },
  { value: 'formal', label: 'Formal Attire' },
  { value: 'traditional', label: 'Traditional' },
  { value: 'bridal', label: 'Bridal' }
];