import { useState } from 'react';
import { Link } from 'react-router-dom';
import { clsx } from 'clsx';

/**
 * @component Header
 * @summary Global application header with navigation
 * @domain core
 * @type ui-component
 * @category navigation
 */
export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-serif font-bold text-primary-700">Ale Hotéis</span>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-primary-600 transition-colors">
              Início
            </Link>
            <Link to="/quartos" className="text-gray-700 hover:text-primary-600 transition-colors">
              Quartos
            </Link>
            <Link to="/servicos" className="text-gray-700 hover:text-primary-600 transition-colors">
              Serviços
            </Link>
            <Link to="/galeria" className="text-gray-700 hover:text-primary-600 transition-colors">
              Galeria
            </Link>
            <Link to="/contato" className="text-gray-700 hover:text-primary-600 transition-colors">
              Contato
            </Link>
            <button className="bg-primary-600 text-white px-6 py-2 rounded-lg hover:bg-primary-700 transition-colors">
              Reservar
            </button>
          </nav>

          <button
            className="md:hidden text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        <div
          className={clsx(
            'md:hidden overflow-hidden transition-all duration-300',
            isMenuOpen ? 'max-h-96' : 'max-h-0'
          )}
        >
          <nav className="py-4 space-y-2">
            <Link to="/" className="block py-2 text-gray-700 hover:text-primary-600">
              Início
            </Link>
            <Link to="/quartos" className="block py-2 text-gray-700 hover:text-primary-600">
              Quartos
            </Link>
            <Link to="/servicos" className="block py-2 text-gray-700 hover:text-primary-600">
              Serviços
            </Link>
            <Link to="/galeria" className="block py-2 text-gray-700 hover:text-primary-600">
              Galeria
            </Link>
            <Link to="/contato" className="block py-2 text-gray-700 hover:text-primary-600">
              Contato
            </Link>
            <button className="w-full bg-primary-600 text-white px-6 py-2 rounded-lg hover:bg-primary-700 transition-colors mt-2">
              Reservar
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
};
