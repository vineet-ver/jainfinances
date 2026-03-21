type SectionStickyLabelProps = {
  label: string;
};

export function SectionStickyLabel({ label }: SectionStickyLabelProps) {
  return (
    <div className="section-sticky-label">
      <span>{label}</span>
    </div>
  );
}
