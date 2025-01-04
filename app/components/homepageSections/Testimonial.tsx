// components/TestimonialsSection.tsx
'use client';

import { motion } from 'framer-motion';

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: 'John Doe',
      feedback:
        'InvestWise helped me achieve financial freedom. The platform is secure and easy to use!',
      role: 'Investor',
    },
    {
      name: 'Jane Smith',
      feedback:
        'Their analytics tools are top-notch. Highly recommended for serious investors.',
      role: 'Wealth Manager',
    },
  ];

  return (
    <section id="testimonials" className="py-20 bg-pry text-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
          What Our Clients Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="p-6 bg-white text-pry rounded-lg shadow-md"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <p className="text-lg">{testimonial.feedback}</p>
              <div className="mt-4 font-bold">{testimonial.name}</div>
              <div className="text-sm text-gray-500">{testimonial.role}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
