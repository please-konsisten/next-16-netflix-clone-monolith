# Netflix Clone App (Full-Stack Monolith)

A responsive Netflix replica built using a monolithic architecture leveraging Next.js (App Router), Prisma, MongoDB, and NextAuth. The application is fully deployed and hosted on Vercel.

---

## Background & Project Motivation

This project was developed as a strategic pivot in my learning roadmap to maintain momentum and build consistency. 

Previously, I attempted to engineer a decoupled application by independently separating the backend and frontend services without structural tutorials, as seen in these repositories:
*   [express-ais-api](https://github.com) (Express.js Backend)
*   [react-19-ais-ui](https://github.com) (React 19 Frontend)

During development, the decoupled approach hit a technical roadblock. To resolve this and rebuild engineering momentum, I chose to return to full-stack fundamentals through a structured, high-quality guide. 

This implementation closely follows the project structure outlined by **Code With Antonio**:
*   *Reference Tutorial:* [Full Stack Netflix Clone in React, Tailwind CSS, Next.JS, Prisma, MongoDB, NextAuth & Vercel (2023)](https://youtube.com)

By successfully shipping this monolithic application, I aim to master tight integration patterns, server-side data fetching, and unified authentication before transitioning back into decoupled systems and microservices architectures.

---

## Tech Stack

*   **Framework:** Next.js (App Router)
*   **Database ORM:** Prisma
*   **Database:** MongoDB
*   **Authentication:** NextAuth.js (supporting Credentials and OAuth providers)
*   **Styling:** Tailwind CSS
*   **Deployment:** Vercel
*   **Containerization:** Docker (for environment standardization and local development)

---

## Key Features

*   Full-stack user authentication (Sign Up / Sign In) via NextAuth.
*   OAuth integration (Google and GitHub logins).
*   Responsive UI matching the Netflix design language.
*   Dynamic movie browsing and detailed preview modals.
*   Favorites system allowing users to bookmark titles.
*   State management optimized for server-side rendered layouts.


This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

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

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
