export const Marquee = ({ items }) => {
  const row = [...items, ...items];
  return (
    <div
      data-testid="skills-marquee"
      aria-hidden="true"
      className="relative overflow-hidden border-y border-smoke/60 py-5"
    >
      <div className="animate-marquee flex w-max">
        {row.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="flex items-center gap-10 pr-10 text-xs uppercase tracking-[0.35em] text-fog"
          >
            {item}
            <span className="h-1 w-1 rounded-full bg-ember" />
          </span>
        ))}
      </div>
    </div>
  );
};
