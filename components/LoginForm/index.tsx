
"use client";

import { useState } from "react";
import {
  Eye,
  EyeOff,
  Mail,
  LockKeyhole,
  ArrowRight,
} from "lucide-react";

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="w-full max-w-md mx-auto px-6 py-10">
      {/* Cabeçalho */}

      {/* Formulário */}
      <form className="space-y-6">
        {/* E-mail */}
        <div className="space-y-2">
          <label
            htmlFor="email"
            className="block text-sm font-semibold text-slate-700"
          >
            E-mail
          </label>

          <div className="relative">
            <Mail
              size={19}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
            />

            <input
              id="email"
              name="email"
              type="email"
              placeholder="seu@email.com"
              autoComplete="email"
              required
              className="w-full rounded-xl border border-slate-200 bg-white py-3.5 pl-12 pr-4 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-green-600 focus:ring-4 focus:ring-green-600/10"
            />
          </div>
        </div>

        {/* Senha */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <label
              htmlFor="password"
              className="text-sm font-semibold text-slate-700"
            >
              Senha
            </label>

            <a
              href="/forgot-password"
              className="text-sm font-medium text-green-700 transition hover:text-green-800"
            >
              Esqueceu a senha?
            </a>
          </div>

          <div className="relative">
            <LockKeyhole
              size={19}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
            />

            <input
              id="password"
              name="password"
              type={showPassword ? "text" : "password"}
              placeholder="Digite sua senha"
              autoComplete="current-password"
              required
              className="w-full rounded-xl border border-slate-200 bg-white py-3.5 pl-12 pr-12 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-green-600 focus:ring-4 focus:ring-green-600/10"
            />

            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              aria-label={showPassword ? "Ocultar senha" : "Mostrar senha"}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 transition hover:text-slate-700"
            >
              {showPassword ? (
                <EyeOff size={19} />
              ) : (
                <Eye size={19} />
              )}
            </button>
          </div>
        </div>

        {/* Lembrar acesso */}
        <div className="flex items-center gap-2">
          <input
            id="remember"
            name="remember"
            type="checkbox"
            className="size-4 rounded border-slate-300 accent-green-700"
          />

          <label
            htmlFor="remember"
            className="text-sm text-slate-600"
          >
            Manter conectado
          </label>
        </div>

        {/* Botão */}
        <button
          type="submit"
          className="group flex w-full items-center justify-center gap-2 rounded-xl bg-green-700 px-5 py-3.5 text-sm font-semibold text-white shadow-sm transition hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-700/20"
        >
          Entrar na minha conta

          <ArrowRight
            size={18}
            className="transition-transform group-hover:translate-x-1"
          />
        </button>
      </form>

      {/* Cadastro */}
      <div className="mt-8 text-center">
        <p className="text-sm text-slate-500">
          Ainda não tem uma conta?{" "}
          <a
            href="/register"
            className="font-semibold text-green-700 transition hover:text-green-800"
          >
            Criar conta
          </a>
        </p>
      </div>

      {/* Rodapé */}
      <div className="mt-12 border-t border-slate-100 pt-6 text-center">
        <p className="text-xs text-slate-400">
          © 2026 Monevry. Todos os direitos reservados.
        </p>
      </div>
    </div>
  );
}
