'use client'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4 py-16">
      <motion.h1
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl sm:text-5xl font-bold tracking-tight"
      >
        dfuji  Portfolio
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="mt-4 text-base sm:text-lg text-gray-500"
      >
        趣味プログラマー / モバイルファースト / Next.js + Tailwind CSS
      </motion.p>
    </section>
  )
}
