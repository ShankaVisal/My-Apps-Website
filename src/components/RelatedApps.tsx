import type { App } from "@/lib/types";
import AppCard from "@/components/AppCard";

type RelatedAppsProps = {
  apps: App[];
};

export function RelatedApps({ apps }: RelatedAppsProps) {
  if (!apps || apps.length === 0) {
    return null;
  }

  return (
    <section className="mt-20 py-16 bg-muted/50 rounded-lg">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 font-headline">
          Other Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {apps.map((app, index) => (
            <AppCard key={app.slug} app={app} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
