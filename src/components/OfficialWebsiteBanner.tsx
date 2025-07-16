
'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Button } from './ui/button';
import { ArrowRight, Globe } from 'lucide-react';

export function OfficialWebsiteBanner() {

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <motion.section
        className="py-20 bg-background"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
    >
      <div className="container mx-auto px-4">
        <div className="relative group">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
          <div className="relative bg-muted/50 rounded-2xl p-8 md:p-12 text-center shadow-lg border">
            <div className="max-w-2xl mx-auto">
                <motion.div
                  className="flex justify-center mb-4"
                  variants={{
                    hidden: { scale: 0 },
                    visible: { scale: 1, transition: { delay: 0.2, type: 'spring', stiffness: 150 } }
                  }}
                >
                    <Globe className="h-12 w-12 text-primary" />
                </motion.div>
                <h2 className="text-3xl md:text-4xl font-bold font-headline mb-4">
                  Visit My Official Website
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  For a more detailed look at my full portfolio, blog articles, and professional journey, please visit my official website.
                </p>
                <Button asChild size="lg" className="px-8 py-6 text-lg">
                  <Link href="https://www.shankavisal.com" target="_blank" rel="noopener noreferrer">
                      Visit shankavisal.com <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
