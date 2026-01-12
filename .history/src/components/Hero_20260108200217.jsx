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
      className="min-h-screen w-full flex items-center relative bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:  <img src={hero} alt="MyPortfolio Logo" className="h-10 w-auto" />
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-6 md:px-12">
        <div className="max-w-xl">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Selamat Datang
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-6">
            Saya membuat solusi digital yang inovatif dan berkualitas.
          </p>
          <div className="flex flex-wrap gap-4">
            <button onClick={() => scrollToSection('gallery')} className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition shadow-lg">
              Lihat Portfolio
            </button>
            <button onClick={() => scrollToSection('footer')} className="bg-white/90 text-gray-900 px-6 py-3 rounded-lg text-lg font-semibold hover:bg-white transition shadow-lg">
              Hubungi Saya
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
