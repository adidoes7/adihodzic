export type CaseStudy = {
  slug: string;
  title: string;
  oneLiner: string;
  company: string;
  role: string;
  timeline: string;
  tags: string[];
  accent: string;
  gradient: [string, string];
  image?: string;
  confidentialityNote?: string;
  problem: string;
  context: {
    label: string;
    value: string;
  }[];
  process: {
    title: string;
    body: string;
  }[];
  decisions: {
    title: string;
    body: string;
  }[];
  outcome: {
    metric: string;
    label: string;
  }[];
  outcomeNote: string;
  reflection: string;
  screenshots?: {
    src: string;
    alt: string;
    caption?: string;
    mobile?: boolean;
  }[];
};

// Placeholder content - swap for your real projects.
// Structure follows: problem → constraints → process → decisions → outcome → reflection.
export const caseStudies: CaseStudy[] = [
  {
    slug: "wealth-management-platform",
    title: "Rebuilding the core workflow of a wealth management platform",
    oneLiner:
      "As lead product designer for over three years, I reworked the Checklist advisors relied on throughout every client profile - not a one-time setup step, but the hub they returned to again and again - then built out the design system, recommendation tools, and analytics dashboards on top of it.",
    company: "US Wealth Management Firm",
    role: "Lead Product Designer",
    timeline: "May 2023 - Jul 2026",
    tags: ["Wealth management", "Design systems", "AI-accelerated"],
    accent: "#1f6fd1",
    gradient: ["#0b2545", "#5b9ce6"],
    image: "/images/case-studies/wealth-platform/overview.jpg",
    problem:
      "When I joined, at the center of that workflow was the Checklist - the hub advisors returned to again and again as they worked a client profile, not a one-time setup step. It was supposed to be the core of the app, but it wasn't working. It asked for too much at once, the process wasn't fluid, and advisors kept getting stuck on things like document processing and statement extraction every time they came back to it. There was also no design system to speak of - just a set of fonts and colors the client liked - so nothing about the interface stayed consistent as new features got added. Over the next three-plus years, working directly with large advisory firms serving high-net-worth clients, we rebuilt the Checklist experience from the ground up, then used that same foundation to build out the platform's recommendation tools, analytics dashboards, and reporting, tackling specific parts as customer feedback came in and new features got scoped.",
    context: [
      { label: "Team", value: "Embedded design partner to the COO, CTO, and product managers" },
      { label: "Scope", value: "Checklist, design system, portfolio recommendations, analytics dashboards, reporting" },
      { label: "Constraint", value: "Every workflow had to stay accurate for regulated, real-money tax and portfolio calculations" },
      { label: "Duration", value: "May 2023 - Jul 2026, continuous iteration based on customer feedback" },
    ],
    process: [
      {
        title: "Rebuilt the Checklist around granular, contextual steps instead of one dense page",
        body: "The Checklist wasn't something advisors finished once and moved past - it was the hub they kept returning to throughout a client profile, and every time they came back it asked for too much at once. I broke it apart into smaller, contextual steps that surface right where an advisor already is, so they always see one clear next action instead of a dense page and dead ends like a document that wasn't parsing correctly.",
      },
      {
        title: "Built the platform's first design system, then made it legible to AI agents",
        body: "There was no design system when I started - just a set of fonts and colors the client liked. I built a full Figma system covering typography, color, tokens, spacing, and a component and icon library, then wrote a Design.md file distilling it into something AI coding agents could reference directly, since AI-assisted development was already becoming part of how the team shipped.",
      },
      {
        title: "Used AI to prototype faster across every new feature, not just the big ones",
        body: "I used to build Figma prototypes the old way, wiring up interactive components and variants by hand. Once tools like Figma Make, Replit, and Lovable became part of my process, prototyping got roughly ten times faster - which meant more directions in front of stakeholders before committing to one, instead of betting early on a single approach.",
      },
    ],
    decisions: [
      {
        title: "Convinced leadership the Checklist was the product, not a gate in front of it",
        body: "For a while, the Checklist was treated as a formality advisors passed through once on their way to the 'real' product elsewhere. I argued the opposite - advisors were going to live in this hub throughout a client's entire lifecycle, so a broken experience there meant a broken experience everywhere, every time they came back. Getting the COO and CTO to rework the core concept around that idea was the single biggest unlock of the whole engagement; once that shift happened, everything downstream went easier.",
      },
      {
        title: "Pushed back on resizable, overlapping dashboard widgets",
        body: "Stakeholders wanted the Profile Dashboard to support freely resizable, overlapping widgets so advisors could customize their view. I pushed back - that flexibility would have made the dashboard look inconsistent and cluttered for most advisors, for the benefit of a small number of power users. We kept a structured, opinionated layout instead, prioritizing a dashboard that looked right by default over one that was maximally configurable.",
      },
    ],
    outcome: [
      { metric: "Contextual, not dense", label: "the Checklist redesigned around small, always-forward steps advisors could pick up anytime, instead of one dense page" },
      { metric: "Design system, from zero", label: "full Figma system - typography, tokens, components, icons - plus a Design.md spec for AI agents" },
      { metric: "~10x faster prototyping", label: "AI-assisted tools cut prototyping time enough to explore more directions before committing" },
    ],
    outcomeNote:
      "Described qualitatively - exact adoption and efficiency figures weren't tracked in a form precise enough to cite here.",
    reflection:
      "Three years with the same stakeholders means you win some arguments, lose others, and a lot end up as compromises - that's normal. What actually mattered was picking the right fight. The checklist redesign was the one decision I pushed hardest for, because I could see it was the thing blocking everything else, even though it wasn't the most visually interesting problem on the table. Most of what I'd do differently next time is really just a version of: find that leverage point earlier, and spend less energy on the arguments that don't move the whole product.",
    confidentialityNote:
      "This project is under NDA - the company name and product branding have been withheld, and all screens shown have had logos removed.",
    screenshots: [
      {
        src: "/images/case-studies/wealth-platform/checklist.jpg",
        alt: "The original inherited Checklist, broken into Investment Data, Analysis, and Proposal steps, with product branding blurred",
        caption: "The Checklist I inherited - already broken into steps, but still asking for too much at once every time advisors came back to it, with dead ends like stalled statement extraction.",
      },
      {
        src: "/images/case-studies/wealth-platform/profile-empty.jpg",
        alt: "Redesigned empty-state Profile Dashboard showing contextual Next Steps prompts advisors can act on wherever they already are, with product branding blurred",
        caption: "The reworked approach - instead of one dense Checklist page, the relevant next step surfaces as a contextual prompt right on the dashboard, wherever the advisor already is.",
      },
      {
        src: "/images/case-studies/wealth-platform/overview.jpg",
        alt: "Profile Dashboard showing the most important parts of a client's profile - portfolio overview, risk tolerance, fee report, and current allocation, with product branding blurred",
        caption: "The Profile Dashboard once data is in - fitting everything advisors needed into one structured view, without the overlapping, freely-resizable widgets stakeholders originally wanted.",
      },
      {
        src: "/images/case-studies/wealth-platform/recommendation.jpg",
        alt: "Portfolio Recommendation Creator mapping current accounts into proposed recommendation accounts via drag and drop, with product branding blurred",
        caption: "The Portfolio Recommendation Creator - drag accounts, securities, or specific tax lots between current and recommended, splitting or transferring amounts with calculations updating live.",
      },
      {
        src: "/images/case-studies/wealth-platform/tax-transition.jpg",
        alt: "Tax transition model showing lot-level trade values and computed tax costs against advisor-set constraints, with product branding blurred",
        caption: "The tax transition model inside the Recommendation Creator - real constraints in, per-trade tax cost out, at the tax-lot level.",
      },
    ],
  },
  {
    slug: "iaea-safeguards-platform",
    title: "Designing the analytics platform behind global nuclear safeguards verification",
    oneLiner:
      "As lead UX/UI designer, I designed the IAEA's sample evaluation platform end-to-end - dashboards and data tracking, a query builder and plotting toolkit for deep analysis, and a portable field app for collecting samples - replacing a decades-old, spreadsheet-style interface, almost entirely without direct access to real users or real data.",
    company: "IAEA (International Atomic Energy Agency)",
    role: "Lead UX/UI Designer",
    timeline: "Sep 2022 - Apr 2023 · 8 months",
    tags: ["Scientific software", "Data visualization", "Regulated/high-stakes"],
    accent: "#0e7490",
    gradient: ["#083344", "#67e8f9"],
    image: "/images/case-studies/iaea-safeguards/data-tracking-full.jpg",
    problem:
      "Before this project, the platform looked like software from the 1990s - dense grids of cells and numbers, no real visualization, and none of the capability scientists actually needed: no query builder, no plotting tools, no way to bring samples collected in the field into the system directly. This platform is used to detect and locate microscopic nuclear particles in environmental swipe samples, verifying state compliance with non-proliferation treaties - work with real geopolitical weight if a result gets missed or misread. I designed the replacement from the ground up. The added constraint: this was sensitive enough that I never had direct access to the scientists who'd use it, or to real sample data.",
    context: [
      { label: "Team", value: "Me, our project manager (the only one cleared for IAEA HQ access), and developers" },
      { label: "Scope", value: "Dashboards & data tracking, a data constructor with query builder and plotting, and N Portal, a portable field app" },
      { label: "Constraint", value: "No direct access to SMEs or real data - requirements came through our PM" },
      { label: "Duration", value: "8 months, Sep 2022 - Apr 2023" },
    ],
    process: [
      {
        title: "Modernized dashboards and data tracking before touching the specialized tools",
        body: "The existing system looked like it hadn't changed since the 90s - dense cells and numbers, no visualization. I started with the dashboards and data tracking screens scientists used most often, since that's where the daily value was, before moving on to the more specialized, lower-frequency tools.",
      },
      {
        title: "Built the data constructor, query builder, and plotting tools from nothing",
        body: "None of this existed before: a way to construct custom data views, query the underlying sample data directly, or plot results for analysis - including SEM (Scanning Electron Microscopy) data used for particle screening, morphological and elemental analysis, and selecting targets for secondary analysis. I designed these as one connected set - build a query, see it as data, see it as a plot - instead of three disconnected tools bolted together.",
      },
      {
        title: "Designed N Portal as a portable, field-ready app, not a shrunk desktop screen",
        body: "N Portal needed to work for someone adding samples on-site, not at a desk. I designed it as its own portable experience built around the actual field-collection workflow, instead of just squeezing the desktop data-entry screens onto a smaller device.",
      },
    ],
    decisions: [
      {
        title: "Designed for cross-functional context in a dense, specialized interface",
        body: "Analysts needed to see how a result connected to related samples, prior findings, and reference data - not just the one record in front of them. I designed the review and analysis screens to surface that context directly, instead of leaving analysts to hold it all in their head across separate screens.",
      },
      {
        title: "Automated the handoffs instead of just digitizing them",
        body: "Much of the old process was slow not because individual steps were hard, but because handing data from one stage to the next was manual and insecure. I designed the workflow to move data between stages automatically and securely, instead of just putting a nicer interface on the same manual handoffs.",
      },
    ],
    outcome: [
      { metric: "1 Integrated Platform", label: "consolidated previously fragmented scientific workflows" },
      { metric: "489 Product Screens", label: "designed across desktop, analytical, reporting, and field workflows" },
      { metric: "Full Workflow Traceability", label: "maintained auditability across data collection, analysis, and reporting" },
    ],
    outcomeNote:
      "Figures are drawn from a public case study Rokolabs (the agency I worked through on this engagement) has since published.",
    reflection:
      "I never sat with the scientists who'd actually use this, and for a while that felt like a gap I should be compensating for. It wasn't. Our project manager's daily, firsthand knowledge of how IAEA HQ actually worked was more reliable than a handful of remote user interviews would have been anyway. The real lesson was trusting that proxy relationship fully, instead of treating it as a lesser substitute for research I was never going to get.",
    screenshots: [
      {
        src: "/images/case-studies/iaea-safeguards/before-after.jpg",
        alt: "Side-by-side comparison of the legacy 1990s-style database interface and the redesigned data upload and validation screen",
        caption: "Before and after - the legacy database interface from 2015, next to the redesigned data upload and validation screen.",
      },
      {
        src: "/images/case-studies/iaea-safeguards/data-tracking-full.jpg",
        alt: "Data Tracking dashboard showing evaluation cycle times, weekly analytical requests, and completion metrics, with logo blurred",
        caption: "The Data Tracking dashboard (logo blurred) - performance metrics, cycle times, and completion tracking in one view.",
      },
      {
        src: "/images/case-studies/iaea-safeguards/query-builder.jpg",
        alt: "Query Builder screen showing filterable sample and series data fields, with logo blurred",
        caption: "The Query Builder - one of the tools built from nothing, letting analysts construct their own filtered views into the underlying sample data.",
      },
      {
        src: "/images/case-studies/iaea-safeguards/plotting.jpg",
        alt: "Plotting tool showing a particle analysis scatter chart with reference lines and grouped data series, with logo blurred",
        caption: "The plotting tool - built to sit alongside the Query Builder, turning a filtered dataset directly into an analyzable chart.",
      },
      {
        src: "/images/case-studies/iaea-safeguards/n-portal.jpg",
        alt: "N Portal data uploading screen for adding field-collected samples, with logo blurred",
        caption: "N Portal - the portable field app for uploading samples on-site, designed around its own workflow instead of a shrunk desktop screen.",
      },
    ],
  },
  {
    slug: "energy-field-monitoring-platform",
    title: "Redesigning a data-heavy fluid monitoring platform for mobile",
    oneLiner:
      "As product designer, I led the mobile redesign of a real-time fluid monitoring platform for oil & gas operations - simplifying data-heavy desktop screens, thick with filters and options, into a focused experience engineers could actually use on the pad.",
    company: "Energy Field Monitoring Platform",
    role: "Product Designer",
    timeline: "Dec 2022 - Aug 2023 · 8 months",
    tags: ["Industrial/hardware", "Real-time data", "Mobile UX"],
    accent: "#92400e",
    gradient: ["#451a03", "#fbbf24"],
    image: "/images/case-studies/energy-monitoring/pad-view-desktop.jpg",
    confidentialityNote:
      "The company name has been withheld here; the rest of the project details are accurate.",
    problem:
      "The platform already existed as a data-heavy desktop tool - dense screens packed with filters and monitoring options for tracking real-time fluid chemistry, slurry quality, and rheology on the pad, the kind of automated, continuous monitoring that replaced manual, irregular lab sampling. The real problem was that it had no mobile version, even though the people who needed it most - engineers and operators working on-site - weren't sitting at a desk. I led the design of a mobile experience that had to carry the same real-time monitoring value without simply cramming the desktop layout onto a smaller screen.",
    context: [
      { label: "Team", value: "Stakeholders, engineers, and product teams" },
      { label: "Scope", value: "Mobile UX and UI for a data-heavy, real-time fluid monitoring platform" },
      { label: "Constraint", value: "Design work was software-only, consuming live sensor data from the field" },
      { label: "Duration", value: "8 months, Dec 2022 - Aug 2023, continuous" },
    ],
    process: [
      {
        title: "Started from what the desktop screens actually asked people to track",
        body: "The existing desktop experience packed real-time fluid chemistry, slurry quality, and rheology monitoring into dense screens full of filters and options. Before designing anything for mobile, I mapped what of that people actually needed in the field versus what only made sense at a desk.",
      },
      {
        title: "Designed mobile as its own experience, not a shrunk desktop layout",
        body: "The mobile UI had to carry the same real-time monitoring value in a completely different context - someone standing on the pad, not sitting at a workstation. I designed the information hierarchy from scratch around that, instead of trying to fit the desktop's dense layout onto a smaller screen.",
      },
      {
        title: "Designed and shipped 100+ mobile screens across the platform",
        body: "This wasn't one or two adapted views - it was the full set of monitoring and workflow surfaces, redesigned for mobile end to end. Keeping the information hierarchy consistent across that many screens mattered as much as getting any individual one right.",
      },
    ],
    decisions: [
      {
        title: "Pushed back on 'show everything, just let people scroll'",
        body: "The client wanted every option and filter visible on mobile, just stacked and scrollable, matching the desktop experience one-to-one. I argued that was the wrong tradeoff on a small, data-heavy screen - I designed the primary monitoring data to stay visible by default, with secondary options tucked under a 'more' control, and made the case that a deliberate hierarchy would beat an undifferentiated scroll. It held up.",
      },
      {
        title: "Kept the core real-time monitoring value non-negotiable",
        body: "Whatever else got simplified for mobile, the continuous, automated fluid chemistry and slurry monitoring - the thing replacing manual lab sampling - couldn't become secondary or something users had to dig for. I made sure it stayed the default view, not a feature buried under navigation.",
      },
    ],
    outcome: [
      { metric: "100+ screens", label: "designed for the mobile experience across the platform's monitoring and workflow surfaces" },
      { metric: "80% less time", label: "spent managing data, after moving from the dense desktop-only experience to a focused mobile one" },
      { metric: "Up to 46%", label: "savings on chemical cost, driven by faster, more accessible real-time monitoring in the field" },
    ],
    outcomeNote: "Outcomes as reported by the client following the mobile rollout.",
    reflection:
      "The client's instinct - keep everything visible, just let people scroll - is a completely reasonable-sounding default, and I still think it would have been the wrong call. Data-heavy doesn't have to mean everything-at-once; it means being deliberate about what's default and what's one tap away. Getting that trusted enough to ship was more valuable than any individual screen design, and it's the part of this project I'd point to first.",
    screenshots: [
      {
        src: "/images/case-studies/energy-monitoring/fleet-dashboard-desktop.jpg",
        alt: "Desktop fleet dashboard showing fleet-wide metrics, crew performance, and an interactive pad map, with logo blurred",
        caption: "The desktop Fleet Dashboard - fleet-wide metrics, crew performance, and an interactive pad map, all visible at once.",
      },
      {
        src: "/images/case-studies/energy-monitoring/fleet-dashboard-mobile.jpg",
        mobile: true,
        alt: "Mobile dashboard showing pumping hours per shift as a simplified bar chart, with logo blurred",
        caption: "The mobile dashboard - the same pumping-hours data, redesigned around what someone checks first on a phone.",
      },
      {
        src: "/images/case-studies/energy-monitoring/pad-view-desktop.jpg",
        alt: "Desktop pad view showing four wells side by side, each with status, diagram, and real-time metrics, with logo blurred",
        caption: "Desktop Pad View - four wells shown side by side, each with its own status, diagram, and real-time metrics panel.",
      },
      {
        src: "/images/case-studies/energy-monitoring/pad-view-mobile.jpg",
        mobile: true,
        alt: "Mobile pad view showing well statuses stacked vertically, one per card, with logo blurred",
        caption: "Mobile Pad View - the same well statuses, stacked and scannable one at a time instead of competing for space.",
      },
      {
        src: "/images/case-studies/energy-monitoring/frac-compatibility-desktop.jpg",
        alt: "Desktop frac compatibility view showing every metric, chemical dose, and plot visible simultaneously, with logo blurred",
        caption: "Desktop Frac view - every metric, chemical dose, and compatibility plot visible simultaneously in a dense right-hand panel.",
      },
      {
        src: "/images/case-studies/energy-monitoring/frac-compatibility-mobile.jpg",
        mobile: true,
        alt: "Mobile frac view showing the primary plot with secondary data organized under tabs, with logo blurred",
        caption: "Mobile Frac view - the primary plot stays central, with everything else organized under tabs instead of one long scroll.",
      },
      {
        src: "/images/case-studies/energy-monitoring/prc-plot-desktop.jpg",
        alt: "Desktop PRC plot view showing a secondary plot and full metric panel always visible, with logo blurred",
        caption: "Desktop PRC Plot - the same dense pattern, with a secondary plot and full metric panel always on screen.",
      },
      {
        src: "/images/case-studies/energy-monitoring/prc-plot-mobile.jpg",
        mobile: true,
        alt: "Mobile PRC plot view showing the live plot and key metrics with an edit control for the rest, with logo blurred",
        caption: "Mobile PRC Plot - the live plot and its key metrics front and center, with an Edit control for everything else.",
      },
    ],
  },
  {
    slug: "life-sciences-project-platform",
    title: "Designing project tracking for drug development teams",
    oneLiner:
      "As product designer, I built the dashboards and project management tools that let life sciences teams track complex drug development projects - milestones, timelines, and operational progress - in one place.",
    company: "Life Sciences Project Platform",
    role: "Product Designer",
    timeline: "Apr 2025 - Aug 2025 · 5 months",
    tags: ["Life sciences", "Project management", "Dashboards"],
    accent: "#15803d",
    gradient: ["#052e16", "#86efac"],
    image: "/images/case-studies/life-sciences-project-platform/timeline-view.jpg",
    confidentialityNote:
      "The company name has been withheld here; the rest of the project details are accurate.",
    problem:
      "This was a new platform, built from scratch, for tracking drug-development and release programs - not a generic project management tool with a life sciences skin on it. The thing that made it genuinely harder than a typical PM tool: a project here wasn't a collection of tasks with owners and due dates, it was a drug-development program made of highly dependent phases, scientific milestones, specialist teams, and timelines that kept shifting. Representing that clearly enough that teams could see real project health at a glance, without flattening the complexity that actually mattered, was the core design problem for the full five months.",
    context: [
      { label: "Team", value: "Stakeholders and product teams" },
      { label: "Scope", value: "Project dashboards, kanban boards, timelines, milestone tracking" },
      { label: "Constraint", value: "Programs ran across dependent phases, scientific milestones, and shifting timelines" },
      { label: "Duration", value: "5 months, Apr 2025 - Aug 2025" },
    ],
    process: [
      {
        title: "Designed project health as the front door, not a buried report",
        body: "Teams needed to know how a project was doing before they needed any specific detail. I built the dashboard experience around project health, progress, and priorities as the first thing visible, with kanban boards and detailed timelines available as the next layer down.",
      },
      {
        title: "Modeled phases as a first-class structure, not a status field",
        body: "Drug development moves through distinct phases with real gates between them, not just a linear progress bar. I designed the timeline and milestone views around that phase structure directly, so a project's actual position in its lifecycle was always visible, not inferred from a percentage.",
      },
      {
        title: "Simplified without hiding the complexity that mattered",
        body: "It would have been easy to flatten these projects into a generic task list. I worked to keep the structure life sciences teams actually relied on - phases, milestones, dependencies - visible and scannable, instead of trading it away for a simpler-looking but less useful view.",
      },
    ],
    decisions: [
      {
        title: "Landed on the timeline, not kanban, as the primary view",
        body: "The client wanted a kanban board as the primary view, most likely because that's what recent PM tools had trained them to expect. I elaborated that kanban answers 'what is everyone working on right now,' but a multi-year drug-development program needs to answer 'where is this program, what depends on what, and are we still on track' - a different question kanban isn't built to show. Testing both models against the actual program structure made the trade-off clear, and we aligned on the horizontal timeline as the primary view with phases, milestones, dependencies, target dates, and parallel workstreams all visible together - with kanban still available, just not the front door.",
      },
      {
        title: "Kept status indicators consistent across every view",
        body: "With dashboards, kanban boards, and timelines all showing overlapping project data, I standardized status indicators and color meaning across every surface, so a team member didn't have to re-learn what 'at risk' looked like depending on which screen they were on.",
      },
    ],
    outcome: [
      { metric: "Timeline over kanban", label: "aligned on a phase-and-dependency timeline as the primary view, after testing it against the client's initial kanban-first preference" },
      { metric: "One project-health view", label: "consistent status indicators across dashboards, kanban boards, and timelines" },
      { metric: "Built from zero", label: "a new platform designed from scratch around real drug-development phases, not adapted from a generic PM tool" },
    ],
    outcomeNote:
      "Described qualitatively - exact adoption and efficiency figures weren't tracked in a form precise enough to cite here.",
    reflection:
      "I went into this expecting the challenge to be visual - how to make a dense project tracker feel clean. It turned out to be structural instead: helping the client see that kanban and a program timeline answer different questions mattered more than any layout decision, because every dashboard, board, and timeline downstream was only as useful as that one structural call. Get that wrong and no amount of visual polish fixes it.",
    screenshots: [
      {
        src: "/images/case-studies/life-sciences-project-platform/timeline-view.jpg",
        alt: "Program timeline view showing pharmaceutical projects as horizontal bars across weekly columns, with phase milestones like Submission to Health Authority and Pre-Approval, with logo blurred",
        caption: "The timeline view we landed on as primary - phases, milestones, and target dates laid out across time, answering 'are we on track' instead of just 'what's in progress.'",
      },
      {
        src: "/images/case-studies/life-sciences-project-platform/kanban-view.jpg",
        alt: "Kanban board view showing drug-development projects sorted into Planned, In Progress, and Completed columns, with logo blurred",
        caption: "The kanban view the client wanted as primary - useful for seeing work state, but not built to answer whether a multi-year program was actually on track.",
      },
      {
        src: "/images/case-studies/life-sciences-project-platform/documents-dashboard.jpg",
        alt: "Documents dashboard showing lifecycle stage breakdown, workflow status chart, and a filterable table of documents in active workflow, with logo blurred",
        caption: "The documents dashboard - lifecycle stage and workflow charts up top, with a filterable, status-coded table underneath for the detail layer.",
      },
    ],
  },
  {
    slug: "gov-workflow-automation",
    title: "Designing AI-powered form-to-workflow automation for government teams",
    oneLiner:
      "As lead product designer, I collapsed a manual upload-check-build process into bulk upload and an AI prompt, then designed the API builder and workflow canvas that turned government paperwork into automated, AI-generated workflows.",
    company: "Government Workflow Automation Platform",
    role: "Lead Product Designer",
    timeline: "Dec 2025 - Apr 2026 · 5 months",
    tags: ["AI-assisted design", "GovTech", "Workflow automation"],
    accent: "#6d28d9",
    gradient: ["#4c1d95", "#c4b5fd"],
    image: "/images/case-studies/gov-workflow-platform/gov-upload-modal.jpg",
    confidentialityNote:
      "This project is under NDA - the company name and product branding have been withheld. One screen below is a real product screen with the logo blurred; the other two are illustrative mockups I rebuilt to show the design patterns accurately, not real product screens.",
    problem:
      "Before I joined, the platform already had an AI/OCR engine that could read an uploaded document and recreate it digitally - but the interface around it was old, and turning that into a working workflow was entirely manual: upload a file, manually check every extracted field, then manually build the workflow phase by phase, as three separate steps. The client wanted fewer steps, with AI doing more of the work. The bigger challenge sat in two places I ended up owning end to end: an API builder that had to fit a lot of dependent, service-specific configuration without overwhelming a non-technical user, and a workflow canvas that had to stay legible even once AI started generating most of a flow automatically instead of a person building it node by node.",
    context: [
      { label: "Team", value: "Product managers, engineers, and an AI/ML team" },
      { label: "Scope", value: "Bulk upload & AI-generated workflows, API builder, workflow canvas" },
      { label: "Constraint", value: "End users were non-technical government staff, not developers" },
      { label: "Duration", value: "5 months, Dec 2025 - Apr 2026" },
    ],
    process: [
      {
        title: "Replaced a three-step manual process with bulk upload and an AI prompt",
        body: "Before this redesign, creating a workflow meant uploading a file, manually checking every extracted field, then manually building the workflow phases - three separate manual stages. I added a bulk upload option and a short wizard where you map fields and describe what you want in a plain-language prompt, then let AI generate a first-pass workflow with suggestions instead of leaving every step to be built by hand.",
      },
      {
        title: "Designed the API builder around dependent steps instead of one static form",
        body: "The API builder had to hold a lot: which service to connect, service-specific configuration that changes based on that choice, an AI chat for in-context help, and the ability to move back and forth between steps without losing progress. I structured it so later steps are generated based on earlier choices, instead of trying to show every possible option at once.",
      },
      {
        title: "Rebuilt the workflow canvas to stay legible as flows got AI-generated",
        body: "Once workflows could be generated automatically by AI instead of built node by node, the canvas needed to stay easy to scan even as it filled up fast. I kept it as a flat, flowchart-style graph - clear branches, labeled paths like Approve and Decline - and tightened the visual language so it read as a clean, modern automation tool instead of a dense diagram.",
      },
    ],
    decisions: [
      {
        title: "Pushed for a multi-step modal over the client's preferred drawer",
        body: "The original direction, and the client's preference, was a persistent side drawer for the API builder - it looks clean in a spec and preserves context in theory. Once I tried to fit the actual number of options and dependent steps the client needed into it, the drawer stopped being efficient. I pushed for a multi-step modal wizard instead, where each step's options depend on what was chosen before it, and won that argument by showing it handled the real complexity better than the drawer could.",
      },
      {
        title: "Kept shipping AI-assisted prototypes despite engineering pushback",
        body: "Some developers weren't ready to build from AI-generated prototypes and wanted every spec done the traditional way. That friction slowed early handoff more than any design problem did. I kept prototypes detailed and consistent enough to hold up under scrutiny, treating the pushback as a reason to over-communicate intent rather than a reason to slow down how I worked.",
      },
    ],
    outcome: [
      { metric: "3 steps to 1 prompt", label: "collapsed a manual upload-check-build process into bulk upload plus a single AI-generated first pass" },
      { metric: "Modal over drawer", label: "shipped a multi-step, dependent-step modal instead of the originally preferred drawer, after proving it fit the real complexity better" },
      { metric: "AI-generated, still legible", label: "workflow canvas redesigned to stay scannable even when AI generated most of a flow automatically" },
    ],
    outcomeNote:
      "Described qualitatively - exact adoption and efficiency figures weren't tracked in a form precise enough to cite here.",
    reflection:
      "Client preference and the original spec both pointed toward a drawer for the API builder, and I still ended up arguing against it - not because the reasoning behind it was wrong in the abstract, but because it didn't hold up once real content got poured into it. That's the pattern I'd trust more of going forward: treat even well-reasoned direction as a hypothesis until it's been tested against the actual number of options and steps a real user needs, not the ideal case.",
    screenshots: [
      {
        src: "/images/case-studies/gov-workflow-platform/gov-upload-modal.jpg",
        alt: "Real product screen showing the Import from PDF modal with bulk upload and an AI prompt field for generating a workflow, with logo blurred",
        caption: "The real Import from PDF modal (logo blurred) - bulk upload plus an AI prompt that generates a first-pass workflow automatically.",
      },
      {
        src: "/images/case-studies/gov-workflow-platform/api-builder-modal.jpg",
        alt: "Illustrative mockup of the API builder as a multi-step modal wizard with dependent configuration steps and an integrated AI chat panel",
        caption: "The API builder as a multi-step modal, with dependent configuration steps, integrated AI chat, and back-and-forth navigation.",
      },
      {
        src: "/images/case-studies/gov-workflow-platform/workflow-canvas.jpg",
        alt: "Illustrative mockup of a flat workflow automation canvas with labeled branching paths like Approve and Decline",
        caption: "The workflow canvas, redesigned to stay legible as flows became AI-generated instead of hand-built.",
      },
    ],
  },
  {
    slug: "ab1gk-brand-ecommerce",
    title: "Building AB1GK's brand and ecommerce business from zero, solo",
    oneLiner:
      "Since 2019, I've been the entire product team for AB1GK, the goalkeeper gear brand founded by Premier League goalkeeper Asmir Begovic - designing the brand identity and logo from a blank page, then building and still running the ecommerce business that sells it, alone, from discovery through devops.",
    company: "AB1GK (AB1 Sports)",
    role: "Product Designer & de facto Product Owner",
    timeline: "Mar 2019 - ongoing",
    tags: ["Brand identity", "Ecommerce", "0→1"],
    accent: "#b91c1c",
    gradient: ["#450a0a", "#f87171"],
    image: "/images/case-studies/ab1gk/home.png",
    problem:
      "In March 2019, AB1 didn't exist - no brand, no logo, no website, just a professional goalkeeper's idea to build his own gear company. I designed the brand identity from scratch working directly with founder Asmir Begovic, then designed and built the ecommerce business, launched that November, that would sell it. The real challenge was never any single design problem - it was that I've been the entire product team since day one: discovery, design, development, devops, and now years of ongoing maintenance and marketing, for a real business that today processes hundreds of transactions a day.",
    context: [
      { label: "Team", value: "Just me, working directly with founder Asmir Begovic" },
      { label: "Scope", value: "Brand identity, logo, ecommerce platform, ongoing product and maintenance" },
      { label: "Constraint", value: "One-person team covering discovery through design, development, and devops" },
      { label: "Duration", value: "Mar 2019 - ongoing, still an active, growing business" },
    ],
    process: [
      {
        title: "Designed the brand identity around something personal, not borrowed",
        body: "Asmir and I worked through moodboards and sketches together, nearly daily, deliberately steering away from anything that looked like an existing goalkeeper or sportswear brand. The logo I pushed for overlaps the letters A and B to form the number 1 in the negative space between them - the number every goalkeeper wears, and the number Asmir wore through his own career. It's the one piece of the identity that couldn't belong to anyone else's brand.",
      },
      {
        title: "Built the ecommerce platform on WooCommerce, then engineered around its limits",
        body: "The store runs on WooCommerce, heavily customized. None of the real requirements were things it handled out of the box: dynamic pricing and shipping by country or promo code, an auction format for select drops, separate pricing tiers for retailers versus regular customers, disabling sales in specific countries for distribution and rights reasons, and custom reporting the default plugins didn't offer. Most of the real product work here was engineering around a platform's limits, not styling its defaults.",
      },
      {
        title: "Stayed the sole product owner through years of scale and turnover",
        body: "From the first sketch to today, I've owned discovery, design, development, devops, and ongoing maintenance myself, including through periods when the company brought in other leadership. Keeping that end-to-end ownership consistent - instead of letting the product fragment across whoever joined next - is most of why the site still works the way it was designed to.",
      },
    ],
    decisions: [
      {
        title: "Pushed back on a COO and CFO who wanted to move the site backward",
        body: "In 2020 and 2021, once a COO and CFO joined to grow retailer and UK presence, they pushed for site changes that ran against where the industry - and the underlying technology - was actually heading. I stood my ground, laid out specifically why their proposed direction was outdated and what the forward-looking alternative was, and won that argument. It's the clearest case of my product judgment actually being tested by people with real authority to overrule it, and it held up.",
      },
      {
        title: "Defended a personal, ownable logo over the safer option",
        body: "The easy version of this logo borrows visual language from established goalkeeper or sportswear brands - it reads as credible immediately, with less risk. I pushed instead for the A/B/1 mark specifically because it couldn't be mistaken for anyone else's, even though that meant more rounds of exploration before it clicked. It's become the one piece of the brand nobody has ever second-guessed since.",
      },
    ],
    outcome: [
      { metric: "Zero to full brand", label: "identity, logo, and ecommerce business built from nothing, solo, starting in 2019" },
      { metric: "Hundreds of orders/day", label: "the store now processes hundreds of transactions daily" },
      { metric: "One owner, years running", label: "discovery through devops and maintenance, held by one person the entire time" },
    ],
    outcomeNote:
      "Described qualitatively for now - more specific figures on traffic and growth to follow once available.",
    reflection:
      "Most product advice assumes you're navigating a team - stakeholders to align, specs to negotiate. Almost none of that applied here; it was just me and a founder who trusted the product side to me completely. That made the one real leadership clash - standing firm against a COO and CFO pushing an outdated direction - more clarifying than any team disagreement could have been. When it's just your judgment against theirs, with no committee to hide behind, you find out quickly whether you actually believe what you're arguing for.",
    screenshots: [
      {
        src: "/images/case-studies/ab1gk/home.png",
        alt: "AB1GK homepage showing the Asmir Begovic wordmark, the AB1 logo, and the UNO VII Fortis goalkeeper glove hero banner",
        caption: "The AB1GK homepage today - the A/B mark forming a 1 in the wordmark, above the current UNO VII Fortis glove drop.",
      },
      {
        src: "/images/case-studies/ab1gk/mobile-product.png",
        mobile: true,
        alt: "Mobile product page for the AB1 Undici SBR 2.0 Galattico goalkeeper glove, showing the currency switcher, image gallery, and price",
        caption: "A mobile product page with currency switcher",
      },
      {
        src: "/images/case-studies/ab1gk/dashboard.png",
        alt: "AB1GK ecommerce admin dashboard showing revenue, orders, average order value, a sales-over-time chart, live visitors, and a conversion funnel",
        caption: "The admin dashboard I built out for the business side - live revenue, orders, and a conversion funnel from visitor through checkout, the kind of reporting default WooCommerce plugins didn't offer.",
      },
    ],
  },
];

export function getCaseStudy(slug: string) {
  return caseStudies.find((c) => c.slug === slug);
}
