# amantanwar.dev

Personal portfolio — a static Next.js site hosted on Cloudflare Pages.

## Edit the content

**All text is in [`src/content.ts`](src/content.ts).** Search for `TODO` to find placeholders.

## Run locally

```bash
npm install
npm run dev        # http://localhost:3000
```

## Contact form

1. Get a free access key at https://web3forms.com (use your personal email).
2. Locally: copy `.env.example` to `.env.local` and paste the key.
3. On Cloudflare Pages: add `NEXT_PUBLIC_WEB3FORMS_KEY` as an environment variable.

## Deploy (Cloudflare Pages)

| Setting          | Value           |
| ---------------- | --------------- |
| Framework preset | Next.js (Static HTML Export) |
| Build command    | `npm run build` |
| Output directory | `out`           |
| Env variable     | `NEXT_PUBLIC_WEB3FORMS_KEY` |

Then **Custom domains → add `amantanwar.dev`**.

## Privacy checklist (before every deploy)

- No client names, account/container/property IDs, or real client screenshots.
- Don't add analytics tags from a work or business Google/GTM account.
- Quick check: `npm run build && grep -rniE "tagspecial|war ?room" out/` should print nothing.
