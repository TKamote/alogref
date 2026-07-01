#!/usr/bin/env node

/**
 * Copies the built site to the repository root for GitHub Pages
 * "Deploy from branch → main → / (root)".
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(__dirname, '../../..');
const buildDir = path.join(repoRoot, 'dist/web');

const ROOT_SITE_FILES = [
	'index.html',
	'404.html',
	'.htaccess',
	'robots.txt',
	'sitemap.xml',
	'llms.txt',
	'favicon.png',
	'logo.png',
	'hero-background.png',
	'about-early-days.png',
	'services-parts.png',
	'services-consultancy.png',
	'services-training.png',
];

function copyFile(name) {
	const src = path.join(buildDir, name);
	const dest = path.join(repoRoot, name);
	if (fs.existsSync(src)) {
		fs.copyFileSync(src, dest);
	}
}

function copyAssets() {
	const srcAssets = path.join(buildDir, 'assets');
	const destAssets = path.join(repoRoot, 'assets');
	if (fs.existsSync(destAssets)) {
		fs.rmSync(destAssets, { recursive: true, force: true });
	}
	if (fs.existsSync(srcAssets)) {
		fs.cpSync(srcAssets, destAssets, { recursive: true });
	}
}

if (!fs.existsSync(buildDir)) {
	console.error('Build output not found at dist/web. Run build:pages first.');
	process.exit(1);
}

for (const file of ROOT_SITE_FILES) {
	copyFile(file);
}

copyAssets();
fs.writeFileSync(path.join(repoRoot, '.nojekyll'), '');

console.log('Copied GitHub Pages build to repository root.');
