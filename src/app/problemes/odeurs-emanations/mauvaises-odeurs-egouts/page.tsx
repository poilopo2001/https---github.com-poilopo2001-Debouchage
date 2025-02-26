import { redirect } from 'next/navigation'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Redirection - Mauvaises Odeurs d\'Égouts Luxembourg',
  description: 'Redirection vers notre page d\'élimination des odeurs',
  robots: {
    index: false,
    follow: false,
  },
}

export default function MauvaisesOdeursEgoutsRedirectPage() {
  redirect('/problemes/elimination-odeurs')
  return null
}
