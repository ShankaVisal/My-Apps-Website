'use server';

/**
 * @fileOverview AI flow to suggest the most visually appealing UI template for a mobile app based on its data.
 *
 * - suggestAppTemplate - A function that handles the template suggestion process.
 * - SuggestAppTemplateInput - The input type for the suggestAppTemplate function.
 * - SuggestAppTemplateOutput - The return type for the suggestAppTemplate function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SuggestAppTemplateInputSchema = z.object({
  appName: z.string().describe('The name of the mobile app.'),
  shortDescription: z.string().describe('A short, engaging description of the app.'),
  longDescription: z.string().describe('A detailed description of the app and its features.'),
  featureList: z.array(z.string()).describe('A list of key features of the app.'),
  designElements: z
    .string()
    .describe(
      'A description of the app\s existing design elements, such as color scheme and imagery.'
    ),
});
export type SuggestAppTemplateInput = z.infer<typeof SuggestAppTemplateInputSchema>;

const SuggestAppTemplateOutputSchema = z.object({
  templateId: z
    .number()
    .min(1)
    .max(6)
    .describe(
      'The ID of the suggested UI template (1-6) that best suits the app\s visual style and features.'
    ),
  reasoning: z
    .string()
    .describe(
      'The AI\s reasoning behind suggesting the specific template ID, explaining why it is the most visually appealing choice based on the provided app data.'
    ),
});
export type SuggestAppTemplateOutput = z.infer<typeof SuggestAppTemplateOutputSchema>;

export async function suggestAppTemplate(input: SuggestAppTemplateInput): Promise<SuggestAppTemplateOutput> {
  return suggestAppTemplateFlow(input);
}

const prompt = ai.definePrompt({
  name: 'suggestAppTemplatePrompt',
  input: {schema: SuggestAppTemplateInputSchema},
  output: {schema: SuggestAppTemplateOutputSchema},
  prompt: `You are an AI assistant that specializes in suggesting the most visually appealing UI template for a mobile app. You have six templates to choose from (IDs 1-6), each with a distinct style:

  1: Glassmorphism Style: layered images and soft backgrounds
  2: Minimal Dark Mode: bold typography
  3: Split-Screen Layout: feature image on one side, text on the other
  4: Floating Cards UI: interactive animations
  5: Neumorphism Inspired: soft shadows
  6: Tech Showcase: scrolling animation, mockup devices, and video support

Based on the provided data about the app, select the template ID (1-6) that you believe would provide the most visually appealing user experience. Explain your reasoning for the choice. Be concise.

App Name: {{{appName}}}
Short Description: {{{shortDescription}}}
Long Description: {{{longDescription}}}
Key Features: {{#each featureList}}{{{this}}}{{#unless @last}}, {{/unless}}{{/each}}
Existing Design Elements: {{{designElements}}}

Template ID: 
Reasoning: `,
});

const suggestAppTemplateFlow = ai.defineFlow(
  {
    name: 'suggestAppTemplateFlow',
    inputSchema: SuggestAppTemplateInputSchema,
    outputSchema: SuggestAppTemplateOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
