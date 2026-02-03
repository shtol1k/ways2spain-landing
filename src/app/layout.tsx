// Root layout is a pass-through - html/body tags are rendered by route group layouts
// (payload) uses Payload's RootLayout which renders html/body
// (site) needs its own html/body tags and imports globals.css
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
