import React, { useState } from 'react';
import {
  FiMapPin,
  FiUsers,
  FiClock,
  FiHeart,
  FiStar,
} from 'react-icons/fi';
import '../css/TourCard.css'; // or put styles in ToursSection.css if you prefer

const TourCard = ({ tour }) => {
  const [liked, setLiked] = useState(false);

  return (
    <div className="tour-card">
      {/* Background Image */}
      <div
        className="tour-card-image"
        style={{ backgroundImage: `url(${tour.image})` }}
      >
        {/* Category Badge */}
        <span className="tour-category">{tour.category}</span>

        {/* Heart / Wishlist */}
        <button
          className={`tour-wishlist ${liked ? 'liked' : ''}`}
          onClick={() => setLiked(!liked)}
        >
          <FiHeart size={18} />
        </button>

        {/* Dark Gradient Overlay + Content */}
        <div className="tour-card-overlay">
          {/* Location + Rating */}
          <div className="tour-meta-top">
            <div className="tour-location">
              <FiMapPin size={14} />
              <span>{tour.location}</span>
            </div>
            <div className="tour-rating">
              <span>{tour.rating}</span>
              <FiStar size={13} className="star-icon" />
            </div>
          </div>

          {/* Title */}
          <h3 className="tour-title">{tour.title}</h3>

          {/* People + Duration */}
          <div className="tour-meta-bottom">
            <div className="tour-info">
              <FiUsers size={14} />
              <span>{tour.people} People</span>
            </div>
            <div className="tour-info">
              <FiClock size={14} />
              <span>{tour.duration}</span>
            </div>
          </div>

          {/* Price */}
          <div className="tour-price">
            Starting from: <strong>${tour.price}</strong>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TourCard;