function Hero() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section 
      id="home" 
      className="min-h-screen w-full flex items-center bg-cover bg-center bg-no-repeat relative"
      style={{
        backgroundImage: 'url(https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1920&q=80)'
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>
      buat 
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-6">
        <div className="max-w-xl">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Selamat Datang
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-6">
            Saya membuat solusi digital yang inovatif dan berkualitas.
          </p>
          <div className="flex flex-wrap gap-4">
            <button onClick={() => scrollToSection('gallery')} className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition">
              Lihat Portfolio
            </button>
            <button onClick={() => scrollToSection('footer')} className="bg-white text-blue-600 px-6 py-3 rounded-lg text-lg font-semibold border-2 border-white hover:bg-blue-50 transition">
              Hubungi Saya
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
