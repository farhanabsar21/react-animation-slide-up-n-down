import { Testimonial } from '../../@types/testimonial-type';

export const testimonials: Testimonial[] = [
  {
    image:
      'https://images.unsplash.com/photo-1445053023192-8d45cb66099d?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    name: 'John Doe',
    designation: 'Software Engineer',
    review: 'This is an amazing product! Highly recommend it.',
    rating: 5,
  },
  {
    image:
      'https://images.unsplash.com/photo-1521566652839-697aa473761a?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    name: 'Jane Smith',
    designation: 'Product Manager',
    review: 'It has been a game-changer for my workflow.',
    rating: 4,
  },
  {
    image:
      'https://images.unsplash.com/photo-1468078809804-4c7b3e60a478?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    name: 'Alice Johnson',
    designation: 'UI/UX Designer',
    review: 'User-friendly and incredibly efficient.',
    rating: 5,
  },
];
