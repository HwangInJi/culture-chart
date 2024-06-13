import React, { useState } from 'react';
import { GiCancel } from 'react-icons/gi';
import './assets/scss/section/ChartCard.scss';

const Chart = ({ rank, change, title, Venue, ImageURL, site, date }) => {
    const [modalOpen, setModalOpen] = useState(false);

    const formattedRank = !isNaN(rank) ? `${rank}위` : rank;

    const formattedChange = () => {
        if (change && typeof change === 'string') {
            if (change.includes('상승')) {
                const steps = change.match(/\d+/)[0];  // 숫자 추출
                return `${steps} ▲`;
            } else if (change.includes('하락')) {
                const steps = change.match(/\d+/)[0];  // 숫자 추출
                return `${steps} ▼`;
            } else if (change.includes('변동 없음')) {
                return `-`;
            } else {
                return change;  // 변화 텍스트가 예상치 못한 형태인 경우 원본 텍스트 반환
            }
        } else {
            return '-';
        }
    };

    const openModal = () => {
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };

    const handleSiteClick = () => {
        window.open(site, '_blank');
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
            {modalOpen && (
                <div className="modal">
                    <div className="modal_left">
                        <div className="card__effect">
                            <img src={ImageURL} alt={title} />
                        </div>
                        <div className="modal_right">
                            <div className="modal_content">
                                <h2 className='modal__rank'>{formattedRank}</h2>
                                <h3 className='modal__title'>{title}</h3>
                                <h4 className='modal__change'>{formattedChange()}</h4>
                                <span className='modal__date'>{date}</span>
                                <p className='modal__venue'>{Venue}</p>
                            </div>
                        </div>
                        <button className="closeButton" onClick={closeModal}><GiCancel /></button>
                    </div>                   
                    <button className="linkButton" onClick={handleSiteClick}>예매하기</button>
                </div>
            )}
        </>
    );
};

export default Chart;
