function About() {
  return (
    <section id="about" className="py-20 px-4 bg-gradient-to-br from-purple-50 to-pink-100">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Mari Wujudkan Project Anda
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Dengan pengalaman dan dedikasi tinggi, saya siap membantu mewujudkan visi digital Anda menjadi kenyataan yang luar biasa
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="text-5xl mb-4">💡</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Inovatif</h3>
              <p className="text-gray-600">Solusi kreatif untuk setiap tantangan</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="text-5xl mb-4">⚡</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Cepat</h3>
              <p className="text-gray-600">Pengerjaan efisien tanpa mengorbankan kualitas</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="text-5xl mb-4">🎯</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Tepat Sasaran</h3>
              <p className="text-gray-600">Hasil yang sesuai dengan kebutuhan Anda</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
