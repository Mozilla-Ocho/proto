import '../styles/globals.scss'
import 'react-element-forge/dist/style.css'
import { Inter, Space_Grotesk } from 'next/font/google'
import { UserProvider } from '@auth0/nextjs-auth0/client'
import { getSession } from '@auth0/nextjs-auth0'
import { ReactNode } from 'react'

const inter = Inter({
  variable: '--inter-font',
  subsets: ['latin'],
  display: 'swap',
  preload: true,
})

const space_grotesk = Space_Grotesk({
  variable: '--space_grotesk-font',
  subsets: ['latin'],
  display: 'swap',
  preload: true,
})

export default async function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  const session = await getSession()
  const user = session?.user

  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="shortcut icon" href="/favicon.ico" />
      </head>
      <UserProvider>
        <body className={`${inter.variable} ${space_grotesk.variable}`}>
          <div id="LP_modal_portal"></div>
          {children}
        </body>
      </UserProvider>
    </html>
  )
}
