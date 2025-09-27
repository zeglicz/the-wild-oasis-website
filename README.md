# <span align="center"><samp>The Wild Oasis Website</samp></span>

Customer-facing website for The Wild Oasis boutique hotel. Allows guests to explore the hotel, view cabins, create profiles, and make reservations. Uses the same Supabase database and API as the internal staff application in my repo `the-wild-oasis`, ensuring data consistency between the staff app and the website.

This project is based on [_The Ultimate React Course 2025: React, Next.js, Redux & More_](https://www.udemy.com/course/the-ultimate-react-course/) by Jonas Schmedtmann. Educational repository - not intended for production use.

## Features

- Guest-facing pages: Home, About, Cabin Overview, Cabin Detail
- Cabin filtering by maximum guest capacity
- Cabin reservations without online payments (unconfirmed until arrival)
- Guest profile management
- Viewing, updating, and deleting reservations
- Guest authentication and account management

## Tech Stack

- **Next.js 14** – routing, SSR, and server-side data fetching
- **TailwindCSS** – styling
- **Context API** – global UI state management
- **Supabase** – database, authentication, storage
- **React Hook Form** – form handling

## Pages

- `/` – homepage
- `/about` – hotel info
- `/cabins` – cabin overview and filtering
- `/cabins/:id` – individual cabin detail and reservation
- `/login` – guest login/signup
- `/account/reservations` – guest dashboard for viewing, editing, and deleting reservations
- `/account/profile` – guest profile management

## Project structure

```bash
public/                # Static assets (images, logos)
app/
├─ _components/        # Reusable UI components, opted out of Next.js routing
├─ _lib/               # Helper functions, API calls (e.g., Supabase)
├─ _styles/            # Global styles, Tailwind CSS configuration
├─ api/                # API route handlers
├─ about/              # About page segment
├─ account/            # Guest account area
│  ├─ reservations/    # User reservations management
│  └─ profile/         # User profile management
├─ cabins/             # Cabins listing and detail pages
│  ├─ :id/             # Dynamic route for individual cabin
└─ login/              # Guest login and signup page
```

## Installation

```bash
# 1. Clone
git clone https://github.com/zeglicz/the-wild-oasis-website.git
cd the-wild-oasis-website

# 2. Install dependencies
npm install

# 3. Env
cp .env.example .env   # or create .env and fill values

# 4. Dev
npm run dev

# 5. Build / Preview
npm run build
npm run preview
```
