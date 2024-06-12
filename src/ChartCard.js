import React, { useState } from 'react';
import { GiCancel } from 'react-icons/gi';
import './assets/scss/section/ChartCard.scss';

const Chart = ({ rank, change, title, Venue, ImageURL, site, date }) => {
    const [modalOpen, setModalOpen] = useState(false);

    const formattedRank = !isNaN(rank) ? `${rank}위` : rank;

    const openModal = () => {
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };

    const handleSiteClick = () => {
        window.open(site);
    };

    return (
        <>
            <li className="scene">
                <div className={`card ${modalOpen ? 'modal-open' : ''}`} onClick={openModal}>
                    <div className="poster">
                        <img src={ImageURL} alt={title} />
                    </div>
                    <div className="info">
                        <header>
                            <h1>🏆 {formattedRank}</h1>
                            <span className="value">{title}</span>
                        </header>
                        <p>{Venue}</p>
                    </div>
                </div>
            </li>
            <div>
                {modalOpen && (
                    <div className="modal">
                        <div className="modal_left">
                            <img src={ImageURL} alt={title} />
                            <div className="modal_right">
                                <div className="modal_content">
                                    <h2>{formattedRank}</h2>
                                    <h3>{title}</h3>
                                    <h4>{change}</h4>
                                    <span>{date}</span>
                                    <p>{Venue}</p>
                                </div>
                            </div>
                            <button className="closeButton" onClick={closeModal}><GiCancel /></button>
                        </div>
                        <button className="linkButton" onClick={handleSiteClick}>예매하기</button>
                    </div>
                )}
            </div>
        </>
    );
};

export default Chart;
