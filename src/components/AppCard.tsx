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

export default function AppCard({ app, index }: AppCardProps) {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: index * 0.1,
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      whileHover={{ y: -5, scale: 1.02 }}
      transition={{ type: 'spring', stiffness: 300 }}
    >
      <Link href={`/apps/${app.slug}`} className="block group">
        <Card className="h-full overflow-hidden transition-shadow duration-300 hover:shadow-xl">
          <CardHeader className="p-0">
            <div className="aspect-video overflow-hidden">
              <Image
                src={app.featureImage}
                alt={app.name}
                width={600}
                height={400}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                data-ai-hint="app screenshot"
              />
            </div>
            <div className="p-6">
              <CardTitle className="font-headline text-xl mb-2">{app.name}</CardTitle>
              <CardDescription>{app.shortDescription}</CardDescription>
            </div>
          </CardHeader>
          <CardContent className="p-6 pt-0 flex flex-col justify-between">
            <div>
              <div className="flex flex-wrap gap-2 mb-4">
                {app.categories.slice(0, 2).map((category) => (
                  <Badge key={category} variant="secondary">{category}</Badge>
                ))}
              </div>
            </div>
            <div className="flex items-center text-sm font-semibold text-primary group-hover:underline">
              View Details <ArrowRight className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </div>
          </CardContent>
        </Card>
      </Link>
    </motion.div>
  );
}
