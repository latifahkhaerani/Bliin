# My eCommerce App

A full-stack e-commerce web application built with Next.js, TypeScript, and MongoDB. The project implements core e-commerce features including authentication, product browsing, search, infinite scrolling, and wishlist management.

## Features

- **User Authentication** — Register and login functionality.
- **Product Listing** — Browse products with featured products and product lists.
- **Product Search** — Search products by name with debounce implementation.
- **Infinite Scroll** — Load additional products progressively while browsing.
- **Product Details** — View detailed information for individual products.
- **Wishlist** — Add products to wishlist and remove them from wishlist.
- **Responsive UI** — Responsive interface for different screen sizes.
- **Dynamic Meta Tags** — Product-specific meta information for detail pages.
- **Client & Server Rendering** — Implements CSR and SSR with Next.js.

## Tech Stack

- **Framework:** Next.js
- **Language:** TypeScript
- **Database:** MongoDB
- **Frontend:** React
- **Styling:** Tailwind CSS
- **Authentication:** Next.js Authentication
- **Rendering:** CSR & SSR

## Pages

- **Register** — User registration page.
- **Login** — User authentication page.
- **Home** — Promotional banner, e-commerce information, and featured products.
- **Products** — Product listing with search and infinite scroll.
- **Product Detail** — Detailed product information with wishlist functionality.
- **Wishlist** — List of saved products with remove functionality.

## Key Implementation

### Authentication

Implemented user registration and login functionality to provide authenticated access to user-specific features such as the wishlist.

### Product Management

The application provides product listing and detail pages with support for:

- Product search
- Featured products
- Product details
- Infinite scrolling
- Wishlist management

### Search

Product search is implemented based on product names with debounce functionality to reduce unnecessary requests while the user is typing.

### Infinite Scroll

The product listing uses infinite scroll to progressively load additional products instead of displaying all products at once.

### Wishlist

Users can:

- Add products to their wishlist
- View saved products
- Remove products from their wishlist

### Next.js Rendering

The project demonstrates both Client-Side Rendering (CSR) and Server-Side Rendering (SSR) using Next.js based on the requirements of each page and feature.

### Dynamic Meta Tags

Product detail pages include dynamic meta information based on the selected product.

## Project Highlights

- Full-stack Next.js application
- TypeScript development
- MongoDB integration
- User authentication
- Product search with debounce
- Infinite scroll
- Wishlist functionality
- CSR and SSR implementation
- Dynamic product meta tags
- Responsive e-commerce interface

## Project Links

- **Live Demo:** [<your-live-demo-url>](https://bliin.vercel.app/)

---

Built with Next.js, TypeScript, MongoDB, and React.
