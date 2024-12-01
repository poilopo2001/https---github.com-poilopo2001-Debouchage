import { Metadata } from 'next'
import { problemCategories } from '@/data/problems'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Problèmes de Plomberie Luxembourg | Solutions Rapides',
  description: 'Découvrez nos solutions pour tous types de problèmes de plomberie au Luxembourg. Intervention rapide 24/7, expertise professionnelle. ☎️ +352 621 469 018'
}

export default function ProblemesPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Problèmes de Plomberie</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {problemCategories.map((category) => (
          <div key={category.id} className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4">{category.name}</h2>
            <p className="text-gray-600 mb-4">{category.description}</p>
            
            <ul className="space-y-2">
              {category.problems.map((problem) => (
                <li key={problem.id}>
                  <Link 
                    href={`/problemes/${category.slug}/${problem.slug}`}
                    className="text-blue-600 hover:text-blue-800 flex items-center"
                  >
                    <span className="mr-2">{problem.icon}</span>
                    {problem.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}
