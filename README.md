# CareConnect - On Demand Companion Care Platform

> A trust first marketplace connecting patients with verified companions for caregiving, medicine pickup, and mobility support built with safety, transparency, and accountability at its core.

---

## 🩺 The Problem

Millions of patients — elderly, post-surgery, chronically ill, or simply living far from family — need someone reliable to **sit with them, pick up medicine, or get them safely to an appointment**. Existing options are either informal (risky, unverified) or full home care agencies (expensive, slow to book). There's no trusted, on demand middle ground.

**CareLink** is that middle ground: a marketplace where patients can book a **verified Companion** for a fixed window of time, with every interaction payments, medicine handling, and contact designed around safety and accountability rather than left to chance.

---

## ✨ Core Features

| Feature                                      | Why it matters                                                                                                                                                                         |
| -------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 🧑‍🤝‍🧑 **Verified Companion Marketplace**        | Every Companion goes through ID verification and background review before going live no anonymous strangers.                                                                           |
| 💊 **Prescription-Verified Medicine Pickup** | Patients upload a prescription photo; Companions purchase and upload a receipt; patients confirm delivery. Both sides leave a paper trail.                                             |
| 💰 **Escrow-Based Payments**                 | Money is held in escrow until a session is verifiably complete protecting both the patient's money and the Companion's earnings.                                                       |
| 🔐 **Admin-Mediated Contact**                | Patients and Companions never exchange phone numbers directly. Every booking is reviewed and coordinated by a human admin layer, closing off harassment and off-platform payment risk. |
| 📍 **Live Location Tracking**                | Real time location sharing during active sessions, with an SOS escalation path straight to admin/emergency response.                                                                   |
| 🚗 **Caregiving & Pick-and-Drop**            | Beyond companionship hands-on caregiving support and safe patient transport, each with its own verification tier (certifications, driving license, insurance).                         |
| ⭐ **Ratings & Strikes System**              | Two-way accountability. Repeated no shows, mismatched receipts, or safety complaints are tracked and escalated.                                                                        |

---

## 🏗️ Architecture

```
┌─────────────────┐        ┌──────────────────┐        ┌──────────────────┐
│   Patient App    │  ──▶   │   Next.js API      │  ──▶  │   MongoDB Atlas    │
│  (booking, pay)  │        │   (App Router)      │        │  (via Prisma ORM)  │
└─────────────────┘        └──────────────────┘        └──────────────────┘
                                     │
                                     ▼
                          ┌──────────────────┐
                          │   Admin Dashboard  │
                          │ (dispatch, relay,   │
                          │  SOS, disputes)      │
                          └──────────────────┘
                                     │
                                     ▼
                          ┌──────────────────┐
                          │  Companion App      │
                          │ (jobs, check-in,     │
                          │  live location)       │
                          └──────────────────┘
```

- **Frontend & Backend**: Unified in [Next.js](https://nextjs.org/) using the App Router — Server Components for data-heavy views, API routes for mutations and webhooks.
- **Database**: [MongoDB](https://www.mongodb.com/) accessed through [Prisma ORM](https://www.prisma.io/), giving type-safe queries and a single schema source of truth across the whole app.
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) for a fast, consistent, utility-first design system.
- **Hosting**: Deployed on [Vercel](https://vercel.com/) with automatic preview deployments on every pull request.

---

## 🧠 Design Decisions Worth Knowing About

This project isn't just CRUD it's a domain with real safety and financial stakes, and the schema/flow reflect that:

- **Escrow-first payments.** Money never moves directly patient → Companion. Every payment is tracked as line items (`COMPANION_TIME`, `MEDICINE_PLATFORM_PORTION`, `MEDICINE_CASH_PORTION`, `DISPATCH_FEE`, `REFUND`) so partial refunds, split payments, and disputes stay auditable rather than being one opaque "amount paid" field.
- **Split payment logic for medicine over a cost threshold** a hybrid on platform + cash on delivery model that only finalizes once the real pharmacy receipt is known, not just the patient's upfront estimate.
- **No direct patient–Companion contact.** All communication is relayed through an admin layer, with an explicit SOS path that bypasses the relay for emergencies a deliberate tradeoff between coordination speed and safety.
- **Tiered Companion verification.** Basic companionship, caregiving (requires certification), and driving/transport (requires license + insurance) are modeled as separate trust tiers, not a single flat "verified" flag.

_(Full product spec, user stories, and sprint plan available in [`/docs`](./docs) — this was designed as a real product before a single line of code was written.)_

## 🗺️ Roadmap

- [x] Product spec, user stories, sprint plan
- [x] Prisma data model
- [] Authentication with better auth
- [ ] Patient onboarding & booking flow
- [ ] Companion onboarding & verification pipeline
- [ ] Admin dispatch dashboard
- [ ] Escrow payment integration
- [ ] Live location + SOS
- [ ] Pilot launch (single city)

---

## 🤝 About This Project

This was built end to end as a solo product, from problem definition, edge case mapping (payment fraud, medical liability, safeguarding), and a written product spec, through to user stories, sprint planning, and implementation. I treated it like a real product with real regulatory and safety constraints, not a tutorial clone.

**I'm looking for opportunities as a [Full Stack / Frontend / Your Role Here] developer.** If this kind of product thinking balancing UX, safety, and technical tradeoffs is useful on your team, I'd love to talk.

📧 [EMAIL_ADDRESS] · 🔗 [LinkedIn](https://linkedin.com/in/your-profile) · 🌐 [Portfolio](https://yourportfolio.com)

---

## 📄 License

MIT — see [LICENSE](./LICENSE) for details.
