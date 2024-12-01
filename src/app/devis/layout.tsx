import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Demande de Devis | Débouchage Luxembourg',
  description: 'Obtenez un devis gratuit pour nos services de débouchage à Luxembourg. Estimation rapide et réponse dans les 24h.',
};

export default function DevisLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gray-50">
      {children}
    </div>
  );
}
