function Partners() {
  const partners = [
    { id: 1, name: 'Company 1', logo: '🏢' },
    { id: 2, name: 'Company 2', logo: '🏭' },
    { id: 3, name: 'Company 3', logo: '🏪' },
    { id: 4, name: 'Company 4', logo: '🏛️' },
    { id: 5, name: 'Company 5', logo: '🏦' },
  ]

  return (
    <section id="partners" className="py-20 px-4 bg-bg-secondary">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Perusahaan yang Telah Bekerja Sama
          </h2>
          <p className="text-xl text-gray-600">
            Dipercaya oleh berbagai perusahaan terkemuka
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {partners.map((partner) => (
            <div key={partner.id} className="flex flex-col items-center justify-center p-6 bg-gray-50 rounded-lg hover:shadow-lg transition">
              <div className="text-6xl mb-4">{partner.logo}</div>
              <p className="text-gray-700 font-semibold">{partner.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Partners
