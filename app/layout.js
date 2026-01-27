import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Kazi Shofi Ahmed | Portfolio',
  description: 'Full Stack Developer & AI Enthusiast',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="hero-bg">
          <div className="blob blob-1" />
          <div className="blob blob-2" />
        </div>
        {children}
      </body>
    </html>
  )
}
