import React from 'react'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
  icon?: React.ReactNode
  suffix?: React.ReactNode
}

export function Input({ label, error, icon, suffix, className = '', ...props }: InputProps) {
  return (
    <div className="w-full">
      {label && (
        <label className="block text-xs font-medium text-zinc-400 mb-1.5">
          {label}
        </label>
      )}
      <div className="relative">
        {icon && (
          <div className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500 pointer-events-none">
            {icon}
          </div>
        )}
        <input
          className={`
            w-full
            bg-zinc-900
            border border-zinc-800
            hover:border-zinc-700
            focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/20
            text-zinc-100 placeholder-zinc-600
            rounded-lg
            px-3.5 py-2.5
            text-sm
            outline-none
            transition-all duration-150
            ${icon ? 'pl-9' : ''}
            ${suffix ? 'pr-10' : ''}
            ${error ? 'border-red-500/50 focus:border-red-500/50 focus:ring-red-500/20' : ''}
            ${className}
          `}
          {...props}
        />
        {suffix && (
          <div className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-500">
            {suffix}
          </div>
        )}
      </div>
      {error && (
        <p className="mt-1.5 text-xs text-red-400">{error}</p>
      )}
    </div>
  )
}
