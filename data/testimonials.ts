export interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  imageUrl: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Putri Anjani',
    role: 'Aktris',
    content: 'Desain Muntamah selalu menjadi pilihan saya untuk acara-acara penting. Detailnya luar biasa dan selalu membuat saya tampil memukau. Setiap gaun terasa personal dan istimewa.',
    imageUrl: 'https://images.pexels.com/photos/1542085/pexels-photo-1542085.jpeg?auto=compress&cs=tinysrgb&w=1600'
  },
  {
    id: 2,
    name: 'Dina Wijaya',
    role: 'Pengusaha',
    content: 'Sebagai seorang profesional, saya memerlukan busana yang elegan namun praktis. Muntamah memahami kebutuhan saya dan menciptakan koleksi yang sempurna untuk gaya hidup saya.',
    imageUrl: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1600'
  },
  {
    id: 3,
    name: 'Reza Pradana',
    role: 'Influencer',
    content: 'Bekerja dengan Muntamah adalah pengalaman yang menyenangkan. Dia benar-benar mendengarkan visi saya dan mengeksekusinya dengan sentuhan kreatif yang menakjubkan.',
    imageUrl: 'https://images.pexels.com/photos/2269872/pexels-photo-2269872.jpeg?auto=compress&cs=tinysrgb&w=1600'
  }
];