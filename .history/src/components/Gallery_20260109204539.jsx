import { useState } from 'react'

function Gallery() {
  const galleryItems = [
    { id: 1, title: 'TAS CUSTOM PREMIUM', image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&q=80', description: 'Tas custom berkualitas tinggi dengan desain eksklusif' },
    { id: 2, title: 'BACKPACK PROFESIONAL', image: 'https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?w=800&q=80', description: 'Backpack ergonomis untuk kebutuhan profesional' },
    { id: 3, title: 'TAS LAPTOP ELEGAN', image: 'https://images.unsplash.com/photo-1547949003-9792a18a2601?w=800&q=80', description: 'Tas laptop dengan desain modern dan praktis' },
    { id: 4, title: 'MESSENGER BAG STYLISH', image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=800&q=80', description: 'Tas selempang dengan gaya urban dan fungsional' },
    { id: 5, title: 'TRAVEL BAG MULTIFUNGSI', image: 'https://images.unsplash.com/photo-1581605405669-fcdf81165afa?w=800&q=80', description: 'Tas travel dengan banyak kompartemen' },
    { id: 6, title: 'TOTE BAG CASUAL', image: 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=800&q=80', description: 'Tas tote santai untuk aktivitas sehari-hari' },
  ]

  return (
    <section id="gallery" className="py-12 md:py-20 bg-secondary">
      <div className="w-full px-4 md:px-8 lg:px-16">
        {/* Header */}
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3 md:mb-4">
            Galeri Produk Kami
          </h2>
          <p className="text-base md:text-xl text-gray-600">
            Koleksi tas berkualitas dengan berbagai model dan fungsi
          </p>
        </div>

        {/* Grid Gallery */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4 mb-8 md:mb-12">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              className="relative aspect-square overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer group"
            >
              {/* Image */}
              <img 
                src={item.image} 
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end">
                <div className="p-4 md:p-6 w-full">
                  <h3 className="text-white font-bold text-sm md:text-lg lg:text-xl leading-tight">
                    {item.title}
                  </h3>
                </div>
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-all duration-300"></div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <a 
            href="https://wa.me/6285318217545" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-primary text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-gray-800 transition shadow-lg"
          >
            Pesan Tas Custom Sekarang
          </a>
        </div>
      </div>
    </section>
  )
}

export default Gallery
