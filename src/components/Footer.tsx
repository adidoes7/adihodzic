export default function Footer() {
  return (
    <footer id="contact" className="border-t border-border">
      <div className="mx-auto max-w-6xl px-6 py-20 sm:px-8">
        <p className="font-display text-4xl font-semibold tracking-tight text-balance sm:text-5xl md:text-6xl">
          Let&rsquo;s build something
          <br />
          worth <span className="italic font-serif font-normal text-accent">shipping</span> - together.
        </p>
        <a
          href="mailto:adi@adihodzic.com"
          className="mt-10 inline-block text-lg font-medium underline decoration-border underline-offset-4 transition-colors hover:decoration-accent hover:text-accent"
        >
          adi@adihodzic.com
        </a>
        <p className="mt-16 text-xs text-muted">
          © {new Date().getFullYear()} Adi Hodzic - Senior Product Designer
        </p>
      </div>
    </footer>
  );
}
