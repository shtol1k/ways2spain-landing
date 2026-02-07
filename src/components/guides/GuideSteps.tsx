'use client'

import { Accordion } from '@/components/ui/accordion'
import { GuideStep } from '@/components/guides/GuideStep'
import type { GuideStepBlock } from '@/api/guides'

interface GuideStepsProps {
  steps: (GuideStepBlock | { blockType: string })[] | null | undefined
}

export function GuideSteps({ steps }: GuideStepsProps) {
  const guideSteps = (steps ?? []).filter(
    (s): s is GuideStepBlock => s.blockType === 'guideStep'
  )
  if (guideSteps.length === 0) return null

  return (
    <Accordion
      type="single"
      collapsible
      defaultValue="step-1"
      className="guide-steps-accordion space-y-0"
    >
      {guideSteps.map((step, index) => (
        <GuideStep key={step.id} step={step} stepNumber={index + 1} />
      ))}
    </Accordion>
  )
}
