import { redirect } from 'next/navigation'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Redirection - Odeurs Salle de Bain Luxembourg',
  description: 'Redirection vers notre page d\'élimination des odeurs',
  robots: {
    index: false,
    follow: false,
  },
}

export default function OdeursSalleBainRedirectPage() {
  redirect('/problemes/elimination-odeurs')
  return null
}
