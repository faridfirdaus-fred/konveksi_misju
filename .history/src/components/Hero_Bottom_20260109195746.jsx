import { useState } from 'react'

function Hero_Bottom() {
  const [currentSlide, setCurrentSlide] = useState(0)

  // Data untuk carousel
  const slides = [
    {
      id: 1,
      title: "CARRY THE DAY",
      caption: "Everything you need to make it through a day at the office, from your laptop to your gym clothes, and still look the part once you're off the clock.",
      image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&q=80"
    },
    {
      id: 2,
      title: "URBAN EXPLORER",
      caption: "Navigate the city streets with style and comfort. Perfect companion for your daily adventures and weekend getaways.",
      image: "https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?w=800&q=80"
    },
    {
      id: 3,
      title: "WORK & PLAY",
      caption: "Seamlessly transition from professional meetings to casual outings. Designed for the modern lifestyle.",
      image: "https://images.unsplash.com/photo-1547949003-9792a18a2601?w=800&q=80"
    }
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  const goToSlide = (index) => {
    setCurrentSlide(index)
  }

  return (
    <section id="home" className="pt-12 pb-12 md:pt-24 md:pb-20 bg-">
      <div className=" mx-auto ">
        {/* Mobile First Layout */}
        <div className="flex flex-col md:flex-row gap-6 md:gap-12 items-center">
          
          {/* Left Section - Caption (Mobile: bottom, Desktop: left) */}
          <div className="w-full pl-20 md:w-6/12 order-2 md:order-1 text-center md:text-left">
            <div className="max-w-md mx-auto md:mx-0">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">
                {slides[currentSlide].title}
              </h2>
              <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                {slides[currentSlide].caption}
              </p>
            </div>
          </div>

          {/* Right Section - Image (Mobile: top, Desktop: right) */}
          <div className="w-full md:w-6/12 order-1 md:order-2 relative">
            <div className="relative aspect-square md:aspect-[4/3]  overflow-hidden shadow-xl">
              <img 
                src={slides[currentSlide].image} 
                alt={slides[currentSlide].title}
                className="w-full h-full object-cover transition-opacity duration-500"
              />
              
              {/* Desktop Navigation Buttons */}
              <button 
                onClick={prevSlide}
                className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition-all duration-200 items-center justify-center group"
                aria-label="Previous slide"
              >
                <svg className="w-6 h-6 text-gray-800 group-hover:text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              
              <button 
                onClick={nextSlide}
                className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition-all duration-200 items-center justify-center group"
                aria-label="Next slide"
              >
                <svg className="w-6 h-6 text-gray-800 group-hover:text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            {/* Mobile Dot Navigation */}
            <div className="flex md:hidden justify-center gap-2 mt-6">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    currentSlide === index 
                      ? 'bg-gray-800 w-8' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>

        </div>

        {/* Desktop Dot Indicators (optional - below content) */}
        <div className="hidden md:flex justify-center gap-2 mt-8">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                currentSlide === index 
                  ? 'bg-gray-800 w-8' 
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Hero_Bottom
