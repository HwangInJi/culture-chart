import React from 'react';
import './assets/scss/section/ChartCard.scss';

const Chart = ({ rank, title, Venue, ImageURL }) => {
    return (
        <li className="scene">
            <div className="card">
                <div className="poster">
                    <img src={ImageURL} alt={title} />
                </div>
                <div className="info">
                    <header>
                        <h1>{rank}</h1>
                        <span className="value">{title}</span>
                    </header>
                    <p>{Venue}</p>
                </div>
            </div>
        </li>
    );
};


export default Chart;
