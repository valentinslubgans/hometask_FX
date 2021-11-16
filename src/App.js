import React, { useState } from "react";
import Head from "./head/Head";
import PairBar from "./graphs/PairBar";

function App() {

  const [pairToShow, setPairToShow] = useState();
  const [pairValues, setPairValues] = useState();
  const [timePeriodToShow, setTimePeriodToShow] = useState();

  return (
    <div className="App">
      <Head getPairToShow={setPairToShow} getPairValuesToShow={setPairValues} getTimePeriod={setTimePeriodToShow}/>
      { !pairValues ? "": <PairBar currentPair={pairToShow} currentPairValues={pairValues} timePeriod={timePeriodToShow}/> }
    </div>
  );
}

export default App;
