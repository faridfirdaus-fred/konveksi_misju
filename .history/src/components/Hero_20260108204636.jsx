import hero from '../assets/hero.webp'

function Hero() {

  return (
    <section 
      id="home" 
      className="min-h-screen w-full flex items-center relative bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${hero})`
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>
      
      {/* Content */}
      <div className="relative z-10 w-full mx-auto">
        <div className="w-">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Misju - Konveksi Tas Berkualitas
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-6">
            Spesialis pembuatan tas custom untuk kebutuhan pribadi, bisnis, dan institusi. Kualitas terjamin dengan harga terjangkau.
          </p>
          <div className="flex flex-wrap gap-4">
            <a 
              href="https://wa.me/6285318217545" 
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-secondary hover:text-primary transition shadow-lg"
            >
              Hubungi Kami
            </a>
          </div>
        </div>
        <div></div>
      </div>
    </section>
  )
}

export default Hero
