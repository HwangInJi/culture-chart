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
                <p>모든 이미지와 콘텐츠의 저작권은 각 사이트에 있으며, 포트폴리오 용도로 만들었음을 밝힙니다.</p>
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
