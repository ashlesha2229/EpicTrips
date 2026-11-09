import React, { useState } from "react";
import '../css/TrendingTourLocation.css' // ← your CSS file

const locations = [
  {
    id: 1,
    name: "Tokyo, Japan",
    tours: 28,
    image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800&q=80",
  },
  {
    id: 2,
    name: "Gyeongju, Korean",
    tours: 28,
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
  },
  {
    id: 3,
    name: "Mount Fuji, Japan",
    tours: 28,
    image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=800&q=80",
  },
  {
    id: 4,
    name: "Heidelberg, France",
    tours: 28,
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800&q=80",
  },
  {
    id: 5,
    name: "Ha Long, VietNam",
    tours: 28,
    image: "https://images.unsplash.com/photo-1528127269322-539801943592?w=800&q=80",
  },
  {
    id: 6,
    name: "Bali, Indonesia",
    tours: 32,
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&q=80",
  },
];

export default function TrendingTourLocation() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hoveredId, setHoveredId] = useState(null);

  const cardWidth = 180;
  const gap = 16;
  const visibleCount = 5;
  const maxIndex = Math.max(0, locations.length - visibleCount);

  const slideLeft = () => setCurrentIndex((prev) => Math.max(0, prev - 1));
  const slideRight = () => setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));

  return (
    <section className="trending-section">
      <div className="trending-container">
        {/* Header */}
        <div className="trending-header">
          <h2>Trending Tour Location</h2>
          <p>An Escape for Thrill-Seekers and Relaxation Enthusiasts.</p>
        </div>

        {/* Carousel */}
        <div className="carousel-wrapper">
          {/* Left Arrow */}
          <button
            className="nav-arrow left"
            onClick={slideLeft}
            disabled={currentIndex === 0}
          >
            ‹
          </button>

          {/* Right Arrow */}
          <button
            className="nav-arrow right"
            onClick={slideRight}
            disabled={currentIndex >= maxIndex}
          >
            ›
          </button>

          {/* Cards track */}
          <div className="carousel-viewport">
            <div
              className="carousel-track"
              style={{
                transform: `translateX(-${currentIndex * (cardWidth + gap)}px)`,
              }}
            >
              {locations.map((loc) => {
                const isHovered = hoveredId === loc.id;

                return (
                  <div
                    key={loc.id}
                    className={`card ${isHovered ? "hovered" : ""}`}
                    onMouseEnter={() => setHoveredId(loc.id)}
                    onMouseLeave={() => setHoveredId(null)}
                  >
                    <div className="card-inner">
                      <img src={loc.image} alt={loc.name} className="card-img" />

                      {/* Gradient overlay */}
                      <div className="overlay" />

                      {/* Vertical text (collapsed state) */}
                      <div className="vertical-text">
                        <span className="location-name">{loc.name}</span>
                        <span className="tours-count">{loc.tours} Tours</span>
                      </div>

                      {/* Expanded content */}
                      <div className="expanded-content">
                        <div className="content-box">
                          <div>
                            <h3>{loc.name}</h3>
                            <p>{loc.tours} Tours</p>
                          </div>
                          <button className="view-all-btn">View All</button>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}