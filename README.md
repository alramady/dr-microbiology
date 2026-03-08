# Dr. Microbiology - Professional Academic Website

A professional personal website for a microbiology specialist doctor with a full content management system (CMS) and admin dashboard.

## Features

### Public Website
- Homepage with hero, research areas, statistics
- About / CV page with education, experience, awards
- Research projects page
- Scientific publications page
- Academic courses page
- News and events page
- Contact form

### Admin Dashboard (`/admin/login`)
- Statistics overview
- Publications, Research, Courses, Achievements, News, Gallery, Team CRUD
- Contact messages management
- Site settings editor
- Password management

## Tech Stack
- Next.js 15 (App Router) + TypeScript + Tailwind CSS v4
- JWT authentication (jose)
- JSON file-based storage (no database needed)

## Quick Start

```bash
pnpm install
pnpm dev
```

Admin: `/admin/login` — Username: `admin` / Password: `admin123`

## Deployment
Configured for Railway auto-deploy on push to `main`.
