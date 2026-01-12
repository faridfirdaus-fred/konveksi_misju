import { useState } from 'react'
import tas1 from '../assets/tas1.webp'
import tas2 from '../assets/tas2.webp'
import tas3 from '../assets/tas3.webp'
import tas4 from '../assets/tas4.webp'
import tas5 from '../assets/tas5.webp'
import tas6 from '../assets/tas6.webp'

function Gallery() {
  const [currentImage, setCurrentImage] = useState(0)

  const galleryItems = [
    { id: 1, title: 'Tas Custom Premium', image: tas1, description: 'Tas custom berkualitas tinggi dengan desain eksklusif' },
    { id: 2, title: 'Backpack Profesional', image: tas2, description: 'Backpack ergonomis untuk kebutuhan profesional' },
    { id: 3, title: 'Tas Laptop Elegan', image: tas3, description: 'Tas laptop dengan desain modern dan praktis' },
    { id: 4, title: 'Messenger Bag Stylish', image: tas4, description: 'Tas selempang dengan gaya urban dan fungsional' },
    { id: 5, title: 'Travel Bag Multifungsi', image: tas5, description: 'Tas travel dengan banyak kompartemen' },
    { id: 6, title: 'Tote Bag Casual', image: tas6, description: 'Tas tote santai untuk aktivitas sehari-hari' },
  ]

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % galleryItems.length)
  }

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + galleryItems.length) % galleryItems.length)
  }

  const goToImage = (index) => {
    setCurrentImage(index)
  }

  return (
    <section id="gallery" className="py-12 md:py-20 px-4 bg-secondary">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3 md:mb-4">
            Galeri Produk Kami
          </h2>
          <p className="text-base md:text-xl text-gray-600">
            Koleksi tas berkualitas dengan berbagai model dan fungsi
          </p>
        </div>

        {/* Main Carousel */}
        <div className="relative max-w-5xl mx-auto mb-6 md:mb-8">
          {/* Main Image Container */}
          <div className="relative aspect-[4/3] md:aspect-[16/9] rounded-lg md:rounded-xl overflow-hidden shadow-2xl bg-white">
            <img 
              src={galleryItems[currentImage].image} 
              alt={galleryItems[currentImage].title}
              className="w-full h-full object-cover transition-all duration-500"
            />
            
            {/* Overlay with Title & Description */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent p-4 md:p-6">
              <h3 className="text-xl md:text-3xl font-bold text-white mb-1 md:mb-2">
                {galleryItems[currentImage].title}
              </h3>
              <p className="text-sm md:text-base text-white/90">
                {galleryItems[currentImage].description}
              </p>
            </div>

            {/* Navigation Buttons - Desktop */}
            <button 
              onClick={prevImage}
              className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 bg-white/95 hover:bg-white p-3 rounded-full shadow-lg transition-all duration-200 items-center justify-center group"
              aria-label="Previous image"
            >
              <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <button 
              onClick={nextImage}
              className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 bg-white/95 hover:bg-white p-3 rounded-full shadow-lg transition-all duration-200 items-center justify-center group"
              aria-label="Next image"
            >
              <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Counter Badge */}
            <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-semibold">
              {currentImage + 1} / {galleryItems.length}
            </div>
          </div>

          {/* Mobile Navigation Buttons */}
          <div className="flex md:hidden justify-center gap-4 mt-4">
            <button 
              onClick={prevImage}
              className="bg-white hover:bg-gray-100 p-3 rounded-full shadow-lg transition-all"
              aria-label="Previous image"
            >
              <svg className="w-5 h-5 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <button 
              onClick={nextImage}
              className="bg-white hover:bg-gray-100 p-3 rounded-full shadow-lg transition-all"
              aria-label="Next image"
            >
              <svg className="w-5 h-5 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Thumbnail Grid */}
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-3 md:grid-cols-6 gap-2 md:gap-4">
            {galleryItems.map((item, index) => (
              <button
                key={item.id}
                onClick={() => goToImage(index)}
                className={`relative aspect-square rounded-lg overflow-hidden transition-all duration-300 ${
                  currentImage === index 
                    ? 'ring-4 ring-primary scale-105 shadow-xl' 
                    : 'hover:scale-105 hover:shadow-lg opacity-70 hover:opacity-100'
                }`}
              >
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
                {currentImage === index && (
                  <div className="absolute inset-0 bg-primary/20 flex items-center justify-center">
                    <div className="w-3 h-3 bg-primary rounded-full"></div>
                  </div>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center mt-8 md:mt-12">
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
