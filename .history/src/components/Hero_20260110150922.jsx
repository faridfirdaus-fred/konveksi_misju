import hero from '../assets/hero.webp'

function Hero() {

  return (
    <section 
      id="home" 
      className="h-screen w-full flex items-center relative bg-cover bg-no-repeat bg-right md:bg-center"
      style={{
        backgroundImage: `url(${hero})`
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>
      
      {/* Content */}
      <div className="relative z-10 mx-auto px-4 md:px-20">
        <div className="w-full">
          <h1 className="text-3xl md:text-6xl font-bold text-white mb-4">
            Misju - Konveksi Tas Berkualitas
          </h1>
          <p className="text-base md:text-xl text-white/90 mb-6">
            Spesialis pembuatan tas custom untuk kebutuhan pribadi, bisnis, dan institusi. Kualitas terjamin dengan harga terjangkau.
          </p>
          <div className="flex flex-wrap gap-4">
            <a 
              href="https://wa.me/6285318217545" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-primary text-gray-800 px-6 py-2 rounded-lg transition hover:bg-gray-800 hover:text-primary border-2 border-primary">
                        
              Hubungi Kami
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
