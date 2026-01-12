import { useState } from 'react'
import './App.css'

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  // Data perusahaan yang sudah bekerja sama
  const partners = [
    { id: 1, name: 'Company 1', logo: '🏢' },
    { id: 2, name: 'Company 2', logo: '🏭' },
    { id: 3, name: 'Company 3', logo: '🏪' },
    { id: 4, name: 'Company 4', logo: '🏛️' },
    { id: 5, name: 'Company 5', logo: '🏦' },
  ]

  // Data gallery
  const galleryItems = [
    { id: 1, title: 'Project 1', image: '🖼️', description: 'Deskripsi project 1' },
    { id: 2, title: 'Project 2', image: '🎨', description: 'Deskripsi project 2' },
    { id: 3, title: 'Project 3', image: '📷', description: 'Deskripsi project 3' },
    { id: 4, title: 'Project 4', image: '🎭', description: 'Deskripsi project 4' },
    { id: 5, title: 'Project 5', image: '🌄', description: 'Deskripsi project 5' },
    { id: 6, title: 'Project 6', image: '🌅', description: 'Deskripsi project 6' },
  ]

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMobileMenuOpen(false)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo - Kiri */}
            <div className="flex-shrink-0">
              <a href="#home" className="text-2xl font-bold text-blue-600">
                MyPortfolio
              </a>
            </div>

            {/* Navigation - Tengah (Desktop) */}
            <div className="hidden md:flex space-x-8">
              <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-blue-600 transition">
                Home
              </button>
              <button onClick={() => scrollToSection('partners')} className="text-gray-700 hover:text-blue-600 transition">
                Partners
              </button>
              <button onClick={() => scrollToSection('gallery')} className="text-gray-700 hover:text-blue-600 transition">
                Gallery
              </button>
              <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-blue-600 transition">
                About
              </button>
            </div>

            {/* Contact Button - Kanan */}
            <div className="hidden md:block">
              <button 
                onClick={() => scrollToSection('footer')} 
                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
              >
                Contact
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-gray-700 hover:text-blue-600"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button onClick={() => scrollToSection('home')} className="block w-full text-left px-3 py-2 text-gray-700 hover:bg-gray-100">
                Home
              </button>
              <button onClick={() => scrollToSection('partners')} className="block w-full text-left px-3 py-2 text-gray-700 hover:bg-gray-100">
                Partners
              </button>
              <button onClick={() => scrollToSection('gallery')} className="block w-full text-left px-3 py-2 text-gray-700 hover:bg-gray-100">
                Gallery
              </button>
              <button onClick={() => scrollToSection('about')} className="block w-full text-left px-3 py-2 text-gray-700 hover:bg-gray-100">
                About
              </button>
              <button onClick={() => scrollToSection('footer')} className="block w-full text-left px-3 py-2 bg-blue-600 text-white hover:bg-blue-700 rounded">
                Contact
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section 1 */}
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

      {/* Partners Section */}
      <section id="partners" className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Perusahaan yang Telah Bekerja Sama
            </h2>
            <p className="text-xl text-gray-600">
              Dipercaya oleh berbagai perusahaan terkemuka
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {partners.map((partner) => (
              <div key={partner.id} className="flex flex-col items-center justify-center p-6 bg-gray-50 rounded-lg hover:shadow-lg transition">
                <div className="text-6xl mb-4">{partner.logo}</div>
                <p className="text-gray-700 font-semibold">{partner.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
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

      {/* Hero Section 2 */}
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

      {/* Footer */}
      <footer id="footer" className="bg-gray-900 text-white py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* About */}
            <div>
              <h3 className="text-2xl font-bold mb-4">MyPortfolio</h3>
              <p className="text-gray-400">
                Menciptakan solusi digital yang inovatif dan berkualitas untuk kesuksesan bisnis Anda
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-xl font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <button onClick={() => scrollToSection('home')} className="text-gray-400 hover:text-white transition">
                    Home
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection('partners')} className="text-gray-400 hover:text-white transition">
                    Partners
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection('gallery')} className="text-gray-400 hover:text-white transition">
                    Gallery
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection('about')} className="text-gray-400 hover:text-white transition">
                    About
                  </button>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-xl font-bold mb-4">Contact</h3>
              <ul className="space-y-2 text-gray-400">
                <li>📧 email@example.com</li>
                <li>📱 +62 123 4567 8900</li>
                <li>📍 Jakarta, Indonesia</li>
              </ul>
              <div className="flex gap-4 mt-4">
                <a href="#" className="text-2xl hover:text-blue-400 transition">🔗</a>
                <a href="#" className="text-2xl hover:text-blue-400 transition">💼</a>
                <a href="#" className="text-2xl hover:text-blue-400 transition">📸</a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2026 MyPortfolio. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
