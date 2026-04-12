export type CertificationIssuer = 'aws' | 'gcp' | 'vue';

export type Certification = {
	id: string;
	title: string;
	issuer: CertificationIssuer;
	href: string;
};

export const certifications: Certification[] = [
	{
		id: 'aws-certified-solutions-architect-associate',
		title: 'AWS Certified Solutions Architect - Associate',
		issuer: 'aws',
		href: '#',
	},
	{
		id: 'google-cloud-certified-professional-cloud-developer',
		title: 'Google Cloud Certified - Professional Cloud Developer',
		issuer: 'gcp',
		href: '#',
	},
	{
		id: 'vue-certified-developer',
		title: 'Vue.js Certified Developer',
		issuer: 'vue',
		href: '#',
	},
];
