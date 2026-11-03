
"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { week: "Sem 1", income: 4200, expense: 1800 },
  { week: "Sem 2", income: 5800, expense: 2400 },
  { week: "Sem 3", income: 3600, expense: 2100 },
  { week: "Sem 4", income: 7200, expense: 3200 },
];

export function CashFlowChart() {
  return (
    <div className="w-full rounded-2xl bg-white p-5">

      <div className="h-32 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} barGap={8}>
            <CartesianGrid
              strokeDasharray="3 3"
              vertical={false}
              stroke="#E2E8F0"
            />

            <XAxis
              dataKey="week"
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#94A3B8", fontSize: 12 }}
            />

            <YAxis hide />

            <Tooltip
              cursor={{ fill: "#F1F5F9" }}
              formatter={(value) =>
                `R$ ${Number(value).toLocaleString("pt-BR")}`
              }
            />

            <Bar
              dataKey="income"
              name="Receitas"
              fill="#10B981"
              radius={[5, 5, 0, 0]}
            />

            <Bar
              dataKey="expense"
              name="Despesas"
              fill="#CBD5E1"
              radius={[5, 5, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="mt-4 flex justify-center gap-6">
        <div className="flex items-center gap-2">
          <span className="size-2.5 rounded-full bg-emerald-500" />
          <span className="text-xs text-slate-500">Receitas</span>
        </div>

        <div className="flex items-center gap-2">
          <span className="size-2.5 rounded-full bg-slate-300" />
          <span className="text-xs text-slate-500">Despesas</span>
        </div>
      </div>
    </div>
  );
}
