import Link from 'next/link'

interface CategoryCardProps {
  title: string
  description: string
  icon?: string
  href: string
  className?: string
}

export default function CategoryCard({ title, description, icon, href, className = '' }: CategoryCardProps) {
  return (
    <Link 
      href={href}
      className={`group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 relative overflow-hidden ${className}`}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent" />
        <div className="h-full w-full bg-grid-pattern" />
      </div>

      {/* Content */}
      <div className="relative">
        {icon && (
          <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
            {icon}
          </div>
        )}
        <h2 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
          {title}
        </h2>
        <p className="text-gray-600 mb-6 line-clamp-3">
          {description}
        </p>
        <div className="text-blue-600 font-semibold flex items-center group-hover:translate-x-2 transition-transform duration-300">
          En savoir plus
          <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </Link>
  )
}
