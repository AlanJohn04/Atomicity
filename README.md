Atomity Optima: Infrastructure Intelligence

A high-performance, multi-level data exploration dashboard built to visualize complex infrastructure hierarchies. This project was built from the ground up to demonstrate modern CSS capabilities, fluid animations, and a "zero-library" approach to UI components.
 The Vision

Most dashboards feel static. I wanted to build something that feels like a high-tech instrument—tactile, responsive, and physically natural. The goal was to solve the "drill-down" problem: allowing users to explore deep data structures without losing their spatial orientation within the application.
🛠 Tech Stack

    Framework: Next.js 15 (App Router)

    Styling: Tailwind CSS v4 (Alpha/Edge) & Native CSS Variables

    State & Data: TanStack Query (React Query) for smart caching

    Motion: Framer Motion with custom Spring physics

    Icons: Hand-crafted SVGs (Zero external icon libs)

 Engineering Highlights
1. Zero-Library Component Architecture

Every single UI element—from the glowing metric bars to the breadcrumb navigation—was built from scratch using raw HTML and Tailwind. I avoided libraries like shadcn or MUI to ensure total control over the DOM structure and to keep the bundle size extremely lean.
2. Modern CSS Implementation

I leaned heavily into the latest CSS features to ensure the app is future-proof:

    Container Queries (@container): Instead of global media queries, the MetricBar components respond to the width of their parent container. This allows the dashboard to be dropped into a sidebar or a full-width section without breaking the layout.

    CSS Logical Properties: Used margin-inline and padding-block to handle spacing, ensuring the layout is ready for RTL (right-to-left) support out of the box.

    Parent-Aware Styling (:has()): I used the :has selector to create a "focus" mode; when you hover over a specific data row, the entire parent panel subtly shifts its border glow to highlight the active section.

3. Motion Design & Physics

Animations aren't just "eye candy"—they provide user feedback.

    Spring Physics: I moved away from "ease-in" transitions in favor of spring physics (stiffness:150, damping:20) to make the UI feel like it has actual mass.

    Spatial Transitions: The DrillStage component uses a blur-and-slide transition. This mimics a camera lens focusing, helping the user mentally "zoom" into the data.

4. Smart Data Handling

    Percentage-Relative Scaling: Unlike basic charts where 10% and 90% might look similar, I implemented a dynamic scaling logic. Each bar’s width is calculated relative to the maximum value in the current dataset, providing immediate visual contrast.

    Caching Strategy: Using TanStack Query, data is cached so that navigating back up the breadcrumb trail is instantaneous, providing a "local-first" feel even with remote data.

 How to Run It

    Clone & Install:
    Bash

    npm install
    npm install -D @tailwindcss/container-queries

    Launch Dev Server:
    Bash

    npm run dev

    Check for v4 Support: Ensure your environment supports Tailwind v4 (as defined in globals.css).

 Trade-offs & Thoughts

During development, I chose to use Tailwind v4's CSS-first configuration. While it's a departure from the traditional tailwind.config.ts, it allows for much tighter integration with native CSS variables, which made the "Design Token" requirement much easier to manage globally.
