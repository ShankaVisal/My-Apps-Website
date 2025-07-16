'use server';

import { suggestAppTemplate, SuggestAppTemplateInput, SuggestAppTemplateOutput } from '@/ai/flows/suggest-app-template';

type SuggestionResult = SuggestAppTemplateOutput | { error: string };

export async function getTemplateSuggestion(input: SuggestAppTemplateInput): Promise<SuggestionResult> {
  try {
    const result = await suggestAppTemplate(input);
    return result;
  } catch (error) {
    console.error('Error getting template suggestion:', error);
    return { error: 'An error occurred while getting the AI suggestion. Please try again.' };
  }
}
