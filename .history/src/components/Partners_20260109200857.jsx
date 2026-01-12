function Partners() {
  const partners = [
    { 
      id: 1, 
      name: 'TGI Friday\'s', 
      logo: '{tgif}',
      alt: 'TGI Friday\'s Logo'
    },
    { 
      id: 2, 
      name: 'Namikita', 
      logo: 'https://via.placeholder.com/200x100/4A5568/FFFFFF?text=NAMIKITA',
      alt: 'Namikita Logo'
    },
  ]

  return (
    <section id="partners" className="py-20 px-4 bg-secondary">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Perusahaan yang Telah Bekerja Sama
          </h2>
          <p className="text-xl text-gray-600">
            Dipercaya oleh berbagai perusahaan terkemuka
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-8 md:gap-12">
          {partners.map((partner) => (
            <div key={partner.id} className="flex items-center justify-center p-8 bg-white rounded-lg hover:shadow-lg transition min-w-[200px]">
              <img 
                src={partner.logo} 
                alt={partner.alt}
                className="max-h-16 md:max-h-20 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Partners
