import tgif from '../assets/tgif.webp'
import namikita from '../assets/namikita.webp'

function Partners() {
  const partners = [
    { 
      id: 1, 
      name: 'TGI Friday\'s', 
      logo: tgif,
      alt: 'TGI Friday\'s Logo'
    },
    { 
      id: 2, 
      name: 'Namikita', 
      logo: namikita,
      alt: 'Namikita Logo'
    },
  ]

  return (
    <section id="partners" className="py-20 px-20 bg-primary">
      <div className="w-full mx-auto">
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
            <div key={partner.id} className="flex items-center justify-center rounded-lg hover:shadow-lg transition">
              <img 
                src={partner.logo} 
                alt={partner.alt}
                className="max-h-16 md:max-h-36 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Partners
