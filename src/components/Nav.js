import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo2 from '../images/logo.jpg';
import '../css/Nav.css';
import LoginModall from './LoginModal';
import { Phone, Mail, MapPin } from "lucide-react";

function Navii() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState('EN');
  const [selectedCurrency, setSelectedCurrency] = useState('USD');
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const languages = [
    { code: 'en', name: 'English' },
    { code: 'zh', name: 'Chinese' },
    { code: 'ja', name: 'Japanese' },
    { code: 'de', name: 'Deutsch' },
    { code: 'pt', name: 'Português' },
    { code: 'fr', name: 'Français' },
    { code: 'es', name: 'Español' },
    { code: 'it', name: 'Italiano' },
    { code: 'ko', name: 'Korean' },
    { code: 'vi', name: 'Vietnamese' },
  ];

  const currencies = [
    { code: 'KRW', name: 'Korean Won (KRW)' },
    { code: 'EUR', name: 'Euro (EUR)' },
    { code: 'USD', name: 'US dollar (USD)' },
    { code: 'SGD', name: 'Singapore Dollar (SGD)' },
    { code: 'CNY', name: 'Chinese Yuan (CNY)' },
    { code: 'HKD', name: 'Hong Kong Dollar (HKD)' },
    { code: 'AED', name: 'UAE Dirham (AED)' },
    { code: 'CHF', name: 'Swiss franc (CHF)' },
    { code: 'MNT', name: 'Mongolian Tughrik (MNT)' },
    { code: 'NZD', name: 'New Zealand Dollar (NZD)' },
    { code: 'THB', name: 'Thai Baht (THB)' },
    { code: 'SEK', name: 'Swedish Krona (SEK)' },
    { code: 'AUD', name: 'Australian Dollar (AUD)' },
    { code: 'GBP', name: 'British Pound (GBP)' },
    { code: 'MXN', name: 'Mexican Peso (MXN)' },
    { code: 'PHP', name: 'Philippines Peso (PHP)' },
    { code: 'TRY', name: 'Turkish Lira (TRY)' },
    { code: 'BRL', name: 'Brazilian Real (BRL)' },
    { code: 'IDR', name: 'Indonesian Rupiah (IDR)' },
    { code: 'MOP', name: 'Macau Pataca (MOP)' },
    { code: 'PLN', name: 'Polish Zloty (PLN)' },
    { code: 'TWD', name: 'New Taiwan Dollar (TWD)' },
    { code: 'CAD', name: 'Canadian Dollar (CAD)' },
    { code: 'INR', name: 'Indian Rupee (INR)' },
    { code: 'MYR', name: 'Malaysian Ringgit (MYR)' },
    { code: 'RUB', name: 'Russian Ruble (RUB)' },
    { code: 'VND', name: 'Vietnamese Dong (VND)' },
  ];

  const handleLanguageChange = (lang) => {
    setSelectedLang(lang.code.toUpperCase());
    console.log('Language changed to:', lang.name);
  };

  const handleCurrencyChange = (currency) => {
    setSelectedCurrency(currency.code);
    console.log('Currency changed to:', currency.name);
  };

  const handleSave = () => {
    localStorage.setItem('selectedLang', selectedLang);
    localStorage.setItem('selectedCurrency', selectedCurrency);
    setIsOpen(false);
    alert(`Settings saved!\nLanguage: ${selectedLang}\nCurrency: ${selectedCurrency}`);
  };

  return (
    <>
      {/* Top Bar - Matching second image */}
      <div className="top-bar">
        <div className="top-bar-container">
          
          {/* Left Side */}
          <div className="left-side">
            <span className="welcome-text">Welcome to Epictrips</span>
            <span className="separator">|</span>
            <a href="tel:001-1234-8888" className="contact-item">
              <Phone size={14} strokeWidth={2} />
              <span>001-1234-8888</span>
            </a>
          </div>

          {/* Right Side */}
          <div className="right-side">
            <a href="mailto:themeflat@gmail.com" className="contact-item">
              <Mail size={14} strokeWidth={2} />
              <span>themeflat@gmail.com</span>
            </a>
            <span className="separator">|</span>
            <div className="contact-item">
              <MapPin size={14} strokeWidth={2} />
              <span>2163 Phillips Gap Rd, West Jefferson</span>
            </div>
          </div>

        </div>
      </div>

      {/* Navigation Bar */}
      <nav className="nav-bar">
        {/* Logo */}
        <div className="logo">
          <img src={logo2} alt="Logo" />
          <b>EpicTrips</b>
        </div>

        {/* Links */}
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/tourslist">Tours List</Link>
          <Link to="/destinations">Destinations</Link>
          <Link to="/faq">FAQ</Link>
          <Link to="/contactus">Contact Us</Link>
        </div>

        {/* Right Side */}
        <div className="right-side-nav" ref={dropdownRef}>
          {/* SIGN IN */}
          <span className="sign-in-btn" onClick={() => setIsLoginOpen(true)}>
            SIGN IN
          </span>

          <span className="divider">|</span>

          {/* EN Trigger */}
          <div
            className="lang-trigger"
            onClick={() => setIsOpen(!isOpen)}
          >
            {selectedLang}
          </div>

          {/* Dropdown Panel */}
          {isOpen && (
            <div className="lang-currency-panel">
              <div className="panel-content">
                {/* Language Column */}
                <div className="language-section">
                  <h3>Language</h3>
                  <ul>
                    {languages.map((lang) => (
                      <li
                        key={lang.code}
                        className={selectedLang === lang.code.toUpperCase() ? 'active' : ''}
                        onClick={() => handleLanguageChange(lang)}
                      >
                        {lang.name}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Currency Column */}
                <div className="currency-section">
                  <h3>Currency</h3>
                  <div className="currency-grid">
                    {currencies.map((curr) => (
                      <div
                        key={curr.code}
                        className={`currency-item ${selectedCurrency === curr.code ? 'active' : ''}`}
                        onClick={() => handleCurrencyChange(curr)}
                      >
                        {curr.name}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="panel-footer">
                <button className="save-btn" onClick={handleSave}>
                  Save Your Setting
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Login Modal */}
      <LoginModall
        isOpen={isLoginOpen}
        onClose={() => setIsLoginOpen(false)}
      />
    </>
  );
}

export default Navii;