import { createMarkdownProcessor } from '@astrojs/markdown-remark';

const markdownProcessorPromise = createMarkdownProcessor();

export async function renderMarkdown(content: string) {
    const markdownProcessor = await markdownProcessorPromise;
    const result = await markdownProcessor.render(content);

    return result.code;
}
