import { redirect } from 'next/navigation'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Redirection - Débouchage Furet Manuel Luxembourg',
  description: 'Redirection vers notre page de techniques de furet professionnelles',
  robots: {
    index: false,
    follow: false,
  },
}

export default function FuretManuelRedirectPage() {
  redirect('/interventions/techniques-furet')
  return null
}
