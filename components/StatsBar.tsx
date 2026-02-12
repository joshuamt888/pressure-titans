const stats = [
  { value: "500+", label: "Properties Cleaned" },
  { value: "5.0", label: "Google Rating" },
  { value: "100%", label: "Satisfaction Rate" },
  { value: "Same Day", label: "Quotes Available" },
];

export default function StatsBar() {
  return (
    <section className="bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-4xl md:text-5xl font-heading font-bold text-titan-accent mb-2">
                {stat.value}
              </div>
              <div className="text-slate-500 font-medium text-sm uppercase tracking-widest">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
