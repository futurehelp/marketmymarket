# Market My Market — Homepage Migration

> A Next.js/Vercel migration of the Market My Market homepage, preserving the live site’s content, visual system, imagery, navigation, embeds, and interactions while moving the delivery layer away from WordPress.

Live site: [marketmymarket.vercel.app](https://marketmymarket.vercel.app/)

Source reference: [marketmymarket.com](https://www.marketmymarket.com/)

## What this project preserves

Market My Market positions itself as a transparent, results-driven digital marketing agency serving businesses across competitive verticals. The homepage communicates that through:

- Transparency, values, people, and results as the core promise
- Legal, dental, and medical marketing verticals
- Digital marketing, reporting, and development competencies
- Client testimonials and social proof
- Core values and leadership perspective
- Featured media, client logos, podcast content, and editorial resources
- A direct “Let’s Talk” conversion path

## Homepage architecture

```mermaid
flowchart TD
    A[Homepage] --> B[Hero: Driven By Transparency, Values, People, Results]
    B --> C[Agency positioning]
    C --> D[Who We Work With]
    D --> D1[Legal Marketing]
    D --> D2[Dental Marketing]
    D --> D3[Medical Marketing]
    D --> E[Core Competencies]
    E --> E1[Digital Marketing]
    E --> E2[Reporting]
    E --> E3[Development]
    E --> F[Client Reviews]
    F --> G[Client Logos + Featured In]
    G --> H[Core Values]
    H --> I[Thought Leadership]
    I --> J[Legal Mastermind Podcast]
    J --> K[Blogs and Resources]
    K --> L[Let's Talk CTA]
```

## Service map

```mermaid
mindmap
  root((Market My Market))
    Legal marketing
      SEO strategy
      Lead generation
      Content and visibility
    Dental marketing
      Patient acquisition
      Sustainable growth
      Local search
    Medical marketing
      Practice growth
      Qualified traffic
      Booking conversion
    Digital marketing
      SEO
      Content creation
      Local optimization
    Reporting
      Transparent data
      Campaign updates
      Performance tracking
    Development
      Strategic guidance
      Industry networking
      Growth opportunities
```

## Delivery architecture

The public homepage is delivered from a Next.js shell. The `/original-home` route fetches the live reference page server-side and returns it through the project’s own origin, avoiding the source site’s frame restriction while preserving the rendered page experience. Original visual assets are also stored in `public/images` for the migration archive and future independent component work.

```mermaid
sequenceDiagram
    participant V as Visitor
    participant N as Next.js App
    participant P as /original-home Route
    participant W as Market My Market Source
    participant C as Browser Cache

    V->>N: Open marketmymarket.vercel.app
    N-->>V: Render same-origin homepage shell
    V->>P: Load homepage content
    P->>W: Fetch current homepage HTML
    W-->>P: Return HTML, CSS links, assets, embeds
    P-->>V: Serve source page through Next.js origin
    V->>C: Load images, styles, scripts, embeds
```

## Asset inventory

The local asset archive includes the extracted homepage imagery and brand materials:

- Site and mobile logos
- Hero and agency imagery
- Legal, dental, and medical marketing imagery
- Core value icons and background patterns
- Client logos and featured-in marks
- Testimonial portraits
- Podcast and editorial graphics
- Favicon assets

Assets live in [`public/images`](./public/images).

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Production build

```bash
npm run build
npm run start
```

## Deployment

The project is connected to GitHub and Vercel:

```mermaid
flowchart LR
    A[Local Next.js project] --> B[GitHub main branch]
    B --> C[Vercel build]
    C --> D[Production deployment]
    D --> E[marketmymarket.vercel.app]
```

## Notes for the next migration phase

The current implementation prioritizes visual parity and fast handoff. The next step toward a fully independent Next.js build would be to replace the source-page proxy with native components while keeping the same section order, content, asset references, and interaction behavior.

