import React from "react";
import "../css/PopularTours.css";

// Replace these paths with the images you already downloaded
const tours = [
  {
    id: 1,
    category: "ADVENTURE",
    image: "/images/adventure.jpg",
    location: "Los Angeles",
    rating: 4.2,
    title: "Conquer Stunning Trails And Scenic Paths",
    people: 32,
    duration: "3 Days/2 Night",
    price: 243,
  },
  {
    id: 2,
    category: "DISCOVERY",
    image: "/images/waterfall.jpg",
    location: "Los Angeles",
    rating: 4.6,
    title: "Uncover Hidden Historical Wonders And Secrets",
    people: 32,
    duration: "3 Days/2 Night",
    price: 213,
  },
  {
    id: 3,
    category: "DISCOVERY",
    image: "/images/couple.jpg",
    location: "Los Angeles",
    rating: 4.7,
    title: "Experience The Mysteries Of The Ancient World",
    people: 32,
    duration: "3 Days/2 Night",
    price: 325,
  },
  {
    id: 4,
    category: "BEACH",
    image: "/images/kayak.jpg",
    location: "Los Angeles",
    rating: 4.2,
    title: "Explore Majestic Rivers And Waterways",
    people: 32,
    duration: "3 Days/2 Night",
    price: 92,
  },
];

const PopularTours = () => {
  return (
    <section className="popular-tours">
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <h2>Our Popular Tours</h2>
          <p>Discover the most loved and highly recommended tours chosen by travelers.</p>
        </div>

        {/* Cards Grid */}
        <div className="tours-grid">
          {tours.map((tour) => (
            <article className="tour-card" key={tour.id}>
              {/* Image with zoom on hover */}
              <div className="card-image-wrapper">
                <img src={tour.image} alt={tour.title} className="card-image" />

                {/* Category badge */}
                <span className={`category-badge ${tour.category.toLowerCase()}`}>
                  {tour.category}
                </span>

                {/* Heart icon */}
                <button className="heart-btn" aria-label="Add to wishlist">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                  </svg>
                </button>
              </div>

              {/* Card content */}
              <div className="card-content">
                <div className="card-meta">
                  <span className="location">
                    {/* Map Pin Icon - matches first image */}
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                    {tour.location}
                  </span>

                  <span className="rating">
                    {tour.rating} <span className="star">★</span>
                  </span>
                </div>

                <h3 className="card-title">{tour.title}</h3>

                <div className="card-stats">
                  <span>
                    {/* People / Users Icon - matches first image */}
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                    </svg>
                    {tour.people} People
                  </span>

                  <span>
                    {/* Clock Icon - matches first image */}
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10" />
                      <polyline points="12 6 12 12 16 14" />
                    </svg>
                    {tour.duration}
                  </span>
                </div>

                <div className="card-price">
                  Starting from: <strong>${tour.price}</strong>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Footer text */}
        <p className="section-footer">
          We Help Your find the prefect Tours. It's completely free.{" "}
          <a href="#all-tours">Explore all Tours</a>
        </p>
      </div>
    </section>
  );
};

export default PopularTours;