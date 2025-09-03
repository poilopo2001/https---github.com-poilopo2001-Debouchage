import { Metadata } from 'next'

export const metadata: Metadata = {
  title: '🆘 Contact Urgence | Débouchage Express Luxembourg 24h',
  description: 'Contactez notre service de débouchage de canalisation disponible 24h/24 et 7j/7 au Luxembourg. Intervention rapide en moins de 2 heures dans votre région.',
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
