function Hero_Bottom() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="pt-24 pb-20 bg-secondary w-full ">
      <div className="max-w-7xl mx-auto">
    
      </div>
    </section>
  )
}

export default Hero_Bottom
