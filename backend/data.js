import bcrypt from 'bcryptjs';

const data = {
  users: [
    {
      name: 'WFutsal',
      email: 'admin@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: true,
    },
    {
      name: 'JohnDoe',
      email: 'user@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: false,
    },
  ],
  products: [
    {
      // _id: '1',
      name: 'Futsal-1',
      slug: 'Futsal-1',
      category: 'Lapangan-Futsal',
      image: '', // 679px × 829px
      price: 10000,
      court: 'Plaster',
      rating: 4.5,
      numReviews: 10,
      description: 'Lapangan Plaster',
    },
    {
      // _id: '2',
      name: 'Futsal-2',
      slug: 'Futsal-2',
      category: 'Lapangan-Futsal',
      image: '',
      price: 25000,
      court: 'Rumput',
      rating: 4.0,
      numReviews: 10,
      description: 'Lapangan Rumput',
    },
    {
      // _id: '3',
      name: 'Futsal-3',
      slug: 'Futsal-3',
      category: 'Lapangan-Futsal',
      image: '',
      price: 30000,
      court: 'Aspal',
      rating: 2.5,
      numReviews: 14,
      description: 'Lapangan Aspal',
    },
    {
      // _id: '4',
      name: 'Futsal-3',
      slug: 'Futsal-3',
      category: 'Lapangan-Futsal',
      image: '',
      price: 6500,
      court: 'Underwater',
      rating: 3.5,
      numReviews: 10,
      description: 'Lapangan Tenggelam',
    },
  ],
};
export default data;
