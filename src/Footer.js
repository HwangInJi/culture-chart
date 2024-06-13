import React from 'react';
import './assets/scss/section/Footer.scss';

const Footer = () => {
    const handleSelectChange = (event) => {
        const selectedValue = event.target.value;
        if (selectedValue) {
            window.open(selectedValue, '_blank');
        }
    };

    return (
        <footer>
            <div className="footer-content">
                <p>&copy; 2024 Culture Chart. All rights reserved.</p>
                <p>All images and content are copyright to their respective owners.</p>
                <p>
                    <a href="/privacy-policy">Project2</a> |
                    <a href="/terms-of-service"> Team member InJi & HyeJi</a> |
                    <a href="mailto:dlswl1993@gmail.com"> Contact Us</a>
                </p>
            </div>
            <div className="select-container">
                <select onChange={handleSelectChange}>
                    <option value="" disabled selected>Site</option>
                    <option value="https://ticket.melon.com/main/index.htm">Melon Ticket</option>
                    <option value="https://www.ticketlink.co.kr/home">Ticket Link</option>
                    <option value="http://ticket.yes24.com/">Yes24 Ticket</option>
                </select>
            </div>
        </footer>
    );
};

export default Footer;
