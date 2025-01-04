'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="min-h-screen bg-pry flex items-center justify-center text-white">
      <div className="text-center px-6 max-w-3xl">
        <motion.h1
          className="text-4xl md:text-6xl font-bold"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Build Your Wealth <br /> With Confidence
        </motion.h1>
        <motion.p
          className="mt-4 text-lg md:text-xl text-gray-200"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Secure, reliable, and innovative investment solutions designed for your success.
        </motion.p>
        <motion.div
          className="mt-6 flex justify-center space-x-4"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8 }}
        >
          <Link
            href="register"
            className="bg-sec text-pry px-6 py-3 rounded-md shadow-lg hover:bg-white hover:text-pry transition"
          >
            Get Started
          </Link>
          <Link
            href="#"
            className="border border-white px-6 py-3 rounded-md text-white hover:bg-sec hover:text-pry transition"
          >
            Learn More
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
