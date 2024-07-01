type Section = {
  children: React.ReactNode;
  id: string;
  className?: string;
};
export const Section = ({ children, id, className }: Section) => (
  <section id={id} className={className}>
    {children}
  </section>
);
