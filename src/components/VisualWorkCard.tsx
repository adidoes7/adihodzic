import Link from "next/link";

type VisualWorkItem = {
  title: string;
  description: string;
  tags: string[];
  gradient: [string, string];
  image?: string;
  imageFit?: "contain" | "cover";
  imagePosition?: string;
  href?: string;
};

export default function VisualWorkCard({ item }: { item: VisualWorkItem }) {
  const card = (
    <div className="overflow-hidden rounded-3xl border border-border bg-surface transition-transform hover:-translate-y-1">
      <div
        className="relative flex h-40 items-center justify-center"
        style={{
          background: `linear-gradient(135deg, ${item.gradient[0]}, ${item.gradient[1]})`,
        }}
      >
        {item.image &&
          (item.imageFit === "cover" ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={item.image}
              alt=""
              aria-hidden
              className="absolute inset-0 h-full w-full object-cover"
              style={{ objectPosition: item.imagePosition ?? "center" }}
            />
          ) : (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={item.image}
              alt=""
              aria-hidden
              className="h-[78%] w-auto object-contain"
            />
          ))}
      </div>
      <div className="p-6">
        <div className="mb-3 flex flex-wrap gap-2">
          {item.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-border px-2.5 py-0.5 text-xs font-medium text-muted"
            >
              {tag}
            </span>
          ))}
        </div>
        <h3 className="font-display text-xl font-semibold tracking-tight">
          {item.title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-muted">
          {item.description}
        </p>
        {item.href && (
          <span className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-foreground">
            See the project
            <span aria-hidden>→</span>
          </span>
        )}
      </div>
    </div>
  );

  return item.href ? (
    <Link href={item.href} className="block">
      {card}
    </Link>
  ) : (
    card
  );
}

export type { VisualWorkItem };
