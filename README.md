# Seif Mohsen | Portfolio

A modern developer portfolio showcasing software engineering, AI, cybersecurity, and systems work.

[![Next.js](https://img.shields.io/badge/Next.js-16.2.6-black?logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7.3-3178C6?logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind](https://img.shields.io/badge/Tailwind-4.2-38B2AC?logo=tailwindcss)](https://tailwindcss.com/)
[![Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-000000?logo=vercel)](https://vercel.com/)

This repository contains the portfolio website for Seif Mohsen Ibrahim Abdelfattah, a computer engineering student and software engineer focused on AI, cybersecurity, full-stack development, and embedded systems.

## Overview

The portfolio is designed to present technical work clearly and professionally. It highlights:

- AI and machine learning projects
- Cybersecurity and threat-detection work
- Full-stack web projects
- Systems, embedded, and engineering fundamentals
- Selected academic and personal project experience

The site is built as a high-impact single-page portfolio using Next.js and Tailwind, with a dark, engineering-themed visual style and project data driven from a central source file.

## Featured sections

- Hero and profile summary
- Technology stack overview
- About section with technical focus areas
- Project showcase with links to GitHub repositories
- Experience and leadership highlights
- Contact form using EmailJS

## Project structure

```text
.
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── about-section.tsx
│   ├── contact-section.tsx
│   ├── experience-section.tsx
│   ├── hero-section.tsx
│   ├── navigation.tsx
│   ├── projects-section.tsx
│   ├── tech-stack.tsx
│   └── ui/
├── lib/
│   └── portfolio-data.ts
├── public/
│   ├── cv/
│   └── optimized/
├── .env.example
├── .gitignore
├── EMAILJS_SETUP.md
├── EMAILJS_TEMPLATE_SETUP.md
├── components.json
├── eslint.config.mjs
├── next.config.mjs
├── package.json
├── postcss.config.mjs
├── tsconfig.json
└── README.md
```

## Technologies used

| Area | Stack |
| --- | --- |
| Framework | Next.js 16 |
| UI | React, Tailwind CSS |
| Motion | Framer Motion |
| Forms | EmailJS |
| Language | TypeScript |
| Styling | Tailwind + custom CSS |
| Hosting | Vercel |

## Getting started

### Prerequisites

- Node.js 20+
- npm

### Install dependencies

```bash
npm install
```

### Configure environment variables

Copy the example file and fill in your EmailJS values:

```bash
cp .env.example .env.local
```

Required values:

- `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY`
- `NEXT_PUBLIC_EMAILJS_SERVICE_ID`
- `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID`

See `EMAILJS_SETUP.md` for a full guide.

### Run locally

```bash
npm run dev
```

Then open http://localhost:3000.

## Production build

```bash
npm run build
```

## Validation

```bash
npm run lint
npm run build
```

## Contact form configuration

The contact section uses EmailJS. The public values are intentionally placed in environment variables so the form can send messages without hardcoding private credentials in the source.

## Security note

- Do not commit real EmailJS keys or personal contact details to version control.
- Keep `.env.local` out of source control.
- The app is intended for public portfolio use, so configuration should remain minimal and safe.

## Project status

This portfolio is intended to serve as a public-facing engineering showcase and is suitable for internship, software engineering, and AI-focused portfolio reviews.
