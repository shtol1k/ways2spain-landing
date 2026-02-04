const { execSync } = require('child_process');

const branch = process.env.VERCEL_GIT_COMMIT_REF;
console.log(`Current branch: ${branch}`);

// Run migrations ONLY if NOT on main branch
// This assumes 'dev' or feature branches update the shared DB structure first
if (branch === 'main') {
    console.log('Production build (main): Skipping migrations to avoid conflicts with shared DB.');
} else {
    console.log(`Preview build (${branch}): Running migrations...`);
    try {
        execSync('npx payload migrate --force-accept-warning', { stdio: 'inherit' });
    } catch (error) {
        console.error('Migration failed:', error);
        process.exit(1);
    }
}

console.log('Starting Next.js build...');
try {
    execSync('npm run build', { stdio: 'inherit' });
} catch (error) {
    console.error('Build failed:', error);
    process.exit(1);
}
