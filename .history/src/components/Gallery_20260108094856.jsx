function Gallery() {
  const galleryItems = [
    { id: 1, title: 'Project 1', image: '🖼️', description: 'Deskripsi project 1' },
    { id: 2, title: 'Project 2', image: '🎨', description: 'Deskripsi project 2' },
    { id: 3, title: 'Project 3', image: '📷', description: 'Deskripsi project 3' },
    { id: 4, title: 'Project 4', image: '🎭', description: 'Deskripsi project 4' },
    { id: 5, title: 'Project 5', image: '🌄', description: 'Deskripsi project 5' },
    { id: 6, title: 'Project 6', image: '🌅', description: 'Deskripsi project 6' },
  ]

  return (
    <section id="gallery" className="py-20 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Portfolio & Gallery
          </h2>
          <p className="text-xl text-gray-600">
            Koleksi project dan karya terbaik saya
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryItems.map((item) => (
            <div key={item.id} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition">
              <div className="h-48 bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center text-8xl">
                {item.image}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
                <button className="mt-4 text-blue-600 font-semibold hover:text-blue-700">
                  Lihat Detail →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Gallery
