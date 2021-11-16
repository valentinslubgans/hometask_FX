import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import './GraphStyles.css';



function PairBar({currentPair, currentPairValues, timePeriod}) {

    const [graphValue, setGraphValue] = useState([]);
    const [pairToShow, setPairToShow] = useState();
    const [timePeriodToShow, setTimePeriodToShow] = useState('1min');

    useEffect( () => {
        if ( currentPairValues ) setGraphValue( currentPairValues );
        if ( timePeriod ) setTimePeriodToShow( timePeriod );
        if ( currentPair ) setPairToShow( currentPair );
    },[currentPairValues] );

    return(
        <div className='chartHolder'>
            <h2>{pairToShow}  {timePeriodToShow}</h2>
            <Line 
                data = {{
                    labels: graphValue.map( element => element.date ),
                    datasets: [{
                        label: currentPair + " Close",
                        data: graphValue.map( element => element.price ),
                        backgroundColor: 'rgba( 107, 185, 240, 0.5 )',
                        borderColor: 'rgba( 72, 113, 247, 1 )',
                        fill: true,
                        pointBackgroundColor: 'rgba( 72, 113, 247, 1 )',
                        pointHoverBackgroundColor: 'rgba( 44, 62, 80, 1 )',
                        pointHoverBorderColor: 'rgba( 44, 62, 80, 1 )',
                        pointHitRadius: 6
                    }]
                }}
            />
        </div>
    )
}

export default PairBar;