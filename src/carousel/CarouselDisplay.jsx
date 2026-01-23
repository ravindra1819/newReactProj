import { useState } from "react";

export default function Carousel() {
  const images = [
    "src/assets/images/Avengers1.jpg",
    "src/assets/images/Avengers2.jpg",
    "src/assets/images/Avengers3.jpg",
    "src/assets/images/Avengers4.jpg"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex(() =>
      currentIndex === images.length - 1 ? 0 : currentIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex(() =>
      currentIndex === 0 ? images.length - 1 : currentIndex - 1
    );
  };

  return (
    <div className="carousel-container">
      <button className="nav-btn" onClick={prevSlide}>
        ❮
      </button>

      <img
        src={images[currentIndex]}
        alt="carousel"
        className="carousel-image"
      />

      <button className="nav-btn" onClick={nextSlide}>
        ❯
      </button>
    </div>
  );
}
