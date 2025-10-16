# tryhap-next (Next.js + Tailwind + Supabase)

A professional Next.js (App Router) starter for HAP with marketing pages, member/admin areas, bounties CRUD, and Supabase Auth (magic link).

## Quickstart
1) `cp .env.example .env.local` and fill `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY`.
2) `npm i` (or `pnpm i` / `yarn`), then `npm run dev`.
3) Run your Supabase SQL (tables + RLS).

## Deploy to Vercel
- Import repository on Vercel, add env vars, deploy.
- Attach `tryhap.com` in Vercel Domains and point Cloudflare CNAME to `cname.vercel-dns.com` (or DNS only).

## Notes
- Server components fetch public data with Supabase anon (RLS enforced).
- Admin writes are client-side under RLS. For privileged jobs, add API routes using `SUPABASE_SERVICE_ROLE` (server-only).
