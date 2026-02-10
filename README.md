# Portfolio-shofiahmed
Personal portfolio site

## Getting Started

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Firebase (production – permanent URL)

This project is configured for the site **portfolio-kazi-shofi-ahmed**. Use **your own** Firebase project.

### 1. Create or choose a Firebase project

1. Open [Firebase Console](https://console.firebase.google.com)
2. **Create a project** (e.g. “Portfolio” or “portfolio-kazi-shofi”) or select an existing one
3. Note the **Project ID** (e.g. `my-portfolio-abc123`)

### 2. Link this folder to your project

In the project folder, run:

```bash
firebase use --add
```

Pick your project from the list and (if asked) give it an alias like `default`. This updates `.firebaserc` with your project ID.

### 3. Create the Hosting site (one-time)

1. In [Firebase Console](https://console.firebase.google.com) → **your project** → **Build** → **Hosting**
2. If Hosting isn’t set up, click **Get started** and finish the steps
3. Click **Add another site** and use site ID: **portfolio-kazi-shofi-ahmed** → Create

### 4. Deploy

```bash
npm run deploy
```

Your site will be at **https://portfolio-kazi-shofi-ahmed.web.app** (or your project’s domain). The URL is permanent.

**If you get “404 – Requested entity was not found”**  
The site **portfolio-kazi-shofi-ahmed** doesn’t exist yet in the project you’re using. Complete step 3 above, then run `npm run deploy` again.
