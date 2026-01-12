function HeroB() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="pt-24 pb-20 px-4 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Selamat Datang di Portfolio Saya
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Saya adalah seorang profesional yang berpengalaman dalam menciptakan solusi digital yang inovatif dan berkualitas tinggi
          </p>
          <div className="flex justify-center gap-4">
            <button onClick={() => scrollToSection('gallery')} className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition">
              Lihat Portfolio
            </button>
            <button onClick={() => scrollToSection('footer')} className="bg-white text-blue-600 px-8 py-3 rounded-lg text-lg font-semibold border-2 border-blue-600 hover:bg-blue-50 transition">
              Hubungi Saya
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
