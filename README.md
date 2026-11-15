# Market My Market

Native Next.js modernization of the Market My Market homepage. The build preserves the original agency content, palette, typography direction, and downloaded source imagery while adding responsive layout, accessible controls, and restrained Framer Motion interactions.

Live deployment: [marketmymarket.vercel.app](https://marketmymarket.vercel.app/)

Source reference: [marketmymarket.com](https://www.marketmymarket.com/)

## Stack

- Next.js 16 App Router with React 19
- Strict TypeScript
- Framer Motion for navigation dropdowns, cards, CTAs, FAQ, and carousel controls
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
    Nav --> Dropdown[Animated desktop dropdown]
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

## Engineering overview

The design is intentionally split between stable server composition and focused client islands. Only components that need state or motion opt into the client boundary.

```mermaid
flowchart TD
    Browser[Browser] --> Route[Next.js App Router]
    Route --> Metadata[Static metadata and Open Graph]
    Route --> Composition[Server page composition]
    Composition --> Layout[Header, utility bar, footer]
    Composition --> ContentSections[Server-safe content sections]
    Composition --> ClientIslands[Client interaction islands]
    ClientIslands --> NavState[Dropdown and mobile menu state]
    ClientIslands --> ReviewState[Testimonial index state]
    ClientIslands --> FAQState[FAQ open-row state]
    ClientIslands --> MotionConfig[Framer Motion reduced-motion config]
    ContentSections --> TypedContent[Typed content models]
    ClientIslands --> TypedContent
    TypedContent --> LocalAssets[Local public image assets]
```

## Interaction lifecycle

```mermaid
sequenceDiagram
    participant User
    participant Header
    participant Motion
    participant Section
    participant Destination

    User->>Header: Hover or focus a nav group
    Header->>Motion: Animate dropdown entrance
    Motion-->>User: Reveal grouped navigation
    User->>Section: Select CTA or card
    Section->>Motion: Apply scale, lift, or image transition
    Section->>Destination: Navigate to local anchor or mailto action
    User->>Section: Open FAQ or change testimonial
    Section-->>User: Update local client state without navigation
```

## Delivery gates

```mermaid
flowchart LR
    Edit[Edit typed source] --> Lint[npm run lint]
    Lint --> Typecheck[npm run typecheck]
    Typecheck --> Build[npm run build]
    Build --> Audit[Audit native source for embedded page and proxy remnants]
    Audit --> Commit[GitHub main]
    Commit --> Deploy[Vercel production]
    Deploy --> Smoke[Browser smoke check]
```

## Architecture decisions

| Decision | Rationale |
| --- | --- |
| Native App Router | Removes the legacy WordPress delivery layer and keeps the page deployable as a real Next.js application |
| Typed content models | Separates editorial updates from layout code and makes repeated cards predictable |
| Client islands | Keeps stateful interactions focused instead of turning the whole page into one client component |
| Framer Motion | Adds tactile feedback to navigation and CTAs without adding a heavy 3D runtime |
| Local assets | Keeps visual parity stable and removes dependence on remote source markup |
| No WebGPU dependency | The page benefits from compositing-friendly transforms, not a 3D scene or shader pipeline |

## Handoff checklist

- Native `src/app` App Router structure
- Organized `layout`, `sections`, `ui`, and `lib` directories
- Local source imagery with descriptive alt text
- Responsive desktop and mobile navigation
- Motion-enabled CTA, dropdown, card, FAQ, and testimonial interactions
- Metadata and Open Graph configuration
- Mermaid documentation for architecture and delivery
- Lint, strict TypeScript, and production build scripts
