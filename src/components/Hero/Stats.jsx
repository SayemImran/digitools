const stats = [
  { value: "50K+", label: "Active Users" },
  { value: "200+", label: "Premium Tools" },
  { value: "4.9",  label: "Rating" },
];

const Stats = () => {
  return (
    <div className="w-full bg-gradient-to-r from-[#4F39F6] to-purple-500 py-8 px-4">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-around gap-6 sm:gap-0">
        {stats.map((stat, index) => (
          <div key={stat.label} className="flex items-center gap-6 sm:gap-10 w-full sm:w-auto justify-center">

            {/* Stat Item */}
            <div className="flex flex-col items-center sm:items-start gap-1">
              <span className="text-4xl font-bold text-white">{stat.value}</span>
              <span className="text-sm text-white/70">{stat.label}</span>
            </div>

            {/* Divider — between items only */}
            {index < stats.length - 1 && (
              <div className="hidden sm:block h-10 w-px bg-white/30" />
            )}

          </div>
        ))}
      </div>
    </div>
  );
};

export default Stats;