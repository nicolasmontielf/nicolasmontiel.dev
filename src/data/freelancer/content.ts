import { getFreelancerCaseStudyPreviews } from '@/data/case-studies';
import type { Locale } from '@/i18n/locales';
import type { FreelancerPageContent } from '@/types/freelancer';

const freelancerContentEn: FreelancerPageContent = {
    navbar: {
        items: [
            'About',
            'Services',
            'Process',
            'Case Studies',
            'Pricing',
            'Blog',
            'What I Offer',
            'Gallery',
            'Contact',
        ],
        ctaLabel: 'Hire Me',
    },
    about: {
        title: 'About Me',
        paragraphs: [
            "I'm a full-stack developer and designer with over 8 years of experience building digital products that people love. Based in San Francisco, I specialize in creating clean, performant web applications using modern technologies.",
            "My journey started with a fascination for the intersection of design and technology. Today, I bring that same curiosity to every project, whether it's crafting pixel-perfect interfaces, architecting scalable backends, or designing intuitive user experiences.",
            "When I'm not coding, you'll find me contributing to open-source projects, mentoring aspiring developers, or exploring the latest design trends.",
        ],
        metrics: [
            {
                value: '8+',
                label: 'Years of Experience',
            },
            {
                value: '13+',
                label: 'Countries Served',
            },
            {
                value: '7+',
                label: 'Industries Supported',
            },
        ],
    },
    services: {
        badgeLabel: 'Services',
        title: 'What I Can Help You Build',
        description:
            'A focused set of digital services designed to help you launch faster, communicate clearly, and grow with confidence.',
        items: [
            {
                icon: 'globe',
                title: 'Web Development',
                description:
                    'Custom websites and digital platforms built to look sharp, load fast, and support your business goals.',
            },
            {
                icon: 'sparkles',
                title: 'AI Integrations',
                description:
                    'Smart workflows, AI-powered features, and practical automations that improve operations without adding complexity.',
            },
            {
                icon: 'palette',
                title: 'Landing Pages',
                description:
                    'High-converting pages crafted to explain your offer clearly, build trust fast, and turn visitors into leads.',
            },
            {
                icon: 'rocket',
                title: 'Product Launch Support',
                description:
                    'From positioning to launch readiness, I help shape the final experience so your release feels polished and intentional.',
            },
        ],
    },
    process: {
        badgeLabel: 'Process',
        title: 'My Process',
        description:
            'A simple and collaborative process that keeps the project clear, focused, and moving forward.',
        steps: [
            {
                badge: 'Step 01',
                title: 'Understand',
                subtitle: 'Discovery and alignment',
                description:
                    'We define goals, audience, and constraints before proposing solutions.',
            },
            {
                badge: 'Step 02',
                title: 'Plan',
                subtitle: 'Scope and direction',
                description:
                    'We shape the structure, priorities, and roadmap so the execution stays focused.',
            },
            {
                badge: 'Step 03',
                title: 'Execute',
                subtitle: 'Build and refine',
                description:
                    'The solution is built with speed, clarity, and room for thoughtful iteration.',
            },
            {
                badge: 'Step 04',
                title: 'Launch',
                subtitle: 'Go live with confidence',
                description:
                    'Final polish, launch support, and a careful handoff close the loop.',
            },
        ],
    },
    caseStudies: {
        badgeLabel: 'Case Studies',
        title: 'Selected Case Studies',
        description:
            'A few examples of how strategy, design, and execution come together in the work.',
        ctaLabel: 'View Project',
        items: getFreelancerCaseStudyPreviews('en'),
    },
    testimonials: {
        badgeLabel: 'Testimonials',
        title: 'What Clients Say',
        description:
            'Feedback from people I have had the pleasure of working with.',
        items: [
            {
                quote:
                    '"Alex redesigned our entire web platform and the results speak for themselves. His attention to detail and ability to turn complex requirements into elegant solutions is remarkable."',
                author: 'Sarah Chen',
                role: 'CEO, TechFlow',
                initial: 'S',
            },
            {
                quote:
                    '"Working with Alex was effortless. He understood our vision immediately and delivered a brand identity that perfectly balanced modern aesthetics with practical usability."',
                author: 'Marcus Johnson',
                role: 'CTO, DataSync',
                initial: 'M',
            },
            {
                quote:
                    '"The mobile app Alex designed for us won a design award. His attention to micro-interactions and performance makes the product feel polished from the very first tap."',
                author: 'Emily Rodriguez',
                role: 'Product Manager, CloudBase',
                initial: 'E',
            },
        ],
    },
    faq: {
        badgeLabel: 'FAQ',
        title: 'Frequently Asked Questions',
        description:
            'Find answers to common questions about my services, process, and availability.',
        items: [
            { question: 'What is your availability for new projects?' },
            { question: 'What does your process look like?' },
            { question: 'How do you handle pricing?' },
            { question: 'What technologies do you work with?' },
            { question: 'Do you offer ongoing maintenance?' },
        ],
    },
    contact: {
        title: "Let's Work Together",
        description:
            "Have a project in mind or just want to chat? I'd love to hear from you. Send me a message and I'll get back to you within 24 hours.",
        placeholder:
            'A custom contact form will be embedded here in a later iteration. For now, this section keeps the same visual rhythm as the original layout.',
        email: 'hello@alexrivera.dev',
    },
};

const freelancerContentEs: FreelancerPageContent = {
    ...freelancerContentEn,
    caseStudies: {
        ...freelancerContentEn.caseStudies,
        items: getFreelancerCaseStudyPreviews('es'),
    },
};

const freelancerContentByLocale: Record<Locale, FreelancerPageContent> = {
    en: freelancerContentEn,
    es: freelancerContentEs,
};

export function getFreelancerContent(locale: Locale): FreelancerPageContent {
    return freelancerContentByLocale[locale];
}
