import { redirect } from 'next/navigation'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Redirection - Hydrocurage Luxembourg',
  description: 'Redirection vers notre page d\'hydrocurage professionnelle',
  robots: {
    index: false,
    follow: false,
  },
}

export default function HydrocurageRedirectPage() {
  redirect('/interventions/techniques-hydrocurage')
  return null
}
