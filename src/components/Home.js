import { useState, useEffect, useCallback } from 'react';
import '../css/Home.css';
import stone from "../images/stone.jpg";
import waterfall from "../images/waterfall.jpg";
import couple from "../images/couple.jpg";
import kayaking from "../images/kayaking.jpg";

// New images for Latest News section
import oldcouple from "../images/oldcouple.png";
import ladywithhand from "../images/ladywithhand.png";
import friendsgroup from "../images/friendgroup.png";

import {
  Mountain,
  Luggage,
  Palmtree,
  TreePine,
  Tent,
  Sailboat,
  Utensils,
  PersonStanding,
  Building2,
  Bike,
  Balloon,
  User,
  SlidersHorizontal,
  Search,
  ChevronDown
} from "lucide-react";

import routeIconn from "../images/route.png";
import ticketIcon from "../images/ticket.png";
import internationalIcon from "../images/international.png";
import TrendingTourLocation from './TrendingTourLocation';

function Homee() {
    const slides = [
        {
            image: require('../images/banner1.jpg'),
            title: "Experience Ultimate \n Getaways",
            subtitle: "Relax and explore with our top-notch travel packages."
        },
        {
            image: require('../images/banner2.jpg'),
            title: "Create Your Dream\n Vacation",
            subtitle: "Personalize your travel experience with our custom tours."
        }
    ];

    const [current, setCurrent] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);

    // Form state
    const [location, setLocation] = useState('');
    const [tourType, setTourType] = useState('');
    const [date, setDate] = useState('');
    const [adults, setAdults] = useState(0);
    const [children, setChildren] = useState(0);
    const [infants, setInfants] = useState(0);
    const [pets, setPets] = useState(0);
    const [showLocation, setShowLocation] = useState(false);
    const [showTourType, setShowTourType] = useState(false);
    const [showPeople, setShowPeople] = useState(false);
    const [showDate, setShowDate] = useState(false);
    const [showFilters, setShowFilters] = useState(false);

    // Price range
    const [minPrice, setMinPrice] = useState(1000);
    const [maxPrice, setMaxPrice] = useState(70987);

    // Amenities
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

    const locations = [
        'Barcelona', 'Fuji, Japan', 'Golden Gate', 'Gyeongju',
        'Ha Noi', 'Heidelberg', 'Miami', 'Switzerland', 'Thailand', 'United Kingdom'
    ];

    const tourTypes = ['Adventure', 'Discovery', 'Beach', 'Wildlife', 'Camping'];

    const nextSlide = useCallback(() => {
        if (isAnimating) return;
        setIsAnimating(true);
        setTimeout(() => {
            setCurrent((prev) => (prev + 1) % slides.length);
            setIsAnimating(false);
        }, 600);
    }, [isAnimating, slides.length]);

    const prevSlide = useCallback(() => {
        if (isAnimating) return;
        setIsAnimating(true);
        setTimeout(() => {
            setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
            setIsAnimating(false);
        }, 600);
    }, [isAnimating, slides.length]);

    // Auto slide every 5 seconds
    useEffect(() => {
        const timer = setInterval(() => {
            nextSlide();
        }, 5000);
        return () => clearInterval(timer);
    }, [nextSlide]);

    // Close dropdowns when clicking outside
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (!e.target.closest('.form-dropdown') && !e.target.closest('.form-field')) {
                setShowLocation(false);
                setShowTourType(false);
                setShowPeople(false);
                setShowDate(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const toggleAmenity = (key) => {
        setAmenities(prev => ({ ...prev, [key]: !prev[key] }));
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
            amenities
        });
    };

    // ========== LATEST NEWS DATA ==========
    const newsArticles = [
        {
            id: 1,
            image: oldcouple,
            date: "28",
            month: "FEB",
            author: "By David",
            category: "Travel",
            title: "Tour Packages To Consider For Your Next Vacation.",
            excerpt: "Explore a curated list of 10 extraordinary Glamping destinations worldwide..."
        },
        {
            id: 2,
            image: ladywithhand,
            date: "28",
            month: "FEB",
            author: "By David",
            category: "Travel",
            title: "Camping In Style Tips For A Comfortable And Enjoyable Trip",
            excerpt: "Explore a curated list of 10 extraordinary Glamping destinations worldwide..."
        },
        {
            id: 3,
            image: friendsgroup,
            date: "28",
            month: "FEB",
            author: "By David",
            category: "Travel",
            title: "Explore The World Travel Tips For Every Type Of Traveler",
            excerpt: "Explore a curated list of 10 extraordinary Glamping destinations worldwide..."
        }
    ];

    return (
        <>
        <div className="banner-wrapper">
            {/* ================= BANNER ================= */}
            <div className="banner">
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        className={`banner-bg ${index === current ? 'active' : ''}`}
                        style={{ backgroundImage: `url(${slide.image})` }}
                    ></div>
                ))}

                <div className={`banner-content ${isAnimating ? 'animating' : ''}`}>
                    <h1>{slides[current].title}</h1>
                    <p>{slides[current].subtitle}</p>
                    <button className="banner-btn">Let's Get Started</button>
                </div>

                <button className="arrow left" onClick={prevSlide}>‹</button>
                <button className="arrow right" onClick={nextSlide}>›</button>
            </div>

            {/* ================= SEARCH FORM ================= */}
            <div className="search-form-container">
                <div className="search-form">
                    
                    {/* Location */}
                    <div className="form-field" onClick={() => {
                        setShowLocation(!showLocation);
                        setShowTourType(false);
                        setShowPeople(false);
                        setShowDate(false);
                    }}>
                        <span className="field-label">Location</span>
                        <div className="field-value">
                            {location || 'Locations'}
                            <ChevronDown size={16} className="chevron-icon" />
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
                    <div className="form-field" onClick={() => {
                        setShowTourType(!showTourType);
                        setShowLocation(false);
                        setShowPeople(false);
                        setShowDate(false);
                    }}>
                        <span className="field-label">Tour Type</span>
                        <div className="field-value">
                            {tourType || 'Select Type'}
                            <ChevronDown size={16} className="chevron-icon" />
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
                    <div className="form-field" onClick={() => {
                        setShowDate(!showDate);
                        setShowLocation(false);
                        setShowTourType(false);
                        setShowPeople(false);
                    }}>
                        <span className="field-label">Date</span>
                        <div className="field-value">
                            {date || 'dd/mm/yy'}
                            <ChevronDown size={16} className="chevron-icon" />
                        </div>

                        {showDate && (
                            <div className="form-dropdown date-dropdown" onClick={(e) => e.stopPropagation()}>
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
                    <div className="form-field" onClick={() => {
                        setShowPeople(!showPeople);
                        setShowLocation(false);
                        setShowTourType(false);
                        setShowDate(false);
                    }}>
                        <span className="field-label">People</span>
                        <div className="field-value">
                            <User size={16} className="people-icon" />
                            <span>{adults} Adults - {children} children</span>
                            <ChevronDown size={16} className="chevron-icon" />
                        </div>

                        {showPeople && (
                            <div className="form-dropdown people-dropdown" onClick={(e) => e.stopPropagation()}>
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
                        <SlidersHorizontal size={18} />
                    </div>

                    {/* Search Button */}
                    <button className="search-btn" onClick={handleSearch}>
                        <Search size={16} />
                        <span>Search</span>
                    </button>
                </div>

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

        <div className="Divv">
          <div className="inner-div-1">
            <h2>
              Your Go-To Experts For<br />
              Travel And Adventure
            </h2>

            <p>
              Crafting Unforgettable Journeys for Every Traveler, Tailored to Your
              Preferences, Interests, and Dream Destinations, Ensuring Every Detail is
              Perfect for an Exceptional Travel Experience
            </p>

            <div className="checklist">
              <div className="check-item">
                <div className="check-icon">✓</div>
                <span>Customized And Personalized Itineraries</span>
              </div>
              <div className="check-item">
                <div className="check-icon">✓</div>
                <span>Professional And Expert Guidance</span>
              </div>
              <div className="check-item">
                <div className="check-icon">✓</div>
                <span>Comprehensive And Detailed Planning</span>
              </div>
              <div className="check-item">
                <div className="check-icon">✓</div>
                <span>Unique And Memorable Experiences</span>
              </div>
            </div>

            <div className="booking-section">
              <div className="booking-info">
                <div className="phone-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                  </svg>
                </div>
                <div className="booking-text">
                  <span className="booking-label">Booking Number</span>
                  <span className="booking-number">(+12)-345-6789-10</span>
                </div>
              </div>
              <button className="booking-btn">Booking Tour</button>
            </div>
          </div>

          <div className="inner-div-2">
            <h2>Canoeing and Kayaking</h2>
            <p>Mount Fuji</p>
          </div>
        </div>

        {/* ================= CATEGORY ICONS ================= */}
        <div className="icon-section">
          <h2>Try Searching For</h2>
          <p>Explore Distinctive Selections with Our Thoughtfully Curated Categories</p>

          <div className="icon-grid">
            {[
              { icon: Mountain, label: "Adventure" },
              { icon: Luggage, label: "Discovery" },
              { icon: Palmtree, label: "Beach" },
              { icon: TreePine, label: "Wildlife" },
              { icon: Tent, label: "Camping" },
              { icon: Building2, label: "Cultural" },
              { icon: Sailboat, label: "Kayaking" },
              { icon: Utensils, label: "Culinary" },
              { icon: PersonStanding, label: "Hiking" },
              { icon: Building2, label: "City" },
              { icon: Bike, label: "Cycling" },
              { icon: Balloon, label: "Air Balloon" },
            ].map((item) => (
              <div key={item.label} className="icon-card">
                <div className="icon-card-inner">
                  <item.icon size={32} strokeWidth={1.5} />
                  <span>{item.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="Popular-Tours">
          <h2>Our Popular Tours</h2>
          <p className="subtitle">
            Discover the most loved and highly recommended tours chosen by travelers.
          </p>

          <div className="tours-grid">
            {/* Card 1 */}
            <div className="tour-card">
              <div className="card-image">
                <img src={stone} alt="Adventure Tour" />
                <div className="overlay"></div>

                <span className="badge">ADVENTURE</span>
                <button className="wishlist-btn">♡</button>

                <div className="card-content">
                  <div className="location-rating">
                    <span className="location">📍 Los Angeles</span>
                    <span className="rating">4.2 ★</span>
                  </div>
                  <h3>Conquer Stunning Trails And Scenic Paths</h3>
                  <div className="meta">
                    <span>👥 32 People</span>
                    <span>🕒 3 Days/2 Night</span>
                  </div>
                  <p className="price">Starting from: <strong>$243</strong></p>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="tour-card">
              <div className="card-image">
                <img src={waterfall} alt="Discovery Tour" />
                <div className="overlay"></div>

                <span className="badge">DISCOVERY</span>
                <button className="wishlist-btn">♡</button>

                <div className="card-content">
                  <div className="location-rating">
                    <span className="location">📍 Los Angeles</span>
                    <span className="rating">4.6 ★</span>
                  </div>
                  <h3>Uncover Hidden Historical Wonders And Secrets</h3>
                  <div className="meta">
                    <span>👥 32 People</span>
                    <span>🕒 3 Days/2 Night</span>
                  </div>
                  <p className="price">Starting from: <strong>$213</strong></p>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="tour-card">
              <div className="card-image">
                <img src={couple} alt="Discovery Tour" />
                <div className="overlay"></div>

                <span className="badge">DISCOVERY</span>
                <button className="wishlist-btn">♡</button>

                <div className="card-content">
                  <div className="location-rating">
                    <span className="location">📍 Los Angeles</span>
                    <span className="rating">4.7 ★</span>
                  </div>
                  <h3>Experience The Mysteries Of The Ancient World</h3>
                  <div className="meta">
                    <span>👥 32 People</span>
                    <span>🕒 3 Days/2 Night</span>
                  </div>
                  <p className="price">Starting from: <strong>$325</strong></p>
                </div>
              </div>
            </div>

            {/* Card 4 */}
            <div className="tour-card">
              <div className="card-image">
                <img src={kayaking} alt="Adventure Tour" />
                <div className="overlay"></div>

                <span className="badge">ADVENTURE</span>
                <button className="wishlist-btn">♡</button>

                <div className="card-content">
                  <div className="location-rating">
                    <span className="location">📍 Los Angeles</span>
                    <span className="rating">4.5 ★</span>
                  </div>
                  <h3>Kayaking Through Crystal Clear Waters</h3>
                  <div className="meta">
                    <span>👥 24 People</span>
                    <span>🕒 2 Days/1 Night</span>
                  </div>
                  <p className="price">Starting from: <strong>$189</strong></p>
                </div>
              </div>
            </div>
          </div>

          <p className="footer-text">
            We Help Your find the prefect Tours. It's completely free.{" "}
            <a href="#">Explore all Tours</a>
          </p>
        </div>
        
        {/* ================= BOOK TICKETS EASILY SECTION ================= */}
        <div className="book-tickets-section">
          <div className="book-tickets-container">
            <div className="book-tickets-left">
              <h2>
                Book Tickets Easily With<br />
                Just A Few Steps
              </h2>
              <p>
                The solution for those of you who don't want the hassle of ordering
                travel tickets, with just 3 steps you can travel anywhere you want.
              </p>
              <button className="book-tickets-btn">Booking Tour</button>
            </div>

            <div className="book-tickets-right">
              <div className="step-item">
                <div className="step-icon">
                  <img src={routeIconn} alt="Find Destination" />
                </div>
                <div className="step-content">
                  <h3>Find Your Travel Destination</h3>
                  <p>Do you want to relax on the beach, explore a new city, or go on an adventure?</p>
                </div>
              </div>

              <div className="step-item">
                <div className="step-icon">
                  <img src={ticketIcon} alt="Book Ticket" />
                </div>
                <div className="step-content">
                  <h3>Book You Ticket</h3>
                  <p>Find your travel destination, because we have covered all regions in the world.</p>
                </div>
              </div>

              <div className="step-item">
                <div className="step-icon">
                  <img src={internationalIcon} alt="Pay And Go" />
                </div>
                <div className="step-content">
                  <h3>Pay And Go Tour</h3>
                  <p>Do you want to relax on the beach, explore a new city, or go on an adventure?</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <TrendingTourLocation />

        {/* ================= LATEST NEWS & ARTICLES SECTION ================= */}
        <section className="latest-news-section">
          <div className="latest-news-container">
            <div className="section-header">
              <h2>Latest News & Articles</h2>
              <p>Tips & insights we collected through the years.</p>
            </div>

            <div className="news-grid">
              {newsArticles.map((article) => (
                <article key={article.id} className="news-card">
                  <div className="news-image-wrapper">
                    <img src={article.image} alt={article.title} />
                    <div className="date-badge">
                      <span className="date-day">{article.date}</span>
                      <span className="date-month">{article.month}</span>
                    </div>
                  </div>

                  <div className="news-content">
                    <div className="news-meta">
                      <span className="author">{article.author}</span>
                      <span className="separator">—</span>
                      <span className="category">{article.category}</span>
                    </div>
                    <h3 className="news-title">{article.title}</h3>
                    <p className="news-excerpt">{article.excerpt}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Back to top button */}
          <button
            className="back-to-top"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            aria-label="Back to top"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M18 15l-6-6-6 6" />
            </svg>
          </button>
        </section>
        </>
    );
}

export default Homee;