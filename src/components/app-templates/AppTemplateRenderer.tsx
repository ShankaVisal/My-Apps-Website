import type { App } from '@/lib/types';
import Template1 from './Template1';
import Template2 from './Template2';
import Template3 from './Template3';
import Template4 from './Template4';
import Template5 from './Template5';
import Template6 from './Template6';

type AppTemplateRendererProps = {
  app: App;
};

export function AppTemplateRenderer({ app }: AppTemplateRendererProps) {
  const renderTemplate = () => {
    switch (app.templateId) {
      case 1:
        return <Template1 app={app} />;
      case 2:
        return <Template2 app={app} />;
      case 3:
        return <Template3 app={app} />;
      case 4:
        return <Template4 app={app} />;
      case 5:
        return <Template5 app={app} />;
      case 6:
        return <Template6 app={app} />;
      default:
        // Fallback to a default template if id is invalid
        return <Template1 app={app} />;
    }
  };

  return (
    <article>
        {renderTemplate()}
    </article>
  );
}
