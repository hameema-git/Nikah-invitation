import './globals.css'
import { Playfair_Display } from 'next/font/google'

const playfair = Playfair_Display({ subsets: ['latin'] })

export const metadata = {
  title: "Nikah Invitation | Fathima Nasrine & Muhammed Sajjad",
  description:
    "You are cordially invited to the Nikah ceremony of Fathima Nasrine & Muhammed Sajjad on 12 April 2026.",

  openGraph: {
    title: "Nikah Invitation | Fathima Nasrine & Muhammed Sajjad",
    description:
      "Join us for the blessed Nikah ceremony on 12 April 2026.",
    url: "https://nikah-invitation-eight.vercel.app",
    type: "website",
    images: [
      {
        url: "https://nikah-invitation-eight.vercel.app/images/og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Nikah Invitation | Fathima Nasrine & Muhammed Sajjad",
    description:
      "Join us for the blessed Nikah ceremony on 12 April 2026.",
    images: [
      "https://nikah-invitation-eight.vercel.app/images/og-image.jpg",
    ],
  },
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