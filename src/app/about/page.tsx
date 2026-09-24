import type { Metadata } from "next";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "About",
  description: "How I work, what I've learned, and where I've been.",
};

const principles: { title: string; body: string | string[] }[] = [
  {
    title: "Evidence before opinion",
    body: "I default to bringing data or research into a room before I bring a point of view. It changes arguments from 'my taste vs. yours' into 'here's what we're actually optimizing for.'",
  },
  {
    title: "Make the case, not just the design",
    body: [
      "Good product decisions rarely come from design working alone. When my recommendation differs from the initial direction, I try to make the trade-offs visible: what users need, what the product needs, what engineering can support, and what each option gives up.",
      "Sometimes that changes the direction. Sometimes new evidence changes mine. The important part is getting to the strongest decision together, not being the person who wins the argument.",
    ],
  },
  {
    title: "Systems over screens",
    body: "A beautiful one-off screen that nobody can maintain is a liability. I'd rather ship something 80% as polished that a team can actually own and extend.",
  },
  {
    title: "AI accelerates the work, not the standard",
    body: "AI-assisted prototyping has made me roughly ten times faster at getting real options in front of stakeholders instead of betting early on one direction. What hasn't changed is the bar those options have to clear before they're worth someone's time - AI buys speed, not a pass on craft.",
  },
];

const experience = [
  {
    period: "2022 - present",
    role: "Senior Product Designer",
    company: "ROKOLabs, USA",
    body: "Leading end-to-end product design across fintech, healthcare, energy, government, and enterprise software solutions, driving user experience strategy from discovery through delivery. Collaborate closely with C-level stakeholders, product managers, and engineering teams to design scalable solutions. Conduct user research, define workflows, create wireframes and high-fidelity interfaces, maintain design systems, and leverage AI-powered tools to accelerate design exploration, validation, and delivery while ensuring usability, accessibility, and business impact.",
  },
  {
    period: "2015 - 2022",
    role: "Product Designer",
    company: "Novagrupa",
    body: "Led the design of websites, landing pages, and digital marketing assets for clients across multiple industries. Conducted discovery workshops, created user journeys, wireframes, prototypes, and final UI designs, working closely with clients and development teams to deliver user-focused, conversion-driven digital experiences that aligned with business objectives and brand guidelines.",
  },
  {
    period: "2007 - 2015",
    role: "Web Designer / Developer",
    company: "BIZmedia",
    body: "Delivered end-to-end website design and development services for a diverse client portfolio, including news media websites, e-commerce platforms, and promotional microsites. Responsible for UX/UI design, front-end development, content management systems, website maintenance, and client support, ensuring high-quality digital experiences, strong visual communication, and reliable performance across devices and browsers.",
  },
];

const projects = [
  {
    company: "Government Workflow Automation Platform",
    role: "Lead Product Designer",
    period: "Dec 2025 - Apr 2026",
  },
  {
    company: "Life Sciences Project Platform",
    role: "Product Designer",
    period: "Apr 2025 - Aug 2025",
  },
  {
    company: "US Wealth Management Firm",
    role: "Lead Product Designer",
    period: "May 2023 - Jul 2026",
  },
  {
    company: "Energy Field Monitoring Platform",
    role: "Product Designer",
    period: "Dec 2022 - Aug 2023",
  },
  {
    company: "IAEA (International Atomic Energy Agency)",
    role: "Lead UX/UI Designer",
    period: "Sep 2022 - Apr 2023",
  },
  {
    company: "AB1GK (AB1 Sports)",
    role: "Product Designer & de facto Product Owner",
    period: "Mar 2019 - ongoing",
  },
];

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-20 sm:px-8 sm:py-28">
      <Reveal>
        <p className="text-sm font-medium text-muted">About</p>
        <h1 className="mt-4 font-display text-4xl font-semibold leading-[1.05] tracking-tight text-balance sm:text-5xl">
          10+ years in, still most interested in the{" "}
          <span className="font-serif italic font-normal text-accent">
            first messy version
          </span>{" "}
          of a problem.
        </h1>
        <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted">
          I&rsquo;m a senior product designer who&rsquo;s spent most of my
          career inside industries where the complexity is real - regulated
          finance, government and AI-driven automation, nuclear safeguards,
          energy operations, and life sciences. Alongside that, since 2019
          I&rsquo;ve been the sole product owner for AB1GK, a goalkeeper gear
          brand I helped build from a blank page - discovery through devops,
          the same person the whole way through. I like the stage of a
          project where the brief is still wrong and somebody has to figure
          out what&rsquo;s actually true before anyone can design anything.
        </p>
      </Reveal>

      <Reveal delay={0.1} className="mt-20">
        <h2 className="font-display text-2xl font-semibold tracking-tight">
          How I work
        </h2>
        <div className="mt-8 space-y-8">
          {principles.map((p) => (
            <div key={p.title} className="border-l-2 border-accent pl-6">
              <h3 className="text-lg font-semibold">{p.title}</h3>
              {(Array.isArray(p.body) ? p.body : [p.body]).map((para, i) => (
                <p key={i} className="mt-2 leading-relaxed text-muted">
                  {para}
                </p>
              ))}
            </div>
          ))}
        </div>
      </Reveal>

      <Reveal delay={0.15} className="mt-20">
        <h2 className="font-display text-2xl font-semibold tracking-tight">
          Experience
        </h2>
        <div className="mt-8 space-y-10">
          {experience.map((job) => (
            <div key={job.company} className="border-l-2 border-accent pl-6">
              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                <p className="text-lg font-semibold">
                  {job.role} · {job.company}
                </p>
                <p className="text-sm text-muted">{job.period}</p>
              </div>
              <p className="mt-2 leading-relaxed text-muted">{job.body}</p>
            </div>
          ))}
        </div>
      </Reveal>

      <Reveal delay={0.2} className="mt-20">
        <h2 className="font-display text-2xl font-semibold tracking-tight">
          Latest projects
        </h2>
        <div className="mt-8 divide-y divide-border border-y border-border">
          {projects.map((job) => (
            <div
              key={job.company}
              className="flex flex-col justify-between gap-1 py-5 sm:flex-row sm:items-center"
            >
              <div>
                <p className="font-medium">{job.company}</p>
                <p className="text-sm text-muted">{job.role}</p>
              </div>
              <p className="text-sm text-muted">{job.period}</p>
            </div>
          ))}
        </div>
      </Reveal>

      <Reveal delay={0.25} className="mt-20">
        <h2 className="font-display text-2xl font-semibold tracking-tight">
          Outside of work
        </h2>
        <p className="mt-4 max-w-2xl leading-relaxed text-muted">
          When I&rsquo;m off the clock, I actually am - time with family,
          playing football with my kids, a pint or coffee with mates, and
          watching football whenever I can.
        </p>
      </Reveal>
    </div>
  );
}
