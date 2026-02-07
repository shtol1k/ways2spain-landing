export function PrintStyles() {
  return (
    <style
      dangerouslySetInnerHTML={{
        __html: `
          @media print {
            nav, header, footer, .print\\:hidden,
            [data-nav], [data-header], aside .print\\:hidden,
            .guide-resources, .guide-toc, .print-button,
            button[onclick*="print"] { display: none !important; }
            .guide-step-accordion [data-state="closed"] [data-radix-collection-item] {
              display: block !important;
            }
            .guide-step-accordion [data-state="closed"] [data-state="closed"] > div {
              overflow: visible !important;
              height: auto !important;
            }
            body { print-color-adjust: exact; -webkit-print-color-adjust: exact; }
            a[href]::after { content: " (" attr(href) ")"; font-size: 0.85em; color: #666; }
          }
        `,
      }}
    />
  )
}
