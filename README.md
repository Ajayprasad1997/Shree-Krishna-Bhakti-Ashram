# Shree Krishna Bhakti Ashram — Next.js multi-page demo

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000. Admin: http://localhost:3000/admin/login

Demo email: `admin@ashram.demo`  
Demo password: `Demo@12345`

## Included

Public pages: homepage (animated hero slider, 10 room cards, gallery and event previews), About the Ashram, Accommodation, Photo Gallery (categories and lightbox), Events & Activities, Contact Us and a shared booking enquiry modal. Inner pages and previews link to each other.

Admin: demo login, dashboard, homepage CMS, gallery manager, event manager, accommodation manager, booking enquiries, contact enquiries and contact settings.

## Important: demo only, not production

The login is client-side sessionStorage gating, **not secure authentication**. Do not use these credentials or this auth flow for real deployment. Data persists in **localStorage in the same browser only**, not a backend/database. Demo image uploads are stored as data URLs in localStorage and limited to 2MB per image; browser storage limits apply. Do not collect real visitor data until the backend is built and secured. Booking forms only submit enquiries, never confirm reservations. Placeholder photos, room descriptions, event descriptions and contact details must be verified with the Ashram.

For production, implement server-side sessions with httpOnly secure cookies, bcrypt-hashed credentials, protected Next.js route handlers, MySQL tables for all modules, Zod/server-side validation, CSRF/rate-limit controls, persistent object storage for image uploads with MIME/size verification and optimisation, backups, error handling and a deployment configuration. Keep secrets in server-only environment variables. Remove demo credentials and localStorage storage.

## Customisation

`src/lib/demo.js`: initial placeholder data. `src/components/Store.jsx`: shared demo persistence. `src/components/AdminPages.jsx`: admin editing interfaces. `src/components/Inner.jsx`: public inner pages. `src/app/globals.css`: site and admin styling.
