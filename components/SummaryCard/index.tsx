
type SummaryCardProps = {
  title: string;
  amount: string;
  description: string;
  variant: "income" | "expense";
};

export function SummaryCard({
  title,
  amount,
  description,
  variant,
}: SummaryCardProps) {
  const isIncome = variant === "income";

  return (
    <div className="group flex flex-col gap-2 rounded-2xl bg-[#F8FAFC] p-5 transition-all duration-300 hover:bg-[var(--primary-color)]">
      {/* Header */}
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium text-slate-500 group-hover:text-white">
          {title}
        </span>

        <span
          className={`size-2.5 rounded-full ${
            isIncome ? "bg-emerald-500" : "bg-slate-400"
          }`}
        />
      </div>

      {/* Valor */}
      <h3 className="text-xl font-bold tracking-tight text-slate-800 group-hover:text-white">
        {amount}
      </h3>

      {/* Descrição */}
      <p
        className={`text-sm font-medium ${
          isIncome ? "text-emerald-600" : "text-slate-500"
        } group-hover:text-white`}
      >
        {description}
      </p>
    </div>
  );
}
