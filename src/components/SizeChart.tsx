const sizes = [
  { size: "S", waist: "60–65 cm", hip: "86–91 cm" },
  { size: "M", waist: "66–71 cm", hip: "92–97 cm" },
  { size: "L", waist: "72–79 cm", hip: "98–105 cm" },
  { size: "XL", waist: "80–87 cm", hip: "106–113 cm" },
  { size: "XXL", waist: "88–97 cm", hip: "114–123 cm" },
  { size: "XXXL", waist: "98–110 cm", hip: "124–136 cm" },
];

const SizeChart = () => {
  return (
    <section id="groessentabelle" className="border-b border-border">
      <div className="container py-16 lg:py-24">
        <div className="text-center mb-12">
          <p className="font-display text-xs uppercase tracking-editorial text-muted-foreground mb-4">Größentabelle</p>
          <h2 className="font-display text-3xl md:text-4xl font-light tracking-tight-display text-foreground">
            Finden Sie Ihre Größe
          </h2>
        </div>

        <div className="max-w-2xl mx-auto overflow-x-auto">
          <table className="w-full border border-border">
            <thead>
              <tr className="border-b border-border">
                <th className="font-display text-xs uppercase tracking-editorial text-foreground py-4 px-6 text-left">Größe</th>
                <th className="font-display text-xs uppercase tracking-editorial text-foreground py-4 px-6 text-left">Taille</th>
                <th className="font-display text-xs uppercase tracking-editorial text-foreground py-4 px-6 text-left">Hüfte</th>
              </tr>
            </thead>
            <tbody>
              {sizes.map((row, i) => (
                <tr key={row.size} className={i < sizes.length - 1 ? "border-b border-border" : ""}>
                  <td className="font-display text-sm font-medium text-foreground py-4 px-6">{row.size}</td>
                  <td className="font-body text-sm text-muted-foreground py-4 px-6">{row.waist}</td>
                  <td className="font-body text-sm text-muted-foreground py-4 px-6">{row.hip}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default SizeChart;
