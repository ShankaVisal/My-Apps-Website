'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import type { App } from '@/lib/types';
import { ArrowRight } from 'lucide-react';

type AppCardProps = {
  app: App;
  index: number;
};

export default function AppCard({ app }: AppCardProps) {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 70,
        damping: 15,
      }
    },
  };

  return (
    <motion.div
      className="w-full max-w-5xl"
      variants={cardVariants}
    >
      <Link href={`/apps/${app.slug}`} className="block group">
        <Card className="overflow-hidden transition-shadow duration-300 hover:shadow-2xl bg-card/80 backdrop-blur-sm border group relative">
           <div className="absolute -inset-px rounded-lg bg-gradient-to-r from-blue-400/50 via-cyan-400/50 to-blue-300/50 opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 items-center relative">
            <div className="p-8 md:p-10 order-2 md:order-1">
              <CardHeader className="p-0 mb-4">
                <CardTitle className="font-headline text-4xl mb-2">{app.name}</CardTitle>
                <CardDescription className="text-lg">{app.shortDescription}</CardDescription>
              </CardHeader>
              <CardContent className="p-0">
                  <div className="flex flex-wrap gap-2 mb-6">
                    {app.categories.slice(0, 3).map((category) => (
                      <Badge key={category} variant="secondary" className="text-sm">{category}</Badge>
                    ))}
                  </div>
                <div className="flex items-center text-md font-semibold text-primary group-hover:underline">
                  View Project <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </CardContent>
            </div>
            <div className="aspect-square md:aspect-auto md:h-full overflow-hidden order-1 md:order-2">
               <motion.div
                  className="w-full h-full"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                <Image
                  src={app.featureImage}
                  alt={app.name}
                  width={600}
                  height={600}
                  className="w-full h-full object-cover transition-transform duration-500 ease-out"
                  data-ai-hint="app screenshot"
                />
              </motion.div>
            </div>
          </div>
        </Card>
      </Link>
    </motion.div>
  );
}
