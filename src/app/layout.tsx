import type { Metadata } from "next"
import { Anta, Turret_Road } from "next/font/google"

import "./globals.css"

const anta = Anta({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-anta",
  display: "swap",
})

const turretRoad = Turret_Road({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "800"],
  variable: "--font-turret-road",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Harry Carr",
  description:
    "Welcome to the portfolio of Harry Carr, a software developer specializing in full-stack applications. Explore my projects, skills, and experience in the tech industry.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${anta.variable} ${turretRoad.variable}`}>
      <body>{children}</body>
    </html>
  )
}
