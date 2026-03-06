import pg from 'pg';
const { Pool } = pg;
import dotenv from 'dotenv';
import dns from 'dns';
dotenv.config();

const dbUrl = process.env.DATABASE_URL;
console.log('Original DATABASE_URL length:', dbUrl ? dbUrl.length : 'undefined');

if (dbUrl) {
    try {
        const url = new URL(dbUrl);
        console.log('Parsed Host:', url.hostname);
        console.log('Parsed Username:', url.username);
        // Do not log password for security, but check if it contains @
        if (url.password.includes('@')) {
            console.log('WARNING: Parsed password still contains @');
        } else {
            console.log('Parsed password length:', url.password.length);
        }

        dns.lookup(url.hostname, (err, address, family) => {
            console.log('DNS Lookup for', url.hostname, ':', err || address);
        });

        const pool = new Pool({
            connectionString: dbUrl,
        });

        pool.connect((err, client, release) => {
            if (err) {
                console.error('Connection error details:', err);
                process.exit(1);
            }
            console.log('Successfully connected!');
            release();
            process.exit(0);
        });
    } catch (e) {
        console.error('Failed to parse URL:', e.message);
        process.exit(1);
    }
} else {
    console.error('DATABASE_URL is not defined in .env');
    process.exit(1);
}
