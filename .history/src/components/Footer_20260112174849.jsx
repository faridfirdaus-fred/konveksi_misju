import logo from '../assets/logo.webp'
import { MdEmail, MdPhone, MdLocationOn } from 'react-icons/md'

function Footer() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer id="footer" className="bg-gray-800 text-white py-12 md:py-16 px-4 md:px-20 lg:px-20">
      <div className="w-full mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-8">
          {/* About */}
          <div>
            <img src={logo} alt="Misju Logo" className="h-12 w-auto mb-4" />
            <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">Misju</h3>
            <p className="text-gray-300 text-sm md:text-base leading-relaxed">
              Konveksi tas berkualitas tinggi dengan desain custom untuk kebutuhan pribadi, bisnis, dan institusi.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4">Navigasi Cepat</h3>
            <ul className="space-y-2">
              <li>
                <button onClick={() => scrollToSection('home')} className="text-gray-300 hover:text-white transition text-sm md:text-base">
                  Beranda
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('gallery')} className="text-gray-300 hover:text-white transition text-sm md:text-base">
                  Galeri
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('about')} className="text-gray-300 hover:text-white transition text-sm md:text-base">
                  Tentang
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('partners')} className="text-gray-300 hover:text-white transition text-sm md:text-base">
                  Mitra
                </button>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4">Hubungi Kami</h3>
            <ul className="space-y-2 text-gray-300 text-sm md:text-base">
              <li className="flex items-start gap-2">
                <span>📧</span>
                <span>misju@example.com</span>
              </li>
              <li className="flex items-start gap-2">
                <span>📱</span>
                <span>+6285318217545</span>
              </li>
              <li className="flex items-start gap-2">
                <span>📍</span>
                <span>Kota Tasikmalaya, Indonesia</span>
              </li>
            </ul>
            <div className="mt-6">
              <a 
                href="https://wa.me/6285318217545" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-primary text-white px-6 py-2 rounded-lg transition hover:bg-white hover:text-primary shadow-lg text-sm md:text-base font-semibold"
              >
                WhatsApp Kami
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-6 md:pt-8 text-center">
          <p className="text-gray-400 text-sm md:text-base">&copy; 2026 Misju. Semua hak cipta dilindungi.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
