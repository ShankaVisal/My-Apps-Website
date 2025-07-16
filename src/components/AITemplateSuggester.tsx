'use client';

import { useState } from 'react';
import { Lightbulb } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { getTemplateSuggestion } from '@/actions/suggestTemplate';
import type { App } from '@/lib/types';
import type { SuggestAppTemplateOutput } from '@/ai/flows/suggest-app-template';

type AITemplateSuggesterProps = {
  app: App;
};

type Suggestion = SuggestAppTemplateOutput | { error: string };

export function AITemplateSuggester({ app }: AITemplateSuggesterProps) {
  const [loading, setLoading] = useState(false);
  const [suggestion, setSuggestion] = useState<Suggestion | null>(null);

  const handleClick = async () => {
    setLoading(true);
    setSuggestion(null);
    const result = await getTemplateSuggestion({
      appName: app.name,
      shortDescription: app.shortDescription,
      longDescription: app.longDescription,
      featureList: app.techStack, // Using techStack as a proxy for features
      designElements: app.designElements,
    });
    setSuggestion(result);
    setLoading(false);
  };

  return (
    <Card className="mt-12 bg-muted/50">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 font-headline">
          <Lightbulb className="text-accent" />
          AI Template Suggestion
        </CardTitle>
        <CardDescription>
          Curious why this layout was chosen? Click the button to ask our AI which template best fits this app's profile based on its data.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Button onClick={handleClick} disabled={loading}>
          {loading ? 'Analyzing...' : 'Get AI Suggestion'}
        </Button>
        {suggestion && (
          <div className="mt-4 p-4 border rounded-lg bg-background">
            {'error' in suggestion ? (
              <p className="text-destructive">{suggestion.error}</p>
            ) : (
              <div>
                <h4 className="font-bold font-headline">AI Recommendation</h4>
                <p><strong>Suggested Template ID:</strong> {suggestion.templateId}</p>
                <p><strong>Reasoning:</strong> {suggestion.reasoning}</p>
              </div>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
