import { createClient } from '@libsql/client';

const databaseUrl = import.meta.env.TURSO_DATABASE_URL;
const authToken = import.meta.env.TURSO_AUTH_TOKEN;

if (!databaseUrl) {
	throw new Error('Missing TURSO_DATABASE_URL environment variable.');
}

export const turso = createClient({
	url: databaseUrl,
	authToken,
});
