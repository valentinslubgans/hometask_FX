import React from "react";
import GetPairValues from "./GetPairValues";
import "../styles/PairSearchButton.css";

export default function PairSearchButton({currentPairValue, currentTimePeriod,setPairValue}) {

    const ButtonFunction = () => {
        async function getValue() {
            setPairValue( await GetPairValues( currentPairValue, currentTimePeriod ) );
        }

        getValue();
    }

    return (
        <button className="buttonClass" onClick={ ButtonFunction }> <h1> Search </h1> </button>
    );
}