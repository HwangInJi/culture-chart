import React from 'react';
import './assets/scss/section/ChartCard.scss';

const Chart = ({ rank, title, Venue, ImageURL }) => {
    // rank 값이 숫자인지 확인하고, 숫자일 경우 "1위" 형식으로 변환
    const formattedRank = !isNaN(rank) ? `${rank}위` : rank;

    return (
        <li className="scene">
            <div className="card">
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
    );
};

export default Chart;
