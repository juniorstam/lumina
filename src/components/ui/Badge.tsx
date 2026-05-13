import React from 'react'
import { Platform, PLATFORM_STYLES } from '@/lib/mockData'

interface PlatformBadgeProps {
  platform: Platform
  size?: 'sm' | 'md'
}

export function PlatformBadge({ platform, size = 'sm' }: PlatformBadgeProps) {
  const styles = PLATFORM_STYLES[platform]
  return (
    <span
      className={`
        inline-flex items-center gap-1
        px-2 py-0.5
        rounded-md
        text-xs font-medium
        ${styles.badge}
        ${size === 'md' ? 'px-2.5 py-1 text-xs' : ''}
      `}
    >
      <span className={`w-1.5 h-1.5 rounded-full ${styles.dot} opacity-80`} />
      {platform}
    </span>
  )
}

type StatusVariant = 'completed' | 'in-progress' | 'not-started' | 'subscription' | 'active' | 'pending' | 'expired' | 'syncing' | 'error' | 'inactive'

interface StatusBadgeProps {
  status: StatusVariant
  size?: 'sm' | 'md'
}

const statusConfig: Record<StatusVariant, { label: string; classes: string; dot: string }> = {
  'completed': {
    label: 'Concluído',
    classes: 'bg-green-500/10 text-green-400 border border-green-500/20',
    dot: 'bg-green-400',
  },
  'in-progress': {
    label: 'Em Andamento',
    classes: 'bg-blue-500/10 text-blue-400 border border-blue-500/20',
    dot: 'bg-blue-400',
  },
  'not-started': {
    label: 'Não Iniciado',
    classes: 'bg-zinc-500/10 text-zinc-400 border border-zinc-500/20',
    dot: 'bg-zinc-500',
  },
  'subscription': {
    label: 'Assinatura',
    classes: 'bg-purple-500/10 text-purple-400 border border-purple-500/20',
    dot: 'bg-purple-400',
  },
  'active': {
    label: 'Ativo',
    classes: 'bg-green-500/10 text-green-400 border border-green-500/20',
    dot: 'bg-green-400',
  },
  'pending': {
    label: 'Pendente',
    classes: 'bg-yellow-500/10 text-yellow-400 border border-yellow-500/20',
    dot: 'bg-yellow-400',
  },
  'expired': {
    label: 'Expirado',
    classes: 'bg-red-500/10 text-red-400 border border-red-500/20',
    dot: 'bg-red-400',
  },
  'syncing': {
    label: 'Sincronizando',
    classes: 'bg-blue-500/10 text-blue-400 border border-blue-500/20',
    dot: 'bg-blue-400',
  },
  'error': {
    label: 'Erro',
    classes: 'bg-red-500/10 text-red-400 border border-red-500/20',
    dot: 'bg-red-400',
  },
  'inactive': {
    label: 'Inativo',
    classes: 'bg-zinc-500/10 text-zinc-500 border border-zinc-700/30',
    dot: 'bg-zinc-600',
  },
}

export function StatusBadge({ status, size = 'sm' }: StatusBadgeProps) {
  const config = statusConfig[status]
  return (
    <span
      className={`
        inline-flex items-center gap-1
        px-2 py-0.5
        rounded-md
        text-xs font-medium
        ${config.classes}
        ${size === 'md' ? 'px-2.5 py-1' : ''}
      `}
    >
      <span className={`w-1.5 h-1.5 rounded-full ${config.dot}`} />
      {config.label}
    </span>
  )
}
