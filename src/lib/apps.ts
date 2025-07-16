import appsData from '@/data/apps.json';
import type { App } from './types';

// The JSON file is imported directly, so no need for fs.
const apps: App[] = appsData;

export function getApps(): App[] {
  return apps;
}

export function getAppBySlug(slug: string): App | undefined {
  const allApps = getApps();
  return allApps.find(app => app.slug === slug);
}
