import type { Metadata } from 'next'
import { Dosis, Inter } from 'next/font/google'
import './globals.css'
import Image from "next/image";

const dosis = Dosis({ subsets: ['latin']})


export const metadata: Metadata = {
  title: 'Rasera To-do',
  description: 'Gerencie suas tarefas',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${dosis.className} flex justify-center flex-col mt-10 bg-neutral-900 items-center`}>
        <Image
          src="/images/logo.svg"
          width={200}
          height={200}
          alt="Logo - meta diária"
        />

        {children}
      </body>
    </html>
  )
}
