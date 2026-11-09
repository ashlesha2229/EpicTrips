import React from "react";
import "../css/Destinationlist.css";

const destinations = [
  {
    id: 1,
    name: "Hoan Kiem",
    tours: 39,
    image:
     "https://res.cloudinary.com/kmadmin/image/upload/v1748951431/kiomoi/Hoan_Kiem_Lake3_4142.jpg",
  },
  {
    id: 2,
    name: "Mount Fuji",
    tours: 32,
    image:
     "https://media.tacdn.com/media/attractions-splice-spp-674x446/15/32/a2/3b.jpg",
  },
  {
    id: 3,
    name: "Heidelberg",
    tours: 42,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTl2mwgGQoYiHOWKXcKv8KE4LDN4RiuYslcjGo87FhgRA&s=10"
  },
  {
    id: 4,
    name: "Gyeongju",
    tours: 23,
    image:
      "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 5,
    name: "Golden Gate",
    tours: 67,
    image:
      "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 6,
    name: "British Museum",
    tours: 42,
    image:
     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ__RtgrHDkz9-ch4_kXaTpRHijYQ7LhudB826ZkSbtww&s=10",
  },
];

const Destinations = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section className="destinations-section">
      <div className="destinations-grid">
        {destinations.map((dest) => (
          <div key={dest.id} className="destination-card">
            <img
              src={dest.image}
              alt={dest.name}
              className="destination-image"
              loading="lazy"
            />
            <div className="destination-info">
              <h3 className="destination-name">{dest.name}</h3>
              <p className="destination-tours">{dest.tours} Tours</p>
            </div>
          </div>
        ))}
      </div>

      {/* Scroll-to-top button (exactly like the black circle in the screenshot) */}
      <button className="scroll-top-btn" onClick={scrollToTop} aria-label="Scroll to top">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M18 15l-6-6-6 6" />
        </svg>
      </button>
    </section>
  );
};

export default Destinations;