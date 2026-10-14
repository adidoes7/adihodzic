import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import ScrollProgress from "@/components/ScrollProgress";
import ScreenCompare from "@/components/ScreenCompare";

export const metadata: Metadata = {
  title: { absolute: "ComplySci Mobile App | Adi Hodzic" },
  description:
    "Designing ComplySci's first mobile app with a colleague, covering employee requests, forms, and compliance reviews.",
  robots: {
    index: false,
    follow: false,
  },
};

const IMG = "/images/case-studies/complysci/screens";

const gradient: [string, string] = ["#061e2c", "#5fa8c9"];

const roleFacts = [
  { label: "Scope", value: "UX/UI design" },
  { label: "Team", value: "Two designers" },
  { label: "Product", value: "Mobile companion to the ComplySci platform" },
];

const tags = ["Mobile App", "UX/UI Design", "FinTech / RegTech", "Figma"];

export default function ComplySciPage() {
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
              UX/UI Design · FinTech / RegTech Compliance App
            </p>
            <h1 className="font-display text-4xl font-semibold leading-[1.05] tracking-tight text-balance sm:text-5xl md:text-6xl">
              Designing ComplySci&rsquo;s first mobile app
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-white/90">
              Submitting, tracking, and reviewing compliance requests on
              mobile.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-white/20 bg-white/10 px-2.5 py-0.5 text-xs font-medium text-white/80"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-4xl px-6 py-16 sm:px-8 sm:py-24">
        <Reveal>
          <ScreenCompare
            cols={3}
            screens={[
              {
                src: `${IMG}/02-employee-requests.png`,
                alt: "Employee My Requests list showing trade requests with Pending, Denied, and Approved status badges",
                caption: "Track requests",
                width: 375,
                height: 812,
              },
              {
                src: `${IMG}/07-trade-form-completed.png`,
                alt: "Trade Request form showing transaction type, quantity, security search, and two attached supporting documents",
                caption: "Submit a trade request",
                width: 375,
                height: 1109,
              },
              {
                src: `${IMG}/11-admin-trade-review.png`,
                alt: "Request Details review screen showing the employee, trade summary, approval progress, attachment, and Approve, Deny, Cancel actions",
                caption: "Review and decide",
                width: 375,
                height: 853,
              },
            ]}
          />
        </Reveal>

        <Reveal className="mt-16">
          <h2 className="font-display text-2xl font-semibold tracking-tight sm:text-3xl">
            My role
          </h2>
          <p className="mt-4 max-w-3xl text-lg leading-relaxed text-foreground/90">
            I worked alongside another designer on ComplySci&rsquo;s first
            mobile app during my time at ROKOLabs. My contribution covered
            user flows, wireframes, interface screens, forms, and the admin
            area, designed in Figma.
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
              Compliance requests can be time-sensitive. An employee may need
              permission to make a personal trade, while a compliance officer
              needs to review that request. Depending on access to a
              computer can hold up either side.
            </p>
            <p>
              The mobile app brought these tasks to the phone: submitting
              requests, checking their status, and reviewing the information
              needed for a decision.
            </p>
          </div>
        </Reveal>

        <Reveal className="mt-16">
          <h2 className="font-display text-2xl font-semibold tracking-tight sm:text-3xl">
            Two roles, different priorities
          </h2>
          <div className="mt-4 max-w-3xl space-y-4 text-lg leading-relaxed text-foreground/90">
            <p>
              Employees need to create requests and understand what happens
              next. Compliance officers need to identify pending requests
              and review them.
            </p>
            <p>
              The employee experience combines quick access to request types
              with a personal request list. The company view adds employee
              search and a queue of requests awaiting review. Both use the
              same visual language for request types and statuses.
            </p>
          </div>
          <div className="mt-8">
            <ScreenCompare
              cols={2}
              screens={[
                {
                  src: `${IMG}/02-employee-requests.png`,
                  alt: "Employee My Requests list showing trade requests with Pending, Denied, and Approved status badges",
                  label: "Employee",
                  caption: "Personal requests and their status.",
                  width: 375,
                  height: 812,
                },
                {
                  src: `${IMG}/10-admin-pending-requests.png`,
                  alt: "Reviewer My Requests list with a Company toggle, employee search field, and pending trade requests",
                  label: "Reviewer",
                  caption: "Pending requests with employee search.",
                  width: 375,
                  height: 812,
                },
              ]}
            />
          </div>
        </Reveal>

        <Reveal className="mt-16">
          <h2 className="font-display text-2xl font-semibold tracking-tight sm:text-3xl">
            A structured request form
          </h2>
          <div className="mt-4 max-w-3xl space-y-4 text-lg leading-relaxed text-foreground/90">
            <p>
              A trade request brings together transaction details, the
              security being traded, and supporting documentation.
            </p>
            <p>
              The form groups these into distinct sections. Users can search
              for a security and attach supporting files, including
              documents already held in ComplySci. Selected files remain
              visible within the form, alongside controls to remove them.
            </p>
          </div>
          <div className="mt-8">
            <ScreenCompare
              cols={2}
              screens={[
                {
                  src: `${IMG}/03-quick-actions.png`,
                  alt: "Quick actions overlay listing Preclearance and Self-Report request types, including Trade Request and Political Contributions",
                  caption: "Choose a preclearance request or a self-report.",
                  width: 423,
                  height: 645,
                },
                {
                  src: `${IMG}/07-trade-form-completed.png`,
                  alt: "Trade Request form showing transaction type, quantity, security search, and two attached supporting documents",
                  caption:
                    "Transaction details, security selection, and supporting documents.",
                  width: 375,
                  height: 1109,
                },
              ]}
            />
          </div>
        </Reveal>

        <Reveal className="mt-16">
          <h2 className="font-display text-2xl font-semibold tracking-tight sm:text-3xl">
            Review with the relevant details close by
          </h2>
          <div className="mt-4 max-w-3xl space-y-4 text-lg leading-relaxed text-foreground/90">
            <p>
              The review view brings together the employee, request summary,
              approval progress, and attachments. Supervisor notes, process
              details, and the list of approvers sit in expandable sections.
            </p>
            <p>
              Approve and deny actions appear at the end of the review. The
              employee detail view also supports viewing shared notes and
              adding a note to the request.
            </p>
          </div>
          <div className="mt-8">
            <ScreenCompare
              cols={2}
              screens={[
                {
                  src: `${IMG}/11-admin-trade-review.png`,
                  alt: "Request Details review screen showing the employee, trade summary, approval progress, attachment, and Approve, Deny, Cancel actions",
                  label: "Reviewer",
                  caption: "Request details and decision actions.",
                  width: 375,
                  height: 853,
                },
                {
                  src: `${IMG}/12-employee-request-notes.png`,
                  alt: "Request Details screen showing six supervisor notes and Resubmit and Cancel actions",
                  label: "Employee",
                  caption: "Shared notes within the request.",
                  width: 375,
                  height: 1422,
                },
              ]}
            />
          </div>
        </Reveal>

        <Reveal className="mt-16">
          <h2 className="font-display text-2xl font-semibold tracking-tight sm:text-3xl">
            Submitted does not mean approved
          </h2>
          <div className="mt-4 max-w-3xl space-y-4 text-lg leading-relaxed text-foreground/90">
            <p>
              Sending a request and receiving approval are different events.
            </p>
            <p>
              The feedback states distinguish a submitted request awaiting
              approval from a submitted request that has been denied.
              Request lists repeat the status alongside each item, so users
              can check the outcome later.
            </p>
          </div>
          <div className="mt-8">
            <ScreenCompare
              cols={2}
              screens={[
                {
                  src: `${IMG}/22-submitted-pending-approval.png`,
                  alt: "Successfully submitted confirmation showing Request Pending Approval",
                  caption: "Submitted and awaiting approval.",
                  width: 345,
                  height: 349,
                },
                {
                  src: `${IMG}/21-submitted-denied.png`,
                  alt: "Successfully submitted confirmation showing Request Denied",
                  caption: "Submitted, with a denied outcome.",
                  width: 345,
                  height: 349,
                },
              ]}
            />
          </div>
        </Reveal>

        <Reveal className="mt-16">
          <h2 className="font-display text-2xl font-semibold tracking-tight sm:text-3xl">
            When there is nothing to show, or something goes wrong
          </h2>
          <div className="mt-4 max-w-3xl space-y-4 text-lg leading-relaxed text-foreground/90">
            <p>
              The empty state provides a direct action to create a request.
              If submission fails, the error message explains what happened
              and offers a route back to the form to try again.
            </p>
            <p>
              These states give users a next step when the usual flow cannot
              continue.
            </p>
          </div>
          <div className="mt-8">
            <ScreenCompare
              cols={2}
              screens={[
                {
                  src: `${IMG}/14-employee-empty-state.png`,
                  alt: "Empty dashboard state with a Your updates will appear here message and a Create Request button",
                  caption:
                    "No updates yet, with a direct route to create a request.",
                  width: 375,
                  height: 812,
                },
                {
                  src: `${IMG}/08-submission-error-recovery.png`,
                  alt: "Submission error panel reading Something went wrong with a Back to Form button",
                  caption: "Submission failure, with a route back to the form.",
                  width: 345,
                  height: 427,
                },
              ]}
            />
          </div>
        </Reveal>

        <Reveal className="mt-16">
          <h2 className="font-display text-2xl font-semibold tracking-tight sm:text-3xl">
            The product today
          </h2>
          <p className="mt-4 max-w-3xl text-lg leading-relaxed text-foreground/90">
            ComplySci is available on iOS and Android. The screens shown here
            are from my original design work with a colleague; the current
            app has evolved since then.
          </p>
          <div className="mt-6 flex flex-wrap gap-x-8 gap-y-3">
            <a
              href="https://apps.apple.com/us/app/complysci/id1632257012"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-muted transition-colors hover:text-foreground"
            >
              View on the App Store
              <span aria-hidden>→</span>
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=com.complysci.mobile.app.prod&hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-muted transition-colors hover:text-foreground"
            >
              View on Google Play
              <span aria-hidden>→</span>
            </a>
          </div>
        </Reveal>
      </div>
    </article>
  );
}
