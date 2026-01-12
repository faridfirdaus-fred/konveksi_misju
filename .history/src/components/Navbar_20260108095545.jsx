import { useState } from 'react'

function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    const scrollToSection = (id) => {
        const element = document.getElementById(id)
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
        }
        setIsMobileMenuOpen(false)
    }

    return (
        <nav className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo - Kiri */}
                    <div className="shrink-0">
                        <a href="#home" className="text-2xl font-bold text-blue-600">
                            PortfolioKu
                        </a>
                    </div>

                    {/* Navigation - Tengah (Desktop) */}
                    <div className="hidden md:flex space-x-8">
                        <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-blue-600 transition">
                            Beranda
                        </button>
                        <button onClick={() => scrollToSection('partners')} className="text-gray-700 hover:text-blue-600 transition">
                            Mitra
                        </button>
                        <button onClick={() => scrollToSection('gallery')} className="text-gray-700 hover:text-blue-600 transition">
                            Galeri
                        </button>
                        <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-blue-600 transition">
                            Tentang
                        </button>
                    </div>

                    {/* Contact Button - Kanan */}
                    <div className="hidden md:block">
                        <button 
                            onClick={() => scrollToSection('footer')} 
                            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
                        >
                            Hub
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
                            Beranda
                        </button>
                        <button onClick={() => scrollToSection('partners')} className="block w-full text-left px-3 py-2 text-gray-700 hover:bg-gray-100">
                            Mitra
                        </button>
                        <button onClick={() => scrollToSection('gallery')} className="block w-full text-left px-3 py-2 text-gray-700 hover:bg-gray-100">
                            Galeri
                        </button>
                        <button onClick={() => scrollToSection('about')} className="block w-full text-left px-3 py-2 text-gray-700 hover:bg-gray-100">
                            Tentang
                        </button>
                        <button onClick={() => scrollToSection('footer')} className="block w-full text-left px-3 py-2 bg-blue-600 text-white hover:bg-blue-700 rounded">
                            Kontak
                        </button>
                    </div>
                </div>
            )}
        </nav>
    )
}

export default Navbar
