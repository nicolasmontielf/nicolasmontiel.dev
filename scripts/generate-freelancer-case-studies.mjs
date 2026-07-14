import { readdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(__dirname, '..');
const contentDirectory = path.join(projectRoot, 'src/data/case-studies');
const outputPath = path.join(
    projectRoot,
    'src/data/freelancer/case-studies.generated.json',
);
const locales = ['en', 'es'];

function toPreviewCard(source, locale) {
    const preview = source.metadata.preview[locale];

    return {
        slug: source.slug,
        title: preview.title,
        previewText: preview.previewText,
        category: preview.category,
        technologies: source.metadata.technologies,
        imageSrc: preview.imageSrc,
        imageAlt: preview.imageAlt,
    };
}

const filenames = (await readdir(contentDirectory))
    .filter((filename) => filename.endsWith('.json'))
    .sort();

const sources = await Promise.all(
    filenames.map(async (filename) => {
        const filePath = path.join(contentDirectory, filename);
        const fileContents = await readFile(filePath, 'utf8');

        return JSON.parse(fileContents);
    }),
);

sources.sort(
    (left, right) =>
        left.metadata.order - right.metadata.order ||
        left.slug.localeCompare(right.slug),
);

const generatedPreviews = Object.fromEntries(
    locales.map((locale) => [
        locale,
        sources.map((source) => toPreviewCard(source, locale)),
    ]),
);

await writeFile(outputPath, `${JSON.stringify(generatedPreviews, null, 4)}\n`);
