export type HomePageContent = {
    hero: {
        profile: {
            name: string;
            location: string;
            handle: string;
        };
        greeting: {
            prefix?: string;
            accent?: string;
            suffix?: string;
        };
        roles: string[];
        metrics: Array<{
            value: string;
            label: string;
        }>;
        ctas: Array<{
            label: string;
            description: string;
            href: string;
        }>;
    };
};
