import React from "react";
import SelectSearch from "react-select-search";

function TimePeriod({chooseTimePeriod}) {

    const timePeriodList = [
        {
            name: '1 min',
            value: '1min'
        },{
            name: '5 min',
            value: '5min'
        },{
            name: '15 min',
            value: '15min'
        },{
            name: '30 min',
            value: '30min'
        },{
            name: '1 hour',
            value: '1hour'
        },{
            name: '4 hours',
            value: '4hour'
        }
    ];

    return(
        <div>
            <SelectSearch 
                options={timePeriodList}
                onChange={ (value) => {chooseTimePeriod(value)} }
            />
        </div>
    )
}

export default TimePeriod;