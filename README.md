# Work Time Vis v2

This project is a fresh start built with [SvelteKit](https://kit.svelte.dev). It will use Tailwind CSS, Flowbite for UI components and Vitest for testing. The app lets you configure your hourly wage and working hours for each weekday.

## Getting Started

Install dependencies and start developing:

```bash
npm install
npm run dev
```

Run tests with:

```bash
npx vitest
```

## Container Usage

You can build and run the project in a Docker container:

```bash
docker build -t work-time-vis .
docker run -p 4173:4173 work-time-vis
```

The container runs `npm run preview` to serve the production build.
