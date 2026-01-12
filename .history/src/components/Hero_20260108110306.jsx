function Hero() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="pt-24 pb-20 w-full">
      <div className="max-w-7xl mx-auto">
      </div>
    </section>
  )
}

export default Hero
