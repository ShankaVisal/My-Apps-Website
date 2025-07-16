export type App = {
  slug: string;
  name: string;
  shortDescription: string;
  longDescription: string;
  featureImage: string;
  gallery: string[];
  downloadLinks: {
    android: string;
    ios: string;
  };
  categories: string[];
  techStack: string[];
  templateId: number;
  designElements: string;
};
