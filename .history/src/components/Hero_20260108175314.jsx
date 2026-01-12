function Hero() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="min-h-screen w-full flex items-center bg-white">
      <div className="max-w-7xl mx-auto w-full px-6">
        <div className="flex flex-col md:flex-row items-start gap-8">
          <div className="w-full md:w-1/2 flex flex-col justify-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
              Selamat Datang
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-6 max-w-md">
              Saya membuat solusi digital yang inovatif dan berkualitas.
            </p>
            <div className="flex flex-wrap gap-4">
              <button onClick={() => scrollToSection('gallery')} className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition">
                Lihat Portfolio
              </button>
              <button onClick={() => scrollToSection('footer')} className="bg-white text-blue-600 px-6 py-3 rounded-lg text-lg font-semibold border-2 border-blue-600 hover:bg-blue-50 transition">
                Hubungi Saya
              </button>
            </div>
          </div>
          <div className="hidden md:block md:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80" 
              alt="Hero Image" 
              className="w-full h-96 object-cover rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
