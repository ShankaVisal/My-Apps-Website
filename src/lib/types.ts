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
};

export type Banner = {
    title: string;
    description: string;
    image: string;
    buttonText: string;
    buttonLink: string;
};
