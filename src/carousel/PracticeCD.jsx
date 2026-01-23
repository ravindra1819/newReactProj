import { useEffect, useState } from "react"

function PracticeCD() {

  const images = [
    "src/assets/images/Avengers1.jpg",
    "src/assets/images/Avengers2.jpg",
    "src/assets/images/Avengers3.jpg",
    "src/assets/images/Avengers4.jpg"
  ]

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex(currentIndex === images.length - 1 ? 0 : currentIndex + 1)
  }

  const prevSlide = () => {
    setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1)
  }

  useEffect(() => {
    const interval = setInterval(nextSlide
    ,5000)
    return () => clearInterval(interval);
  });

  return (
    <div className="carousel-container">
      <button className="nav-btn" onClick={prevSlide}>Prev</button>
      <img className="carousel-image" src={images[currentIndex]} />
      <button className="nav-btn" onClick={nextSlide}>Next</button>
    </div>
  )
}

export default PracticeCD;