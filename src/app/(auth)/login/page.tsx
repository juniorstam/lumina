'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

export default function LoginPage() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)

  function handleLogin(e?: React.FormEvent) {
    e?.preventDefault()
    setLoading(true)
    setTimeout(() => router.push('/dashboard'), 1200)
  }

  return (
    <div className="w-full max-w-sm">
      <div className="bg-[#111113] border border-zinc-800 rounded-2xl p-8">
        <div className="text-center mb-8">
          <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center mx-auto mb-4">
            <svg width="18" height="18" viewBox="0 0 14 14" fill="none">
              <path d="M7 1L13 4V10L7 13L1 10V4L7 1Z" fill="white" fillOpacity="0.9"/>
              <path d="M7 4L10 5.5V8.5L7 10L4 8.5V5.5L7 4Z" fill="white" fillOpacity="0.4"/>
            </svg>
          </div>
          <h1 className="text-xl font-semibold text-zinc-100 mb-1.5">Bem-vindo de volta</h1>
          <p className="text-sm text-zinc-500">Entre na sua conta Lumina</p>
        </div>

        {/* Google OAuth */}
        <button
          onClick={() => handleLogin()}
          disabled={loading}
          className="w-full flex items-center justify-center gap-3 px-4 py-2.5 bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 hover:border-zinc-600 rounded-lg text-sm font-medium text-zinc-200 transition-all mb-5 disabled:opacity-50"
        >
          <svg width="16" height="16" viewBox="0 0 24 24">
            <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
            <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
          </svg>
          Continuar com Google
        </button>

        <div className="flex items-center gap-3 mb-5">
          <div className="flex-1 h-px bg-zinc-800" />
          <span className="text-xs text-zinc-600">Ou continue com e-mail</span>
          <div className="flex-1 h-px bg-zinc-800" />
        </div>

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-xs font-medium text-zinc-400 mb-1.5">
              Endereço de e-mail
            </label>
            <input
              type="email"
              placeholder="voce@exemplo.com"
              defaultValue="demo@lumina.com"
              className="w-full bg-zinc-900 border border-zinc-800 hover:border-zinc-700 focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/20 text-zinc-100 placeholder-zinc-600 rounded-lg px-3.5 py-2.5 text-sm outline-none transition-all"
            />
          </div>
          <div>
            <div className="flex items-center justify-between mb-1.5">
              <label className="text-xs font-medium text-zinc-400">Senha</label>
              <a href="#" className="text-xs text-zinc-500 hover:text-zinc-300 transition-colors">
                Esqueceu a senha?
              </a>
            </div>
            <input
              type="password"
              placeholder="••••••••"
              defaultValue="lumina123"
              className="w-full bg-zinc-900 border border-zinc-800 hover:border-zinc-700 focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/20 text-zinc-100 placeholder-zinc-600 rounded-lg px-3.5 py-2.5 text-sm outline-none transition-all"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full flex items-center justify-center gap-2 py-2.5 bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold rounded-lg border border-blue-500/50 transition-all mt-2 disabled:opacity-70"
          >
            {loading ? (
              <>
                <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"/>
                </svg>
                Entrando...
              </>
            ) : 'Entrar'}
          </button>
        </form>

        <p className="text-center text-sm text-zinc-500 mt-6">
          Não tem uma conta?{' '}
          <Link href="/signup" className="text-blue-400 hover:text-blue-300 transition-colors font-medium">
            Cadastre-se grátis
          </Link>
        </p>
      </div>

      <p className="text-center text-xs text-zinc-700 mt-6 px-4">
        Ao continuar, você concorda com nossos{' '}
        <a href="#" className="text-zinc-600 hover:text-zinc-400 transition-colors">Termos de Uso</a>
        {' '}e{' '}
        <a href="#" className="text-zinc-600 hover:text-zinc-400 transition-colors">Política de Privacidade</a>.
      </p>
    </div>
  )
}
