import React, { useEffect, useState } from "react";
import PairDropList from "./PairDropList";
import PairSearchButton from "./PairSearchButton";
import TimePeriod from "./TimePeriod";
import "../styles/Styles.css";

export default function Head({getPairToShow, getPairValuesToShow, getTimePeriod}) {
    const [currentPair, setCurrentPair] = useState();
    const [timePeriod, setTimePeriod] = useState();
    

    useEffect( () => {
        getPairToShow( currentPair );
        getTimePeriod( timePeriod );
    }, [currentPair,timePeriod] );

    return(
        <div className="headStyle">
            <PairDropList updateCurrentPair={setCurrentPair}/>
            <TimePeriod chooseTimePeriod={setTimePeriod}/>
            <PairSearchButton currentPairValue={currentPair} currentTimePeriod={timePeriod} setPairValue={getPairValuesToShow}/>
        </div>
    )
}
