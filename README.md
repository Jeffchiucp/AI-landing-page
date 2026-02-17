# AI Landing Page

A modern AI SaaS landing page built with [Next.js](https://nextjs.org) and [Tailwind CSS](https://tailwindcss.com), designed with [v0.dev](https://v0.dev) and deployed on [Vercel](https://vercel.com).

[![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?style=for-the-badge&logo=vercel)](https://vercel.com/jeff-chius-projects/v0-ai-saa-s-landing-page)
[![Built with v0](https://img.shields.io/badge/Built%20with-v0.dev-black?style=for-the-badge)](https://v0.dev/chat/projects/SRVueY4lSTM)

## Features

- **Hero Section** — Eye-catching headline with a clear call-to-action
- **Features Overview** — Highlight key product capabilities with icons and descriptions
- **Pricing Plans** — Tiered pricing cards for different customer segments
- **Testimonials** — Social proof from satisfied customers
- **Call to Action** — Conversion-focused CTA sections throughout the page
- **Footer** — Navigation links, social media, and legal information
- **Fully Responsive** — Optimized for mobile, tablet, and desktop
- **Fast Performance** — Server-side rendering and optimized assets via Next.js

## Tech Stack

| Technology | Purpose |
|---|---|
| [Next.js](https://nextjs.org) | React framework with SSR and routing |
| [Tailwind CSS](https://tailwindcss.com) | Utility-first CSS styling |
| [v0.dev](https://v0.dev) | AI-powered UI generation and iteration |
| [Vercel](https://vercel.com) | Hosting and continuous deployment |

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org) 18+ installed
- [npm](https://www.npmjs.com), [yarn](https://yarnpkg.com), or [pnpm](https://pnpm.io)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/jeff-chiu/v0-ai-saa-s-landing-page.git
   cd v0-ai-saa-s-landing-page
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Environment Variables

Create a `.env.local` file in the root directory if your project requires any environment variables:

```bash
cp .env.example .env.local
```

## Project Structure

```
├── app/                # Next.js App Router pages and layouts
│   ├── layout.tsx      # Root layout
│   ├── page.tsx        # Home page
│   └── globals.css     # Global styles
├── components/         # Reusable UI components
│   ├── hero.tsx
│   ├── features.tsx
│   ├── pricing.tsx
│   ├── testimonials.tsx
│   ├── cta.tsx
│   └── footer.tsx
├── public/             # Static assets (images, icons)
├── tailwind.config.ts  # Tailwind CSS configuration
├── next.config.mjs     # Next.js configuration
└── package.json
```

## Development

This project is automatically synced with [v0.dev](https://v0.dev). Changes made in the v0 editor are pushed to this repository and deployed via Vercel.

- **Live site:** [vercel.com/jeff-chius-projects/v0-ai-saa-s-landing-page](https://vercel.com/jeff-chius-projects/v0-ai-saa-s-landing-page)
- **v0 project:** [v0.dev/chat/projects/SRVueY4lSTM](https://v0.dev/chat/projects/SRVueY4lSTM)

## Contributing

Contributions are welcome! To get started:

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature`
3. Commit your changes: `git commit -m "Add your feature"`
4. Push to the branch: `git push origin feature/your-feature`
5. Open a pull request

## License

This project is licensed under the [MIT License](LICENSE).
