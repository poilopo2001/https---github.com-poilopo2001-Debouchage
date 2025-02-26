import { redirect } from 'next/navigation'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Redirection - Hydrocurage Haute Pression Luxembourg',
  description: 'Redirection vers notre page d\'hydrocurage professionnelle',
  robots: {
    index: false,
    follow: false,
  },
}

export default function HydrocurageHautePressionRedirectPage() {
  redirect('/interventions/techniques-hydrocurage')
  return null
}
