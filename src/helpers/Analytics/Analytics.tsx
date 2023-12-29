import React, { useState } from 'react';
import 'chart.js/auto';
import AnalyticsPie from './AnalyticsBlock/AnalyticsPie';
import AnalyticsRaw from './AnalyticsBlock/AnalyticsRaw';
import AnalyticsRadar from './AnalyticsBlock/AnalyticsRadar';

import styles from './Analytics.module.scss'

const TestAn: React.FC = () => {
    const [raw, setRaw] = useState(true)
    const [circle, setCircle] = useState(false)
    const [radar, setRadar] = useState(false)

    const handleCircle = () => {
        setCircle(true)
        setRadar(false)
        setRaw(false)
    }

    const handleRaw = () => {
        setCircle(false)
        setRadar(false)
        setRaw(true)
    }

    const handleRadar = () => {
        setCircle(false)
        setRaw(false)
        setRadar(true)
    }

    const data = {
        labels: ['Product A', 'Product B', 'Product C', 'Product D'],
        datasets: [
            {
                data: [12, 19, 3, 5],
                backgroundColor: ['rgba(75,192,192,0.6)', 'red', 'yellow', 'green'],
            },
        ],
    };

    const radarData = {
        labels: ['Category A', 'Category B', 'Category C', 'Category D', 'Category E'],
        datasets: [
            {
                label: 'Values',
                data: [30, 50, 20, 40, 60],
                backgroundColor: 'green',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 2,
                fill: true,
            },
        ],
    };


    return (
        <>
            <div className={styles.title}>
                <p onClick={() => handleCircle()}>circle</p>
                <p onClick={() => handleRaw()}>raw</p>
                <p onClick={() => handleRadar()}>radar</p>
            </div>
            {
                circle && < div className={styles.main} >
                    <AnalyticsPie data={data} />
                </div >
            }
            {
                raw && < div className={styles.main} >
                    <AnalyticsRaw data={data} />
                </div >
            }
            {
                radar && < div className={styles.main} >
                    <AnalyticsRadar data={radarData} />
                </div >
            }
        </>
    );
};

export default TestAn;
