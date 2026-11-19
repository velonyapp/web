import { Geist_Mono, Inter } from "next/font/google"

import "./globals.css"
import { ThemeProvider } from "@/components/provider/theme-provider"
import { cn } from "@/lib/utils"
import { DatabaseProvider } from "@/components/provider/database-provider"
import { QueryProvider } from "@/components/provider/query-provider"

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" })

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export const metadata = {
  title: "VelonY",
  description: "Build, share, and chat with AI agents...",
  openGraph: {
    title: "VelonY",
    description: "Build, share, and chat with AI agents...",
    url: "https://velony.app",
    siteName: "VelonY",
    images: [
      {
        url: "https://velony.app/images/velony-icon.png",
        width: 1200,
        height: 630,
        alt: "VelonY Preview",
      },
    ],
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(
        "antialiased",
        fontMono.variable,
        "font-sans",
        inter.variable
      )}
    >
      <body>
        <ThemeProvider>
          <QueryProvider>
            <DatabaseProvider>{children}</DatabaseProvider>
          </QueryProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
