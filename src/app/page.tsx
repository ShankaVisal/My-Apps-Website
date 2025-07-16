import { getApps } from '@/lib/apps';
import AppCard from '@/components/AppCard';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function Home() {
  const apps = getApps();

  return (
    <div className="container mx-auto px-4 py-12">
      <section className="text-center py-20">
        <h1 className="text-4xl md:text-6xl font-bold font-headline tracking-tight mb-4 text-primary">
          Shanka Visal
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto text-muted-foreground mb-8">
          A passionate mobile app developer creating innovative and user-centric applications for Android and iOS. Explore my work below.
        </p>
        <div className="flex justify-center gap-4">
          <Button asChild size="lg">
            <Link href="#apps">Explore Apps</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/contact">Get In Touch</Link>
          </Button>
        </div>
      </section>

      <section id="apps" className="py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 font-headline">
          My Applications
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {apps.map((app, index) => (
            <AppCard key={app.slug} app={app} index={index} />
          ))}
        </div>
      </section>
    </div>
  );
}
