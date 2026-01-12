
import tas1 from '../assets/tas1.webp'
import tas2 from '../assets/tas2.webp'
import tas3 from '../assets/tas3.webp'
import tas4 from '../assets/tas4.webp'
import tas5 from '../assets/tas5.webp'
import tas6 from '../assets/tas6.webp'
import tas7 from '../assets/tas7.webp'
import tas8 from '../assets/tas8.webp'
import tas9 from '../assets/tas9.webp'
import tas10 from '../assets/tas10.webp'

function Gallery() {
  const galleryItems = [
    { id: 1, title: 'TAS CUSTOM PREMIUM', image: tas1, description: 'Tas custom berkualitas tinggi dengan desain eksklusif' },
    { id: 2, title: 'BACKPACK PROFESIONAL', image: tas2, description: 'Backpack ergonomis untuk kebutuhan profesional' },
    { id: 3, title: 'TAS LAPTOP ELEGAN', image: tas3, description: 'Tas laptop dengan desain modern dan praktis' },
    { id: 4, title: 'MESSENGER BAG STYLISH', image: tas4, description: 'Tas selempang dengan gaya urban dan fungsional' },
    { id: 5, title: 'TRAVEL BAG MULTIFUNGSI', image: tas5, description: 'Tas travel dengan banyak kompartemen' },
    { id: 6, title: 'TOTE BAG CASUAL', image: tas6, description: 'Tas tote santai untuk aktivitas sehari-hari' },
    { id: 7, title: 'SPORT BAG', image: tas7, description: 'Tas olahraga dengan desain sporty' },
    { id: 8, title: 'CLUTCH BAG', image: tas8, description: 'Tas clutch elegan untuk acara formal' },
    { id: 9, title: 'SLING BAG', image: tas9, description: 'Tas selempang compact dan praktis' },
    { id: 10, title: 'DUFFLE BAG', image: tas10, description: 'Tas duffle untuk traveling' },
  ]

  return (
    <section id="gallery" className="py-12 md:py-20 bg-secondary">
      <div className="w-full">
        {/* Header */}
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl md:text-4xl px-4 font-bold text-gray-900 mb-3 md:mb-4">
            Galeri Produk Kami
          </h2>
          <p className="text-base md:text-xl px-4 md:px-20 text-gray-600">
            Koleksi tas berkualitas dengan berbagai model dan fungsi
          </p>
        </div>

        {/* Grid Gallery */}
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-3 md:gap-4 mb-8 md:mb-12">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              className="relative aspect-square overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer group"
            >
              {/* Image */}
              <img 
                src={item.image} 
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-all duration-300"></div>
            </div>
          ))}
        </div>

      \
      </div>
    </section>
  )
}

export default Gallery
