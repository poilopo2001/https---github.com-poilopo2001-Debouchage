import { redirect } from 'next/navigation'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Redirection - Débouchage Furet Électrique Luxembourg',
  description: 'Redirection vers notre page de techniques de furet professionnelles',
  robots: {
    index: false,
    follow: false,
  },
}

export default function FuretElectriqueRedirectPage() {
  redirect('/interventions/techniques-furet')
  return null
}
