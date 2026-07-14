export type TechBadge = {
    label: string;
    iconName?: string;
    fallback: string;
};

const iconNameByTechnology: Record<string, string | undefined> = {
    'API Integrations': undefined,
    'AWS': 'simple-icons:amazonwebservices',
    'AWS EC2': 'simple-icons:amazonec2',
    'AWS Lambda': 'simple-icons:awslambda',
    'AWS SQS': 'simple-icons:amazonsqs',
    'Android Enterprise': 'simple-icons:android',
    'Bootstrap': 'simple-icons:bootstrap',
    'CircleCI': 'simple-icons:circleci',
    'Cypress': 'simple-icons:cypress',
    'DesignHuddle': undefined,
    'EMM': undefined,
    'Express': 'simple-icons:express',
    'Express.js': 'simple-icons:express',
    'GPT-3.5': 'simple-icons:openai',
    'Gemini': 'simple-icons:googlegemini',
    'Google Gemini': 'simple-icons:googlegemini',
    'IBM Watson': 'simple-icons:ibmwatson',
    'JavaScript': 'simple-icons:javascript',
    'Laravel': 'simple-icons:laravel',
    'Laravel Forge': undefined,
    'MongoDB': 'simple-icons:mongodb',
    'MySQL': 'simple-icons:mysql',
    'NestJS': 'simple-icons:nestjs',
    'Node.js': 'simple-icons:nodedotjs',
    'OpenAI': 'simple-icons:openai',
    'PHP': 'simple-icons:php',
    'Perplexity AI': 'simple-icons:perplexity',
    'PostgreSQL': 'simple-icons:postgresql',
    'Preact': 'simple-icons:preact',
    'React': 'simple-icons:react',
    'React.js': 'simple-icons:react',
    'Redis': 'simple-icons:redis',
    'Sentry': 'simple-icons:sentry',
    'Slack API': 'simple-icons:slack',
    'Stripe': 'simple-icons:stripe',
    'TypeScript': 'simple-icons:typescript',
    'Vue.js': 'simple-icons:vuedotjs',
    'WhatsApp Business API': 'simple-icons:whatsapp',
};

function getFallback(label: string) {
    const words = label
        .replace(/\([^)]*\)/g, '')
        .split(/[\s./-]+/)
        .map((word) => word.trim())
        .filter(Boolean);

    if (words.length === 0) {
        return '??';
    }

    if (words.length === 1) {
        return words[0].slice(0, 2).toUpperCase();
    }

    return `${words[0][0] ?? ''}${words[1][0] ?? ''}`.toUpperCase();
}

export function getTechBadges(stack: string): TechBadge[] {
    return stack
        .split(',')
        .map((item) => item.trim())
        .filter(Boolean)
        .map((label) => ({
            label,
            iconName: iconNameByTechnology[label],
            fallback: getFallback(label),
        }));
}
