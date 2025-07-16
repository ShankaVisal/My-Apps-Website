import fs from 'fs';
import path from 'path';
import type { App } from './types';

const appsFilePath = path.join(process.cwd(), 'src/data/apps.json');

// Memoize the data so we don't have to read the file every time.
let appsCache: App[];

export function getApps(): App[] {
  if (appsCache) {
    return appsCache;
  }
  const jsonData = fs.readFileSync(appsFilePath, 'utf-8');
  appsCache = JSON.parse(jsonData);
  return appsCache;
}

export function getAppBySlug(slug: string): App | undefined {
  const apps = getApps();
  return apps.find(app => app.slug === slug);
}
