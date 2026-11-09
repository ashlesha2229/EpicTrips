import React, { useEffect } from "react";

const StayConnected = () => {
  const handleSubscribe = () => {
    alert("Thank you for subscribing! ✈️");
  };

  // Inject keyframes only once
  useEffect(() => {
    const styleSheet = document.createElement("style");
    styleSheet.innerHTML = `
      @keyframes slideUp {
        from {
          opacity: 0;
          transform: translateY(40px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }

      @keyframes slideLeft {
        from {
          opacity: 0;
          transform: translateX(60px);
        }
        to {
          opacity: 1;
          transform: translateX(0);
        }
      }
    `;
    document.head.appendChild(styleSheet);

    return () => {
      document.head.removeChild(styleSheet);
    };
  }, []);

  const styles = {
    section: {
      maxWidth: "1150px",
      margin: "0 auto",
      padding: "70px 30px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: "50px",
      fontFamily:
        '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
      background: "#ffffff",
    },
    left: {
      flex: "0 0 360px",
    },
    title: {
      fontSize: "40px",
      fontWeight: 700,
      lineHeight: 1.2,
      color: "#111",
      margin: "0 0 18px 0",
      animation: "slideUp 0.8s ease-out forwards",
    },
    text: {
      fontSize: "16px",
      lineHeight: 1.65,
      color: "#6b7280",
      margin: "0 0 30px 0",
      animation: "slideUp 0.8s ease-out 0.2s forwards",
      opacity: 0, // start hidden
    },
    button: {
      background: "#2563eb",
      color: "white",
      fontSize: "15px",
      fontWeight: 600,
      padding: "13px 30px",
      borderRadius: "8px",
      border: "none",
      cursor: "pointer",
      transition: "all 0.2s ease",
      animation: "slideUp 0.8s ease-out 0.4s forwards",
      opacity: 0,
    },
    right: {
      flex: 1,
      position: "relative",
      height: "360px",
      animation: "slideLeft 1s ease-out 0.3s forwards",
      opacity: 0,
    },
    mapBg: {
      width: "100%",
      height: "100%",
      backgroundImage: `url("https://raw.githubusercontent.com/djaiss/mapsicon/master/world/world-map-dotted.png")`,
      backgroundSize: "contain",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      opacity: 0.5,
    },
    mapLines: {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      pointerEvents: "none",
    },
    flag: {
      position: "absolute",
      width: "40px",
      height: "40px",
      transform: "translate(-50%, -100%)",
      zIndex: 5,
    },
    flagImg: {
      width: "34px",
      height: "34px",
      borderRadius: "50%",
      border: "3px solid #fff",
      boxShadow: "0 3px 10px rgba(0,0,0,0.2)",
      objectFit: "cover",
      background: "#fff",
    },
    flagDot: {
      position: "absolute",
      bottom: "-7px",
      left: "50%",
      transform: "translateX(-50%)",
      width: "9px",
      height: "9px",
      background: "#3b82f6",
      borderRadius: "50%",
      border: "2px solid white",
    },
  };

  const flagPositions = {
    uk: { top: "16%", left: "27%" },
    usa: { top: "30%", left: "47%" },
    ph: { top: "20%", left: "81%" },
    laos: { top: "57%", left: "37%" },
    si: { top: "50%", left: "61%" },
    kr: { top: "53%", left: "87%" },
  };

  return (
    <section style={styles.section}>
      {/* LEFT CONTENT */}
      <div style={styles.left}>
        <h2 style={styles.title}>
          Stay Connected
          <br />
          With Us!
        </h2>
        <p style={styles.text}>
          Join our community to receive the latest travel updates, exclusive
          deals, and insider tips. Follow us on social media and never miss an
          adventure!
        </p>
        <button style={styles.button} onClick={handleSubscribe}>
          Subscribe
        </button>
      </div>

      {/* RIGHT MAP */}
      <div style={styles.right}>
        <div style={styles.mapBg}></div>

        <svg
          style={styles.mapLines}
          viewBox="0 0 800 400"
          preserveAspectRatio="none"
        >
          <path
            d="M216 64 C340 30 540 25 648 80"
            fill="none"
            stroke="#3b82f6"
            strokeWidth="2"
            strokeDasharray="7 5"
          />
          <path
            d="M376 120 C470 70 580 65 648 80"
            fill="none"
            stroke="#3b82f6"
            strokeWidth="2"
            strokeDasharray="7 5"
          />
          <path
            d="M376 120 C420 165 480 195 488 200"
            fill="none"
            stroke="#3b82f6"
            strokeWidth="2"
            strokeDasharray="7 5"
          />
          <path
            d="M296 228 C360 205 440 195 488 200"
            fill="none"
            stroke="#3b82f6"
            strokeWidth="2"
            strokeDasharray="7 5"
          />
          <path
            d="M488 200 C580 175 670 185 696 212"
            fill="none"
            stroke="#3b82f6"
            strokeWidth="2"
            strokeDasharray="7 5"
          />
        </svg>

        {/* FLAGS */}
        <div style={{ ...styles.flag, ...flagPositions.uk }}>
          <img
            src="https://flagcdn.com/w80/gb.png"
            alt="UK"
            style={styles.flagImg}
          />
          <div style={styles.flagDot}></div>
        </div>

        <div style={{ ...styles.flag, ...flagPositions.usa }}>
          <img
            src="https://flagcdn.com/w80/us.png"
            alt="USA"
            style={styles.flagImg}
          />
          <div style={styles.flagDot}></div>
        </div>

        <div style={{ ...styles.flag, ...flagPositions.ph }}>
          <img
            src="https://flagcdn.com/w80/ph.png"
            alt="Philippines"
            style={styles.flagImg}
          />
          <div style={styles.flagDot}></div>
        </div>

        <div style={{ ...styles.flag, ...flagPositions.laos }}>
          <img
            src="https://flagcdn.com/w80/la.png"
            alt="Laos"
            style={styles.flagImg}
          />
          <div style={styles.flagDot}></div>
        </div>

        <div style={{ ...styles.flag, ...flagPositions.si }}>
          <img
            src="https://flagcdn.com/w80/si.png"
            alt="Slovenia"
            style={styles.flagImg}
          />
          <div style={styles.flagDot}></div>
        </div>

        <div style={{ ...styles.flag, ...flagPositions.kr }}>
          <img
            src="https://flagcdn.com/w80/kr.png"
            alt="South Korea"
            style={styles.flagImg}
          />
          <div style={styles.flagDot}></div>
        </div>
      </div>
    </section>
  );
};

export default StayConnected;