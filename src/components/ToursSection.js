import React, { useRef } from 'react';
import TourCard from '../components/TourCard';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import '../css/ToursSection.css';

const tours = [
  {
    id: 1,
    category: 'ADVENTURE',
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=600&h=400&fit=crop',
    location: 'Los Angeles',
    rating: 4.2,
    title: 'Conquer Stunning Trails And Scenic Paths',
    people: '32',
    duration: '3 Days/2 Night',
    price: 243,
  },
  {
    id: 2,
    category: 'DISCOVERY',
    image: 'https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?w=600&h=400&fit=crop',
    location: 'Los Angeles',
    rating: 4.6,
    title: 'Uncover Hidden Historical Wonders And Secrets',
    people: '32',
    duration: '3 Days/2 Night',
    price: 213,
  },
  {
    id: 3,
    category: 'DISCOVERY',
    image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&h=400&fit=crop',
    location: 'Los Angeles',
    rating: 4.7,
    title: 'Experience The Mysteries Of The Ancient World',
    people: '32',
    duration: '3 Days/2 Night',
    price: 325,
  },
  {
    id: 4,
    category: 'BEACH',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&h=400&fit=crop',
    location: 'Los Angeles',
    rating: 4.2,
    title: 'Explore Majestic Rivers And Waterways',
    people: '32',
    duration: '3 Days/2 Night',
    price: 92,
  },
  {
    id: 5,
    category: 'ADVENTURE',
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600&h=400&fit=crop',
    location: 'Los Angeles',
    rating: 4.6,
    title: "Retreat In Nature's Untouched Beauty",
    people: '24',
    duration: '3 Days/2 Night',
    price: 254,
  },
  {
    id: 6,
    category: 'DISCOVERY',
    image: 'https://images.unsplash.com/photo-1528183429752-a97d0bf99b5a?w=600&h=400&fit=crop',
    location: 'Los Angeles',
    rating: 4.5,
    title: 'Journey Through Rich Culture And History',
    people: '32',
    duration: '3 Days/2 Night',
    price: 180,
  },
];

const ToursSection = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 320;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="all-tours-section">
      {/* Section Header */}
      <div className="section-header">
        <h2 className="section-title">Our Popular Tours</h2>
        <p className="section-subtitle">
          Discover the most loved and highly recommended tours chosen by travelers.
        </p>
      </div>

      {/* Slider */}
      <div className="all-tours-slider">
        {/* Left Arrow */}
        <button className="all-tours-arrow left" onClick={() => scroll('left')}>
          <FiChevronLeft size={28} />
        </button>

        {/* Cards Container */}
        <div className="all-tours-grid" ref={scrollRef}>
          {tours.map((tour) => (
            <div className="all-tours-card-wrapper" key={tour.id}>
              <TourCard tour={tour} />
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        <button className="all-tours-arrow right" onClick={() => scroll('right')}>
          <FiChevronRight size={28} />
        </button>
      </div>

      {/* Bottom Text */}
      <div className="section-footer">
        <p>
          We Help Your find the prefect Tours. it's completely free.{' '}
          <a href="#all-tours" className="explore-link">
            Explore all Tours
          </a>
        </p>
      </div>

      {/* Pagination (optional – keep if you want) */}
      <div className="all-tours-pagination">
        <button className="all-tours-page-btn">1</button>
        <button className="all-tours-page-btn active">2</button>
        <button className="all-tours-page-btn">3</button>
        <button className="all-tours-page-btn">›</button>
      </div>
    </section>
  );
};

export default ToursSection;