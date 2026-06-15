import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs) {
	return twMerge(clsx(inputs));
}

/** Public asset path that respects Vite base URL (e.g. /alogref/ on GitHub Pages). */
export function assetUrl(path) {
	const normalizedPath = path.replace(/^\//, '');
	return `${import.meta.env.BASE_URL}${normalizedPath}`;
}
