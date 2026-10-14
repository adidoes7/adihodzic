import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import ScrollProgress from "@/components/ScrollProgress";
import ScreenCompare from "@/components/ScreenCompare";

export const metadata: Metadata = {
  title: { absolute: "FracStream Mobile | Adi Hodzic" },
  description:
    "Mobile product design for Tally Energy's FracStream, covering well status, live monitoring, and operational statistics.",
  robots: {
    index: false,
    follow: false,
  },
};

const IMG = "/images/case-studies/fracstream-mobile/screens";

const gradient: [string, string] = ["#0a1a12", "#4fa87a"];

const roleFacts = [
  { label: "Role", value: "Product Designer" },
  { label: "Client", value: "Tally Energy, through ROKOLabs" },
  { label: "Scope", value: "Mobile UX/UI, 100+ screens" },
];

export default function FracStreamMobilePage() {
  return (
    <article>
      <ScrollProgress />
      <header className="relative overflow-hidden">
        <div
          className="relative flex min-h-[55vh] flex-col justify-end px-6 pb-16 pt-32 sm:px-8 sm:pb-20"
          style={{
            background: `linear-gradient(135deg, ${gradient[0]}, ${gradient[1]})`,
          }}
        >
          <div className="mx-auto w-full max-w-4xl text-white">
            <Link
              href="/#work"
              className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-white/80 hover:text-white"
            >
              ← All work
            </Link>
            <p className="mb-4 text-sm font-medium text-white/80">
              Mobile UX/UI · Energy Operations
            </p>
            <h1 className="font-display text-4xl font-semibold leading-[1.05] tracking-tight text-balance sm:text-5xl md:text-6xl">
              Well status, live data, and performance on a phone
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-white/90">
              A mobile redesign of Tally Energy&rsquo;s monitoring platform,
              covering pad status, live charts, and operational statistics.
            </p>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-4xl px-6 py-16 sm:px-8 sm:py-24">
        <Reveal>
          <ScreenCompare
            cols={3}
            screens={[
              {
                src: `${IMG}/01-pad-frac.png`,
                alt: "Pad View showing a fracturing well card with stage progress, pressure, and flow",
                caption: "Pad status",
                width: 428,
                height: 926,
              },
              {
                src: `${IMG}/03-stats-overview.png`,
                alt: "Stats View with a stacked bar chart of day and night pumping hours",
                caption: "Performance statistics",
                width: 428,
                height: 926,
              },
              {
                src: `${IMG}/06-frac-monitoring.png`,
                alt: "Frac View showing a live monitoring chart with measurements below it",
                caption: "Live monitoring",
                width: 428,
                height: 926,
              },
            ]}
          />
        </Reveal>

        <Reveal className="mt-16">
          <h2 className="font-display text-2xl font-semibold tracking-tight sm:text-3xl">
            My role
          </h2>
          <p className="mt-4 max-w-3xl text-lg leading-relaxed text-foreground/90">
            I designed FracStream&rsquo;s mobile experience through ROKOLabs,
            with a scope of more than 100 screens across the platform&rsquo;s
            monitoring and workflow views.
          </p>
          <div className="mt-8 grid grid-cols-1 gap-x-6 gap-y-6 border-y border-border py-8 sm:grid-cols-3">
            {roleFacts.map((f) => (
              <div key={f.label}>
                <p className="text-xs font-medium uppercase tracking-wide text-muted">
                  {f.label}
                </p>
                <p className="mt-1 text-sm font-medium">{f.value}</p>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal className="mt-16">
          <h2 className="font-display text-2xl font-semibold tracking-tight sm:text-3xl">
            The challenge
          </h2>
          <div className="mt-4 max-w-3xl space-y-4 text-lg leading-relaxed text-foreground/90">
            <p>
              FracStream brings together real-time data from hydraulic
              fracturing operations. The existing desktop interface contained
              dense charts, metrics, filters, and configuration options.
            </p>
            <p>
              On mobile, those tools needed a clear order. The design had to
              support a quick status check while keeping detailed analysis
              and controls within reach.
            </p>
          </div>
        </Reveal>

        <Reveal className="mt-16">
          <h2 className="font-display text-2xl font-semibold tracking-tight sm:text-3xl">
            Pad View: understand the status of each well
          </h2>
          <div className="mt-4 max-w-3xl space-y-4 text-lg leading-relaxed text-foreground/90">
            <p>
              The Pad View organises wells into a vertical set of cards. Each
              card brings together stage progress, operating mode, a well
              diagram, and the relevant measurements.
            </p>
            <p>
              The fracturing view shows pressure, slurry flow, and proppant
              concentration. The wireline view uses the same card structure
              for depth and speed. A diagram key distinguishes open, closed,
              and unknown states through both symbols and colour.
            </p>
            <p>
              This gives the screen a repeatable structure as users move
              through the wells at a site.
            </p>
          </div>
          <div className="mt-8">
            <ScreenCompare
              cols={2}
              screens={[
                {
                  src: `${IMG}/01-pad-frac.png`,
                  alt: "Pad View fracturing card showing stage progress, well state, pressure, and flow",
                  caption:
                    "Fracturing: stage progress, well state, pressure, and flow.",
                  width: 428,
                  height: 926,
                },
                {
                  src: `${IMG}/02-pad-wireline.png`,
                  alt: "Pad View wireline card using the same card structure, with depth and speed",
                  caption: "Wireline: the same card structure, with depth and speed.",
                  width: 428,
                  height: 926,
                },
              ]}
            />
          </div>
        </Reveal>

        <Reveal className="mt-16">
          <h2 className="font-display text-2xl font-semibold tracking-tight sm:text-3xl">
            Stats View: compare performance over time
          </h2>
          <div className="mt-4 max-w-3xl space-y-4 text-lg leading-relaxed text-foreground/90">
            <p>
              The Stats View focuses on pumping hours per shift. Day and
              night data appear in a stacked bar chart, with controls for
              each series and an average reference line.
            </p>
            <p>
              Metric and date-range selectors sit above each chart. The date
              picker offers preset periods as well as calendar selection,
              keeping the choice of time range close to the data it changes.
            </p>
          </div>
          <div className="mt-8">
            <ScreenCompare
              cols={2}
              screens={[
                {
                  src: `${IMG}/03-stats-overview.png`,
                  alt: "Stats View stacked bar chart of day and night pumping hours with an average reference line",
                  caption:
                    "Day and night pumping hours, with an average reference line.",
                  width: 428,
                  height: 926,
                },
                {
                  src: `${IMG}/04-stats-date-range.png`,
                  alt: "Stats View date-range picker with preset periods and a calendar",
                  caption:
                    "Preset periods and calendar selection for the chart's date range.",
                  width: 428,
                  height: 926,
                },
              ]}
            />
          </div>
        </Reveal>

        <Reveal className="mt-16">
          <h2 className="font-display text-2xl font-semibold tracking-tight sm:text-3xl">
            Frac View: keep the live chart central
          </h2>
          <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-[1fr_auto] sm:items-center">
            <div className="max-w-md space-y-4 text-lg leading-relaxed text-foreground/90">
              <p>
                The monitoring view places the selected pad, well or stage,
                and time range above the chart. Tabs separate groups of
                measurements, while the corresponding values sit beneath the
                plot with matching colour markers.
              </p>
              <p>
                Secondary configuration is available through edit and menu
                controls. The chart remains the main element of the
                monitoring screen.
              </p>
            </div>
            <ScreenCompare
              cols={1}
              screens={[
                {
                  src: `${IMG}/06-frac-monitoring.png`,
                  alt: "Frac View showing the selected context, a live plot, and measurements with matching colour markers",
                  caption:
                    "The selected context, live plot, and corresponding measurements.",
                  width: 300,
                  height: 649,
                },
              ]}
            />
          </div>
        </Reveal>

        <Reveal className="mt-16">
          <h2 className="font-display text-2xl font-semibold tracking-tight sm:text-3xl">
            Select the context before analysing the data
          </h2>
          <div className="mt-4 max-w-3xl space-y-4 text-lg leading-relaxed text-foreground/90">
            <p>
              The source selector groups stages under their wells and
              provides a route back to the current stage. A separate
              monitoring example shows two wells and their stages together.
            </p>
            <p>
              Before a pad is selected, the screen explicitly asks the user
              to choose one and shows a no-data state. The selected context
              stays visible above the chart once monitoring data is
              displayed.
            </p>
          </div>
          <div className="mt-8">
            <ScreenCompare
              cols={2}
              screens={[
                {
                  src: `${IMG}/07-stage-selector.png`,
                  alt: "Source selector listing wells and stages, with a route back to the current stage",
                  caption: "Select wells and stages, or return to the current stage.",
                  width: 428,
                  height: 926,
                },
                {
                  src: `${IMG}/08-multiple-wells.png`,
                  alt: "Monitoring view with two selected wells and their stages shown together",
                  caption:
                    "Two selected wells and their stages in the monitoring view.",
                  width: 428,
                  height: 926,
                },
              ]}
            />
          </div>
          <div className="mt-8 max-w-[220px]">
            <ScreenCompare
              cols={1}
              screens={[
                {
                  src: `${IMG}/11-no-pad-selected.png`,
                  alt: "No-data state asking the user to choose a pad before monitoring begins",
                  caption: "Before monitoring begins: choose a pad.",
                  width: 220,
                  height: 476,
                },
              ]}
            />
          </div>
        </Reveal>

        <Reveal className="mt-16">
          <h2 className="font-display text-2xl font-semibold tracking-tight sm:text-3xl">
            Adapt the chart to the task
          </h2>
          <div className="mt-4 max-w-3xl space-y-4 text-lg leading-relaxed text-foreground/90">
            <p>
              The axis editor provides minimum and maximum values, visibility
              controls, and an autoscale option.
            </p>
            <p>
              The landscape design gives the chart more horizontal space and
              moves the key measurements beside it. It keeps the same
              monitoring context while changing the layout to suit the
              available space.
            </p>
          </div>
          <div className="mt-8 max-w-xs">
            <ScreenCompare
              cols={1}
              screens={[
                {
                  src: `${IMG}/09-axis-settings.png`,
                  alt: "Axis editor with minimum and maximum values, series visibility, and an autoscale option",
                  caption: "Set axis ranges, series visibility, and autoscale.",
                  width: 300,
                  height: 649,
                },
              ]}
            />
          </div>
          <div className="mt-8">
            <ScreenCompare
              cols={1}
              screens={[
                {
                  src: `${IMG}/10-landscape-monitoring.png`,
                  alt: "Landscape monitoring layout with a wide chart and measurements alongside it",
                  caption:
                    "Landscape layout: a wider plot with measurements alongside it.",
                  width: 926,
                  height: 428,
                },
              ]}
            />
          </div>
        </Reveal>

        <Reveal className="mt-16">
          <h2 className="font-display text-2xl font-semibold tracking-tight sm:text-3xl">
            Scope of the work
          </h2>
          <p className="mt-4 max-w-3xl text-lg leading-relaxed text-foreground/90">
            These screens are selected examples from the broader mobile
            design: status cards, charts, filters, selection states, and
            configuration views. Together, they show how I organised a
            complex monitoring product around the space and interaction
            patterns of a phone.
          </p>
        </Reveal>
      </div>
    </article>
  );
}
