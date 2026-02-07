'use client'

import { Button } from '@/components/ui/button'
import { Download } from 'lucide-react'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'

export function PrintButton() {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            variant="outline"
            size="sm"
            className="w-full print:hidden"
            onClick={() => window.print()}
          >
            <Download className="mr-2 size-4" />
            Завантажити PDF
          </Button>
        </TooltipTrigger>
        <TooltipContent side="left">
          <p>Зберегти як PDF або роздрукувати</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}
