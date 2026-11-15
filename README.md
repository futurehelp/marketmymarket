# Market My Market

Native Next.js modernization of the Market My Market homepage. The build preserves the original agency content, palette, typography direction, and downloaded source imagery while adding responsive layout, accessible controls, and restrained Framer Motion interactions.

Live deployment: [marketmymarket.vercel.app](https://marketmymarket.vercel.app/)

Source reference: [marketmymarket.com](https://www.marketmymarket.com/)

## Stack

- Next.js 16 App Router with React 19
- Strict TypeScript
- Framer Motion for navigation, cards, CTAs, FAQ, and carousel controls
- Lucide React for interface icons
- Local source imagery stored in `public/images`
- GitHub and Vercel deployment

## Project structure

```text
src/
├── app/
│   ├── globals.css       # Design system and responsive layout
│   ├── icon.png          # Favicon
│   ├── layout.tsx        # Metadata and motion provider
│   └── page.tsx          # Route entry point
├── components/
│   ├── layout/            # Utility bar, header, and footer
│   ├── sections/          # Primary, experience, and conversion sections
│   ├── ui/                # Arrow link and shared motion presets
│   ├── motion.tsx         # Reduced motion provider
│   └── site-page.tsx      # Shallow page composition
└── lib/
    └── site-content.ts    # Typed copy, links, cards, and asset paths
```

## Architecture

```mermaid
flowchart TD
    Route[src/app/page.tsx] --> Page[src/components/site-page.tsx]
    Page --> Layout[components/layout]
    Page --> Sections[components/sections]
    Page --> UI[components/ui]
    Page --> Content[src/lib/site-content.ts]
    Layout --> Header[SiteHeader]
    Layout --> Footer[SiteFooter]
    Layout --> Utility[TopLine]
    Sections --> Primary[Hero, intro, verticals, competencies]
    Sections --> Experience[Testimonials, values, podcast, resources, FAQ]
    Sections --> Conversion[Contact CTA]
    UI --> Motion[Shared Framer Motion presets]
    Content --> Primary
    Content --> Experience
    Motion --> Header
    Motion --> Sections
```

## Page flow

```mermaid
flowchart LR
    A[Utility bar] --> B[Sticky navigation]
    B --> C[Driven by what matters]
    C --> D[Agency positioning]
    D --> E[Industry verticals]
    E --> F[Core competencies]
    F --> G[Client proof]
    G --> H[Core values]
    H --> I[Legal Mastermind podcast]
    I --> J[Resources and articles]
    J --> K[FAQ]
    K --> L[Let's talk CTA]
    L --> M[Footer]
```

## Interaction map

```mermaid
flowchart TD
    Visitor[Visitor] --> Nav[Open navigation]
    Visitor --> Cards[Hover industry or article card]
    Visitor --> Reviews[Change testimonial]
    Visitor --> FAQ[Expand FAQ row]
    Visitor --> CTA[Use CTA]
    Nav --> Menu[Mobile menu state]
    Cards --> Lift[Spring lift and image zoom]
    Reviews --> ReviewState[Local review index]
    FAQ --> FAQState[Local open row state]
    CTA --> Contact[mailto contact path]
    Preference[Reduced motion preference] --> Config[MotionConfig]
    Config --> Lift
    Config --> Menu
    Config --> ReviewState
    Config --> FAQState
```

## Asset map

```mermaid
erDiagram
    PAGE ||--o{ VERTICAL : presents
    PAGE ||--o{ COMPETENCY : explains
    PAGE ||--o{ REVIEW : proves
    PAGE ||--o{ VALUE : guides
    PAGE ||--o{ ARTICLE : publishes
    VERTICAL }o--|| ASSET : uses
    COMPETENCY }o--|| ASSET : uses
    REVIEW }o--|| ASSET : uses
    VALUE }o--|| ASSET : uses
    ARTICLE }o--|| ASSET : uses
    ASSET {
        string path
        string altText
    }
```

The downloaded archive includes the original hero, pattern, vertical, competency, testimonial, value, podcast, logo, and editorial assets. They are referenced locally so the homepage does not depend on a remote source page.

## Scripts

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the local development server |
| `npm run build` | Create the optimized production build |
| `npm run start` | Serve the production build locally |
| `npm run lint` | Run ESLint checks |
| `npm run typecheck` | Run strict TypeScript checks |

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Quality checks

```bash
npm run lint
npm run typecheck
npm run build
```

## Deployment flow

```mermaid
gitGraph
    commit id: "Native Next.js foundation"
    commit id: "Download original Market My Market assets"
    commit id: "Split typed sections and motion UI"
    commit id: "Verify and deploy with Vercel"
```

The homepage is native Next.js. It does not embed the original page or proxy the original HTML.
