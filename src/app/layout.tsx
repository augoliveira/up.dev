import StyledComponentsRegistry from '#/lib/registry'
import '#/styles/globals.css'

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="Pt-BR">
      <body>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  )
}
