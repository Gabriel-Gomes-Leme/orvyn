import { CashFlowChart } from "@/components/CashFlowChart";
import { Heading } from "@/components/Heading";
import LoginForm from "@/components/LoginForm";
import { SummaryCard } from "@/components/SummaryCard";
import { ArrowUpNarrowWide, CircleDollarSign } from "lucide-react";
import Image from "next/image";

export default function Login() {
  return (
    <>
      <div className="grid grid-cols-12 gap-0">
        <div className="col-span-7 h-100">
          <div className="bg-gradient-to-br from-[#0d3b1e] via-[#166534] to-[#124b27] min-h-[100vh] p-5 px-14">
            <div className="flex justify-between items-center py-2">
              <Image
                src="/images/logo-main.png"
                alt="Monevry"
                width={180}
                height={40}
              />
              <div>
                <span className="badge badge-topic text-sm text-white p-3 rounded-4xl bg-[#3a7751]">
                  Gestão Financeira Inteligente
                </span>
              </div>
            </div>

            <Heading
              className="text-2xl lg:text-4xl font-black text-slate-50 mt-5"
              type={"h1"}
            >
              Tenha o controle das suas finanças.
            </Heading>
            <p className="text-base text-slate-300 mt-3">
              Organize seus gastos, acompanhe sua evolução e tome decisões
              financeiras com mais confiança.
            </p>
            <div className="box bg-white p-8 rounded-2xl my-7">
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div>
                    <span className="text-sm uppercase text-slate-400 font-medium">
                      Saldo Líquido Atual
                    </span>
                    <Heading
                      className="text-2xl font-semibold text-slate-900 mt-0"
                      type={"h2"}
                    >
                      R$ 28.450,80
                    </Heading>
                  </div>
                  <span className="badge text-sm text-green-800 font-semibold p-3 rounded-4xl bg-[#ddfbe9] flex items-center gap-2">
                    <ArrowUpNarrowWide /> +14,2% este mês
                  </span>
                </div>

                <div className="box-icon p-3 rounded-2xl text-green-500 bg-[#dcfae7]">
                  <CircleDollarSign />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2 mt-5">
                <SummaryCard
                  title="Receitas Mensais"
                  amount="R$ 14.280,00"
                  description="92% da meta alcançada"
                  variant="income"
                />

                <SummaryCard
                  title="Gastos Fixos e Variáveis"
                  amount="R$ 5.830,20"
                  description="Controlado (-8% vs prev.)"
                  variant="expense"
                />
              </div>

              <div className="flex items-center justify-between mt-5">
                <span className="text-base text-slate-400 font-medium">
                  Fluxo Semanal de Caixa
                </span>
                <span className="text-base text-slate-400 font-medium">
                  Últimas 4 semanas
                </span>
              </div>
              <CashFlowChart />
            </div>
          </div>
        </div>

        <div className="col-span-5">
          <div className="bg-white min-h-[100vh] px-14 flex flex-col justify-center">
            <Image
              src="/images/logo-2.png"
              alt="Monevry"
              width={180}
              height={40}
            />
            <h2 className="text-slate-900 text-4xl font-bold mt-5">
              Bem-vindo de volta!
            </h2>
            <p className="text-slate-600 mt-3">
              Entre na sua conta para continuar.
            </p>
            <LoginForm />
          </div>
        </div>
      </div>
    </>
  );
}
