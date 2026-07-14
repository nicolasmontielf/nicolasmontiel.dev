type CompanyImageModule = {
    default: {
        src: string;
    };
};

const companyImageModules = import.meta.glob<CompanyImageModule>(
    '@/assets/companies/*.{jpg,jpeg,png,webp,avif,svg}',
    {
        eager: true,
    },
);

const companyImageById = Object.fromEntries(
    Object.entries(companyImageModules).map(([path, module]) => {
        const filename = path.split('/').pop() ?? '';
        const id = filename.replace(/\.[^.]+$/, '');

        return [id, module.default.src];
    }),
) as Record<string, string>;

export function getCompanyImageById(id: string) {
    return companyImageById[id];
}
