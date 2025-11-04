/**
 * @page HomePage
 * @summary Home page showcasing Ale Hotéis facilities and services
 * @domain showcase
 * @type landing-page
 * @category public
 *
 * @routing
 * - Path: /
 * - Params: none
 * - Query: none
 * - Guards: none (public page)
 *
 * @layout
 * - Layout: RootLayout
 * - Sections: Hero, Features, Gallery, Services
 * - Navigation: Global header
 */
export const HomePage = () => {
  return (
    <div className="home-page">
      <section className="hero-section bg-gradient-to-br from-primary-600 to-primary-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">
            Bem-vindo à Rede Ale Hotéis
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Sua experiência inesquecível à beira-mar começa aqui
          </p>
          <button className="bg-white text-primary-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Explore Nossos Hotéis
          </button>
        </div>
      </section>

      <section className="features-section py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-serif font-bold text-center mb-12 text-gray-900">
            Nossas Comodidades
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="feature-card bg-white p-6 rounded-lg shadow-md">
              <div className="text-primary-600 text-4xl mb-4">🏖️</div>
              <h3 className="text-xl font-semibold mb-2">Praia Privativa</h3>
              <p className="text-gray-600">Acesso exclusivo à praia com serviço completo</p>
            </div>
            <div className="feature-card bg-white p-6 rounded-lg shadow-md">
              <div className="text-primary-600 text-4xl mb-4">🏊</div>
              <h3 className="text-xl font-semibold mb-2">Piscinas</h3>
              <p className="text-gray-600">
                Piscinas aquecidas e infinity pool com vista panorâmica
              </p>
            </div>
            <div className="feature-card bg-white p-6 rounded-lg shadow-md">
              <div className="text-primary-600 text-4xl mb-4">🍽️</div>
              <h3 className="text-xl font-semibold mb-2">Gastronomia</h3>
              <p className="text-gray-600">Restaurantes e bares com culinária internacional</p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section py-16 bg-primary-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-serif font-bold mb-4">Pronto para sua próxima aventura?</h2>
          <p className="text-xl mb-8">Reserve agora e garanta as melhores tarifas</p>
          <button className="bg-white text-primary-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Fazer Reserva
          </button>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
