import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import type { GuideFAQ as GuideFAQType } from '@/api/guides'

interface GuideFAQProps {
  faqs: GuideFAQType[] | null | undefined
}

export function GuideFAQ({ faqs }: GuideFAQProps) {
  if (!faqs?.length) return null

  return (
    <section className="mt-12" aria-label="Часті питання">
      <h2 className="text-2xl font-bold mb-6">Часті питання</h2>
      <Accordion type="single" collapsible className="border rounded-lg divide-y">
        {faqs.map((faq, index) => (
          <AccordionItem
            key={faq.id}
            value={`faq-${index}`}
            className="px-4 border-b-0"
          >
            <AccordionTrigger className="hover:no-underline py-4 text-left">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent>
              {faq.answer_html ? (
                <div
                  className="prose prose-neutral dark:prose-invert max-w-none pb-4"
                  dangerouslySetInnerHTML={{ __html: faq.answer_html }}
                />
              ) : null}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  )
}
