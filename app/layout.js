
import './globals.css'
import { Playfair_Display } from 'next/font/google'

const playfair = Playfair_Display({ subsets: ['latin'] })

export const metadata = {
  title: "Nikah | Fathima & Sajjad",
  description: "Premium Luxury Nikah Invitation",
}


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
  <link
    href="https://fonts.googleapis.com/css2?family=Cinzel:wght@500;600&family=Great+Vibes&display=swap"
    rel="stylesheet"
  />
</head>
      <body className={playfair.className}>{children}</body>
    </html>
  )
}
