import React, { useState } from 'react';
import '../css/Faq.css'
import Questions from './Faqquestions';
import StayConnected from './StayConnected';
function Faq() {
    // State to track which question is open
    const [openIndex, setOpenIndex] = useState(0);

    // Function to toggle open/close
    const toggleQuestion = (index) => {
        setOpenIndex(openIndex === index ? -1 : index);
    };

    return (
        <>
        <div className="Faq-page">
            <header className="Faq-hero">
                <div className="Faq-overlay"></div>
                <div className="Faq-content">
                    <nav className="crumbbb">
                        <a href="/">Home</a>
                        <span> / </span>
                        <span>FAQ</span>
                    </nav>
                </div>
            </header>

            <div className="faq-questions">
                <h2 className="faq-title">General</h2>

                {/* Questions */}
                <div className="faq-item">
                    <div 
                        className={`faq-question ${openIndex === 0 ? 'open' : ''}`} 
                        onClick={() => toggleQuestion(0)}
                    >
                        01. How Do I Book A Trip On Your Website?
                        <span className="faq-toggle">−</span>
                    </div>
                    <div className={`faq-answer ${openIndex === 0 ? 'visible' : ''}`}>
                        Once your account is set up and you've familiarized yourself with the platform, you are ready to start using our services. Whether it's accessing specific features, making transactions, or utilizing our tools, you'll find everything you need at your fingertips.
                    </div>
                </div>

                <div className="faq-item">
                    <div 
                        className={`faq-question ${openIndex === 1 ? 'open' : ''}`} 
                        onClick={() => toggleQuestion(1)}
                    >
                        02. What Payment Methods Do You Accept?
                        <span className="faq-toggle">+</span>
                    </div>
                    <div className={`faq-answer ${openIndex === 1 ? 'visible' : ''}`}>
                        Once your account is set up and you've familiarized yourself with the platform, you are ready to start using our services. Whether it's accessing specific features, making transactions, or utilizing our tools, you'll find everything you need at your fingertips.
                    </div>
                </div>

                <div className="faq-item">
                    <div 
                        className={`faq-question ${openIndex === 2 ? 'open' : ''}`} 
                        onClick={() => toggleQuestion(2)}
                    >
                        03. Can I Make Changes To My Reservation After Booking?
                        <span className="faq-toggle">+</span>
                    </div>
                    <div className={`faq-answer ${openIndex === 2 ? 'visible' : ''}`}>
                       Once your account is set up and you've familiarized yourself with the platform, you are ready to start using our services. Whether it's accessing specific features, making transactions, or utilizing our tools, you'll find everything you need at your fingertips.
                    </div>
                </div>

                <div className="faq-item">
                    <div 
                        className={`faq-question ${openIndex === 3 ? 'open' : ''}`} 
                        onClick={() => toggleQuestion(3)}
                    >
                        04. What Is Your Cancellation Policy?
                        <span className="faq-toggle">+</span>
                    </div>
                    <div className={`faq-answer ${openIndex === 3 ? 'visible' : ''}`}>
                       Once your account is set up and you've familiarized yourself with the platform, you are ready to start using our services. Whether it's accessing specific features, making transactions, or utilizing our tools, you'll find everything you need at your fingertips.
                    </div>
                </div>

                <div className="faq-item">
                    <div 
                        className={`faq-question ${openIndex === 4 ? 'open' : ''}`} 
                        onClick={() => toggleQuestion(4)}
                    >
                        05. Do You Offer Group Booking Discounts?
                        <span className="faq-toggle">+</span>
                    </div>
                    <div className={`faq-answer ${openIndex === 4 ? 'visible' : ''}`}>
                       Once your account is set up and you've familiarized yourself with the platform, you are ready to start using our services. Whether it's accessing specific features, making transactions, or utilizing our tools, you'll find everything you need at your fingertips.
                    </div>
                </div>
            </div>
        </div>
        <Questions/>
        <StayConnected/>
</>
    );
}

export default Faq;