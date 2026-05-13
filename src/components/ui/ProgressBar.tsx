import React from 'react'

interface ProgressBarProps {
  value: number
  max?: number
  size?: 'xs' | 'sm' | 'md'
  color?: 'blue' | 'green' | 'purple' | 'orange' | 'zinc'
  showLabel?: boolean
  animated?: boolean
  className?: string
}

const sizeClasses = {
  xs: 'h-0.5',
  sm: 'h-1',
  md: 'h-1.5',
}

const colorClasses = {
  blue: 'bg-blue-500',
  green: 'bg-green-500',
  purple: 'bg-purple-500',
  orange: 'bg-orange-500',
  zinc: 'bg-zinc-500',
}

export function ProgressBar({
  value,
  max = 100,
  size = 'sm',
  color = 'blue',
  showLabel = false,
  animated = false,
  className = '',
}: ProgressBarProps) {
  const percentage = Math.min(Math.round((value / max) * 100), 100)

  const getColor = () => {
    if (color !== 'blue') return colorClasses[color]
    if (percentage === 100) return 'bg-green-500'
    if (percentage >= 60) return 'bg-blue-500'
    if (percentage >= 30) return 'bg-blue-500'
    return 'bg-zinc-500'
  }

  return (
    <div className={`w-full ${className}`}>
      {showLabel && (
        <div className="flex items-center justify-between mb-1">
          <span className="text-xs text-zinc-500">Progress</span>
          <span className="text-xs font-medium text-zinc-400">{percentage}%</span>
        </div>
      )}
      <div className={`w-full bg-zinc-800 rounded-full overflow-hidden ${sizeClasses[size]}`}>
        <div
          className={`
            ${sizeClasses[size]}
            rounded-full
            ${getColor()}
            ${animated ? 'transition-all duration-1000 ease-out' : ''}
          `}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  )
}
