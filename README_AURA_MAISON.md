# Aura Maison - Premium Planters Catalog

A modern, catalog-style website for Aura Maison, a company that designs and manufactures premium planters.

## 🌿 About

Aura Maison showcases premium planters that blend nature, design, and balance. This website allows users to browse products by space type or collection, view color variants and sizes, and make enquiries about products.

## 🛠 Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: JavaScript
- **Styling**: Tailwind CSS with CSS Variables
- **State Management**: React Local State

## 📁 Project Structure

```
/app
  /page.js                          # Home page
  /about/page.js                    # About page
  /contact/page.js                  # Contact/Enquiry page
  /shop
    /indoor/page.js                 # Indoor planters
    /dual-space/page.js             # Dual space planters
  /collections
    /page.js                        # Collections list
    /[slug]/page.js                 # Individual collection
  /product
    /[slug]/page.js                 # Product detail page
  /layout.js                        # Root layout with Navbar & Footer
  /globals.css                      # CSS variables & global styles

/components
  Navbar.js                         # Navigation component
  Footer.js                         # Footer component
  ProductCard.js                    # Product card display
  ColorSwatch.js                    # Color variant display
  CollectionCard.js                 # Collection card display
  EnquiryForm.js                    # Contact form

/data
  products.js                       # Product & collection data
```

## 🎨 Design System

All colors are defined as CSS variables in `globals.css`:

- **Brand Colors**: Primary, accent, and surface colors
- **Product Colors**: Sand beige, charcoal, terracotta, sage green, etc.
- **Text Colors**: Main, secondary, muted
- **Semantic Colors**: Success, error, warning

Components use Tailwind classes with CSS variables (e.g., `bg-[var(--primary)]`)

## 🚀 Getting Started

1. Install dependencies:

```bash
npm install
```

2. Run the development server:

```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📄 Pages

### Home (/)

- Hero section
- Brand philosophy
- Shop by Space navigation
- Featured collections
- Call-to-action

### About (/about)

- Brand story
- Craftsmanship, materials, and design philosophy
- Vision statement

### Shop by Space

- `/shop/indoor` - Indoor planters
- `/shop/dual-space` - Dual space planters

### Collections

- `/collections` - All collections
- `/collections/[slug]` - Individual collection products

### Product Detail (/product/[slug])

- Product images
- Description
- Color variants (swatches)
- Available sizes
- Enquire button

### Contact (/contact)

- Contact information
- Enquiry form
- Auto-fills product if coming from product page

## ✨ Features

- Fully responsive design
- Mobile-first approach
- Clean, minimal UI with premium aesthetic
- Color variant selection
- Product filtering by space and collection
- Pre-filled enquiry forms from product pages
- Static data (no backend required)

## 🎯 Out of Scope

- E-commerce checkout
- Shopping cart
- User authentication
- Payment processing
- Database integration
- Admin panel

## 📝 Product Data

Products are stored in `/data/products.js` with the following structure:

```javascript
{
  id: "unique-id",
  name: "Product Name",
  slug: "product-name",
  description: "Description",
  category: "indoor" | "dual-space",
  collections: ["modern", "earthy"],
  images: ["/images/product.jpg"],
  colors: [
    { name: "Sand Beige", cssVar: "--sand-beige" }
  ],
  sizes: ["Small – 8 inch", "Medium – 12 inch"]
}
```

## 🎨 Styling Guidelines

- All colors use CSS variables
- No hard-coded colors in components
- Premium, minimal, earthy aesthetic
- Clean spacing and subtle hover states
- No flashy animations

---

Built with ❤️ for Aura Maison
