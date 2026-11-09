import { useState } from 'react';
import '../css/Faqquestions.css'
function Questions(){
     // State to track which question is open
        const [openIndex, setOpenIndex] = useState(0);
    
        // Function to toggle open/close
        const toggleQuestion = (index) => {
            setOpenIndex(openIndex === index ? -1 : index);
        };
    
    return(
        <>
        <div className="faq-questions">
                <h2 className="faq-title">Travel Tips</h2>

                {/* Questions */}
                <div className="faq-item">
                    <div 
                        className={`faq-question ${openIndex === 0 ? 'open' : ''}`} 
                        onClick={() => toggleQuestion(0)}
                    >
                        01.What Is Your Payment Schedule And Process?
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
                        02. Are There Any Additional Fees Or Surcharges?
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
                        03. Can I Transfer My Reservation To Another Person?
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
                        04. Can I Request A Private Tour For My Group?
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
                        05. Do You Offer Special Group Booking?
                        <span className="faq-toggle">+</span>
                    </div>
                    <div className={`faq-answer ${openIndex === 4 ? 'visible' : ''}`}>
                       Once your account is set up and you've familiarized yourself with the platform, you are ready to start using our services. Whether it's accessing specific features, making transactions, or utilizing our tools, you'll find everything you need at your fingertips.
                    </div>
                </div>
            </div>
        {/* </div> */}
        </>
    )
}
export default Questions;