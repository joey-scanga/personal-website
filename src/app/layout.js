import './globals.css'

export const metadata = {
  title: 'Joey Scanga',
  description: 'Yet another portfolio site',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
