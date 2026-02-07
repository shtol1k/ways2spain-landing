import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { Info, AlertTriangle, AlertCircle, CheckCircle } from 'lucide-react'
import { cn } from '@/lib/utils'

const calloutVariants = cva(
  'relative w-full rounded-lg border p-4 [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:size-5 shrink-0',
  {
    variants: {
      variant: {
        info:
          'border-blue-500/50 bg-blue-500/10 text-blue-700 dark:text-blue-300 [&>svg]:text-blue-600 dark:[&>svg]:text-blue-400',
        warning:
          'border-amber-500/50 bg-amber-500/10 text-amber-800 dark:text-amber-200 [&>svg]:text-amber-600 dark:[&>svg]:text-amber-400',
        alert:
          'border-destructive/50 bg-destructive/10 text-destructive [&>svg]:text-destructive',
        success:
          'border-emerald-500/50 bg-emerald-500/10 text-emerald-800 dark:text-emerald-200 [&>svg]:text-emerald-600 dark:[&>svg]:text-emerald-400',
      },
    },
    defaultVariants: {
      variant: 'info',
    },
  }
)

const iconMap = {
  info: Info,
  warning: AlertTriangle,
  alert: AlertCircle,
  success: CheckCircle,
}

export interface CalloutProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof calloutVariants> {
  title?: string
}

const Callout = React.forwardRef<HTMLDivElement, CalloutProps>(
  ({ className, variant = 'info', title, children, ...props }, ref) => {
    const Icon = iconMap[variant ?? 'info']
    return (
      <div
        ref={ref}
        role="alert"
        className={cn(calloutVariants({ variant }), className)}
        {...props}
      >
        <Icon className="[&~*]:pl-7" />
        <div>
          {title ? (
            <h5 className="mb-1 font-medium leading-none tracking-tight">{title}</h5>
          ) : null}
          <div className="text-sm [&_p]:leading-relaxed [&_p]:mb-2 last:[&_p]:mb-0">
            {children}
          </div>
        </div>
      </div>
    )
  }
)
Callout.displayName = 'Callout'

export { Callout, calloutVariants }
