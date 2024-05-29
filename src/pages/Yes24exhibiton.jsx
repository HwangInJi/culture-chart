import React, { useEffect, useState } from 'react';
import '../assets/scss/style.scss';

const Chart = () => {
    const [chartData, setChartData] = useState(null);
    const [chartSubName] = useState('yes24exhibiton');
    const [chartName, setChartName] = useState('pychart_Y_exhibiton10');
    const [selectedDate, setSelectedDate] = useState('2024-05-03');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const url = `https://raw.githubusercontent.com/HwangInJi/cultureChart/main/${chartSubName}/${chartName}${selectedDate}.json`;
                const response = await fetch(url);
                const jsonData = await response.json();
                setChartData(jsonData);
            } catch (error) {
                console.error('데이터를 가져오는 중 오류 발생', error);
            }
        };

        fetchData();
    }, [chartSubName, chartName, selectedDate]);

    useEffect(() => {
        switch (chartSubName) {
            case 'yes24concert':
                setChartName('pychart_Y_concert10');
                break;
            case 'yes24exhibiton':
                setChartName('pychart_Y_exhibiton10');
                break;
            case 'yes24musical':
                setChartName('pychart_Y_musical10');
                break;
            default:
                setChartName('pychart_Y_concert10');
        }
    }, [chartSubName]);

    const handleDateChange = (event) => {
        setSelectedDate(event.target.value);
    };

    return (
        <div className='melon__chart'>
            <h1 className='chart__title'>예스24 전시회 순위</h1>
            <div className='chart__controls'>
                <label className='control__group'>
                    <p className='date__title'>날짜 :</p>
                    <input className='chart__date' type="date" value={selectedDate} onChange={handleDateChange} />
                </label>
            </div>
            {chartData ? (
                <div className='chart__grid'>
                    {chartData.map((item) => (
                        <div key={item.rank} className='chart__item'>
                            <div className='chart__text'>
                                <h2>{item.rank}. {item.title}</h2>
                                <p>장소: {item.Venue}</p>
                            </div>
                            <div className='chart__image'>
                                <img src={item.ImageURL} alt={item.title} />
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <p>데이터를 불러오는 중...</p>
            )}
        </div>
    );
};

export default Chart;
