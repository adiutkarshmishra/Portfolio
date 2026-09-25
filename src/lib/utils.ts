export { cn } from "cn"

// Prefixes a root-relative public asset path with Vite's base path, so
// assets resolve correctly whether the site is served from the domain
// root (Netlify) or a subpath (GitHub Pages preview).
export function withBase(path: string) {
  return import.meta.env.BASE_URL + path.replace(/^\//, '')
}
