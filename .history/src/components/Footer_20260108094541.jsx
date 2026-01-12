function Footer() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
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
  )
}

export default Footer
