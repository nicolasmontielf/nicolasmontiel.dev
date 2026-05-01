import RedisLogo from '@/assets/logos/redis_logo.jpeg';
import AwsLogo from '@/assets/logos/aws_logo.jpeg';
import PearsonLogo from '@/assets/logos/pearson_logo.jpeg';
import ScrumStudy from '@/assets/logos/scrumstudy_logo.jpeg';
import FreeCodeCampLogo from '@/assets/logos/freecodecamp_logo.jpeg';
import LinuxFoundationLogo from '@/assets/logos/thelinuxfoundation_logo.jpeg';

export type Certification = {
	id: string;
	title: string;
	icon: string;
	href: string;
};

export const certifications: Certification[] = [
	{
		id: 'redis-ru102js-redis-for-javascript-developers',
		title: 'Redis | RU102JS: Redis for JavaScript Developers',
		icon: RedisLogo.src,
		href: 'https://university.redis.io/certificate/ipocifjugerm3o',
	},
    {
		id: 'aws-cloud-practitioner-essentials',
		title: 'AWS Cloud Practitioner Essentials',
		icon: AwsLogo.src,
		href: 'https://drive.google.com/file/d/1f1qko9SQANtnyE_9ipjiWajLjW2LmiyR/view',
	},
    {
        id: 'tdd-javascript',
        title: 'Test-Driven Development for JavaScript Specialization',
        icon: PearsonLogo.src,
        href: 'https://coursera.org/share/67a1f7a5c95ab9783e89f40e0fc9b952',
    },
    {
		id: 'scrum-fundamentals-certified',
		title: 'Scrum Fundamentals Certified',
		icon: ScrumStudy.src,
		href: 'https://www.scrumstudy.com/certification/verify?type=SFC&number=829046',
	},
    {
		id: 'apis-and-microservices',
		title: 'API\'s and Microservices',
		icon: FreeCodeCampLogo.src,
		href: 'https://www.freecodecamp.org/certification/nicolasmontielf/back-end-development-and-apis',
	},
	{
		id: 'introduction-to-jenkins',
		title: 'Introduction to Jenkins',
		icon: LinuxFoundationLogo.src,
		href: 'https://courses.edx.org/certificates/7331bea249c44b3e8123b92e15550bc0',
	},
];
