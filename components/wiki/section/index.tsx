const Section = ({ header, children }: { header?: string; children: React.ReactNode }) => {
  return (
    <section className="mb-8 last:mb-0">
      {header ? <h2 className="text-2xl font-bold mb-2">{header}</h2> : ""}
      {children}
    </section>
  );
};

export default Section;
