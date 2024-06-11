import React, { useState } from 'react';
import './assets/scss/section/ChartCard.scss';

const Chart = ({ rank, title, Venue, ImageURL }) => {
    const [modalOpen, setModalOpen] = useState(false);

    const formattedRank = !isNaN(rank) ? `${rank}위` : rank;

    const openModal = () => {
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };

    return (
        <div>
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
            {modalOpen && (
                <div className="modal">
                    <div className="modal_left">
                        <img src={ImageURL} alt={title} />
                    </div>
                    <div className="modal_right">
                        <h2>{formattedRank}</h2>
                        <h3>{title}</h3>
                        <p>{Venue}</p>
                        <button onClick={closeModal}>닫기</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Chart;
