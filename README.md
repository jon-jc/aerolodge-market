# AeroLodge: Next-Gen Rental Marketplace Platform

Welcome to AeroLodge, a cutting-edge, full-stack rental marketplace platform engineered with the latest web technologies. At the heart of AeroLodge is the Next.js 14 App Router, combined with React, Tailwind CSS, Prisma, MongoDB, and NextAuth. Designed for both rental hosts and guests, AeroLodge offers a comprehensive, intuitive user experience, empowering users to easily browse, book, and manage listings.

## Technologies Used

- **Next.js 14**: Utilizes the latest Next.js App Router for improved routing.
- **React**: Builds dynamic and responsive user interfaces.
- **Tailwind CSS**: Provides stylish design and responsive layouts.
- **Prisma**: Manages database interactions.
- **MongoDB**: Stores and retrieves data efficiently.
- **NextAuth**: Secures the application with multiple authentication methods.

## Core Features

- **Responsive and Interactive UI**: Tailwind CSS ensures that AeroLodge is fully responsive and visually appealing, complemented by dynamic animations and effects for a smooth user experience.
- **Comprehensive Authentication System**: Offers multiple sign-in options, including credentials, Google, and GitHub, thanks to NextAuth.
- **Advanced Property Management**: Enables hosts to create, manage, and delete listings, complete with dynamic pricing calculation.
- **Robust Booking and Reservation System**: Provides features for booking accommodations, guest reservation cancellation, and host management functionalities.
- **Advanced Search and Filters**: Includes an advanced algorithm allowing users to search properties by category, date range, location, and more.
- **Favorites System**: Allows users to save and easily access their favorite listings.
- **Efficient Image Handling**: Integrates Cloudinary CDN for streamlined image uploads and management.
- **Client and Server-Side Data Handling**: Features client-side form validation with react-hook-form and server-side error management with react-toast.
- **Seamless User Experience**: Implements shareable URL filters and a comprehensive system for page states including loading and empty states.
- **Direct Server Data Fetching**: Showcases data fetching directly from the database in server React components for enhanced performance and simpler backend architecture.

## Getting Started

To explore AeroLodge:
### Prerequisites

**Node version 14.x**

### Cloning the repository

```shell
git clone 
```

### Install packages

```shell
npm i https://github.com/jon-jc/aerolodge-market.git
```

### Setup .env file


```js
DATABASE_URL=
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
GITHUB_ID=
GITHUB_SECRET=
NEXTAUTH_SECRET=
```

### Setup Prisma

```shell
npx prisma db push

```

### Start the app

```shell
npm run dev
```
