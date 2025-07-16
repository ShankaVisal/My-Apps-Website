import { getApps, getAppBySlug } from '@/lib/apps';
import { notFound } from 'next/navigation';
import { AppTemplateRenderer } from '@/components/app-templates/AppTemplateRenderer';
import { RelatedApps } from '@/components/RelatedApps';
import type { App } from '@/lib/types';
import { Metadata, ResolvingMetadata } from 'next';

type Props = {
  params: { slug: string }
}

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const app = getAppBySlug(params.slug)

  if (!app) {
    return {
      title: 'App not found'
    }
  }
 
  const previousImages = (await parent).openGraph?.images || []

  return {
    title: `${app.name} by Shanka Visal`,
    description: app.shortDescription,
    openGraph: {
      title: `${app.name} | App by Shanka Visal`,
      description: app.shortDescription,
      images: [app.featureImage, ...previousImages],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${app.name} | App by Shanka Visal`,
      description: app.shortDescription,
      images: [app.featureImage],
    },
  }
}

export async function generateStaticParams() {
  const apps = getApps();
  return apps.map((app) => ({
    slug: app.slug,
  }));
}

export default function AppPage({ params }: { params: { slug: string } }) {
  const app: App | undefined = getAppBySlug(params.slug);
  
  if (!app) {
    notFound();
  }

  const allApps = getApps();
  const relatedApps = allApps.filter(a => a.slug !== app.slug).sort(() => 0.5 - Math.random()).slice(0, 3);

  return (
    <div>
      <AppTemplateRenderer app={app} />
      <div className="container mx-auto px-4">
        <RelatedApps apps={relatedApps} />
      </div>
    </div>
  );
}
