import { Heading } from "@/components/Heading";
import { ArrowUpNarrowWide } from "lucide-react";
import Image from "next/image";

export default function Login() {
  return (
    <>
      <div className="grid grid-cols-12 gap-0">
        <div className="col-span-7 h-100">
          <div className="bg-gradient-to-br from-[#0d3b1e] via-[#166534] to-[#124b27] min-h-[100vh] p-5">
            <div className="flex justify-between items-center py-8">
              <Image
                src="/images/logo.png"
                alt="Orvyn"
                width={200}
                height={60}
              />
              <div>
                <span className="badge badge-topic text-white p-3 rounded-4xl bg-[#3a7751]">
                  Gestão Financeira Inteligente
                </span>
              </div>
            </div>
            <div className="mt-5">
              <span className="badge text-white p-3 rounded-2xl bg-[#3a7751]">
                SaaS de Finanças Pessoais
              </span>
            </div>
            <Heading className="text-2xl lg:text-4xl font-black text-slate-50 mt-10" type={"h1"}>
              Tenha o controle das suas finanças.
            </Heading>
            <p className="text-2xl text-slate-300 mt-5">
                Organize seus gastos, acompanhe sua evolução e tome decisões financeiras com mais confiança.
            </p>
            <div className="box bg-white p-8 rounded-2xl my-7">
                <span className="text-xl uppercase text-slate-600">
                    Saldo Líquido Atual
                </span>
                <div className="flex items-center gap-3">
                    <Heading className="text-2xl lg:text-5xl font-semibold text-slate-900 mt-0" type={"h2"}>
                    R$ 28.450,80
                </Heading>
                <span className="badge text-green-800 font-semibold p-3 rounded-4xl bg-[#ddfbe9] flex items-center gap-2">
                    <ArrowUpNarrowWide /> +14,2% este mês
                </span>
                </div>
            </div>
          </div>
        </div>

        <div className="col-span-5 bg-white">
            <div className="min-h-[100vh] ">
                <h2>Formulário</h2>
            </div>
        </div>
      </div>
    </>
  );
}
