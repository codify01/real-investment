// components/FeaturesSection.tsx
'use client';

import { motion } from 'framer-motion';

const features = [
  { title: 'Secure Investments', description: 'We prioritize your security.', icon: '🔒' },
  { title: 'Easy to Use', description: 'Manage investments in just a few clicks.', icon: '⚡' },
  { title: 'Expert Insights', description: 'Leverage industry expertise for your growth.', icon: '📈' },
];

export default function FeaturesSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-pry">
          Why Choose Us
        </h2>
        <p className="text-center text-gray-600 mt-2">
          Simplified investment for everyone.
        </p>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="p-6 bg-white rounded-md shadow-md text-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <div className="text-4xl text-sec">{feature.icon}</div>
              <h3 className="mt-4 text-xl font-semibold text-pry">
                {feature.title}
              </h3>
              <p className="mt-2 text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
