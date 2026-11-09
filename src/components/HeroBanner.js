import React, { useState } from 'react';
import '../css/HeroBanner.css';
import banner1 from '../images/banner1.jpg';
import ToursSection from './ToursSection';

// React Icons
import {
  FiMapPin,
  FiTag,
  FiCalendar,
  FiUsers,
  FiChevronDown,
  FiChevronUp,
  FiSliders,
  FiSearch,
} from 'react-icons/fi';

const HeroBanner = () => {
  // Form states
  const [location, setLocation] = useState('');
  const [tourType, setTourType] = useState('');
  const [date, setDate] = useState('');
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [infants, setInfants] = useState(0);
  const [pets, setPets] = useState(0);

  // Dropdown visibility
  const [showLocation, setShowLocation] = useState(false);
  const [showTourType, setShowTourType] = useState(false);
  const [showDate, setShowDate] = useState(false);
  const [showPeople, setShowPeople] = useState(false);
  const [showFilters, setShowFilters] = useState(false);

  // Filters
  const [minPrice, setMinPrice] = useState(1000);
  const [maxPrice, setMaxPrice] = useState(70987);
  const [amenities, setAmenities] = useState({
    airConditioning: false,
    laundry: false,
    refrigerator: false,
    alarmSystem: false,
    microwave: false,
    shower: false,
    centralHeating: false,
    pool: false,
  });

  const locations = ['Los Angeles', 'New York', 'Paris', 'Tokyo', 'Bali', 'London', 'Dubai'];
  const tourTypes = ['Adventure', 'Discovery', 'Beach', 'Cultural', 'Wildlife', 'Romantic'];

  const toggleAmenity = (key) => {
    setAmenities((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const handleSearch = () => {
    console.log({
      location,
      tourType,
      date,
      adults,
      children,
      infants,
      pets,
      minPrice,
      maxPrice,
      amenities,
    });
    // Add your search logic here
  };

  return (
    <>
      <section className="hero-banner">
        {/* Background Image */}
        <div
          className="hero-bg"
          style={{ backgroundImage: `url(${banner1})` }}
        ></div>

        {/* Dark Overlay */}
        <div className="hero-overlay"></div>

        {/* Content */}
        <div className="hero-content">
          <h1 className="hero-title">
            Experience Ultimate <span>Gateways</span>
          </h1>

          {/* ========== ADVANCED SEARCH FORM ========== */}
          <div className="search-form-container">
            <div className="search-form">
              {/* Location */}
              <div
                className="form-field"
                onClick={() => {
                  setShowLocation(!showLocation);
                  setShowTourType(false);
                  setShowPeople(false);
                  setShowDate(false);
                }}
              >
                <span className="field-label">
                  <FiMapPin className="field-icon" /> Location
                </span>
                <div className="field-value">
                  {location || 'Locations'}
                  <span className="chevron">
                    {showLocation ? <FiChevronUp /> : <FiChevronDown />}
                  </span>
                </div>

                {showLocation && (
                  <div className="form-dropdown location-dropdown">
                    <div className="dropdown-header">- Locations -</div>
                    {locations.map((loc) => (
                      <div
                        key={loc}
                        className="dropdown-item"
                        onClick={(e) => {
                          e.stopPropagation();
                          setLocation(loc);
                          setShowLocation(false);
                        }}
                      >
                        {loc}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div className="form-divider"></div>

              {/* Tour Type */}
              <div
                className="form-field"
                onClick={() => {
                  setShowTourType(!showTourType);
                  setShowLocation(false);
                  setShowPeople(false);
                  setShowDate(false);
                }}
              >
                <span className="field-label">
                  <FiTag className="field-icon" /> Tour Type
                </span>
                <div className="field-value">
                  {tourType || 'Select Type'}
                  <span className="chevron">
                    {showTourType ? <FiChevronUp /> : <FiChevronDown />}
                  </span>
                </div>

                {showTourType && (
                  <div className="form-dropdown">
                    {tourTypes.map((type) => (
                      <div
                        key={type}
                        className="dropdown-item"
                        onClick={(e) => {
                          e.stopPropagation();
                          setTourType(type);
                          setShowTourType(false);
                        }}
                      >
                        {type}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div className="form-divider"></div>

              {/* Date */}
              <div
                className="form-field"
                onClick={() => {
                  setShowDate(!showDate);
                  setShowLocation(false);
                  setShowTourType(false);
                  setShowPeople(false);
                }}
              >
                <span className="field-label">
                  <FiCalendar className="field-icon" /> Date
                </span>
                <div className="field-value">
                  {date || 'dd/mm/yy'}
                  <span className="chevron">
                    {showDate ? <FiChevronUp /> : <FiChevronDown />}
                  </span>
                </div>

                {showDate && (
                  <div
                    className="form-dropdown date-dropdown"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <input
                      type="date"
                      value={date}
                      onChange={(e) => {
                        setDate(e.target.value);
                        setShowDate(false);
                      }}
                      className="date-input"
                    />
                  </div>
                )}
              </div>

              <div className="form-divider"></div>

              {/* People */}
              <div
                className="form-field"
                onClick={() => {
                  setShowPeople(!showPeople);
                  setShowLocation(false);
                  setShowTourType(false);
                  setShowDate(false);
                }}
              >
                <span className="field-label">
                  <FiUsers className="field-icon" /> People
                </span>
                <div className="field-value">
                  {adults} Adults - {children} children
                  <span className="chevron">
                    {showPeople ? <FiChevronUp /> : <FiChevronDown />}
                  </span>
                </div>

                {showPeople && (
                  <div
                    className="form-dropdown people-dropdown"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <div className="people-row">
                      <span>Adults (12 Years+)</span>
                      <div className="counter">
                        <button onClick={() => setAdults(Math.max(0, adults - 1))}>−</button>
                        <span>{adults}</span>
                        <button onClick={() => setAdults(adults + 1)}>+</button>
                      </div>
                    </div>
                    <div className="people-row">
                      <span>Children (2-12 Years)</span>
                      <div className="counter">
                        <button onClick={() => setChildren(Math.max(0, children - 1))}>−</button>
                        <span>{children}</span>
                        <button onClick={() => setChildren(children + 1)}>+</button>
                      </div>
                    </div>
                    <div className="people-row">
                      <span>Infants (0-2 Years)</span>
                      <div className="counter">
                        <button onClick={() => setInfants(Math.max(0, infants - 1))}>−</button>
                        <span>{infants}</span>
                        <button onClick={() => setInfants(infants + 1)}>+</button>
                      </div>
                    </div>
                    <div className="people-row">
                      <span>Pets</span>
                      <div className="counter">
                        <button onClick={() => setPets(Math.max(0, pets - 1))}>−</button>
                        <span>{pets}</span>
                        <button onClick={() => setPets(pets + 1)}>+</button>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Filter Button */}
              <div
                className="filter-btn"
                onClick={() => setShowFilters(!showFilters)}
                title="Filters"
              >
                <FiSliders size={20} />
              </div>

              {/* Search Button */}
              <button className="search-btn" onClick={handleSearch}>
                <FiSearch size={18} />
                Search
              </button>
            </div>

            {/* Advanced Filters Panel */}
            {showFilters && (
              <div className="advanced-filters">
                <div className="price-section">
                  <h4>Price</h4>
                  <div className="price-slider-container">
                    <input
                      type="range"
                      min="1000"
                      max="70987"
                      value={minPrice}
                      onChange={(e) => setMinPrice(Number(e.target.value))}
                      className="price-slider"
                    />
                    <input
                      type="range"
                      min="1000"
                      max="70987"
                      value={maxPrice}
                      onChange={(e) => setMaxPrice(Number(e.target.value))}
                      className="price-slider"
                    />
                  </div>
                  <div className="price-values">
                    <span>${minPrice.toLocaleString()}</span>
                    <span>-</span>
                    <span>${maxPrice.toLocaleString()}</span>
                  </div>
                </div>

                <div className="amenities-section">
                  <h4>All Amenities</h4>
                  <div className="amenities-grid">
                    {[
                      { key: 'airConditioning', label: 'Air Conditioning' },
                      { key: 'laundry', label: 'Laundry' },
                      { key: 'refrigerator', label: 'Refrigerator' },
                      { key: 'alarmSystem', label: 'Alarm System' },
                      { key: 'microwave', label: 'Microwave' },
                      { key: 'shower', label: 'Shower' },
                      { key: 'centralHeating', label: 'Central Heating' },
                      { key: 'pool', label: 'Pool' },
                    ].map((item) => (
                      <label key={item.key} className="amenity-item">
                        <input
                          type="checkbox"
                          checked={amenities[item.key]}
                          onChange={() => toggleAmenity(item.key)}
                        />
                        <span>{item.label}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      <ToursSection />
    </>
  );
};

export default HeroBanner;