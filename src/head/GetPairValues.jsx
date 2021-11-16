import axios from "axios";

async function GetPairValues( currencyPair, currentTimePerion ) {

    let pairValuesList = [];

    let fetchPath = "https://financialmodelingprep.com/api/v3/historical-chart/" + currentTimePerion + "/" + currencyPair + "?apikey=6db32b5e7e9f0fb9617e3197acb510b0";
    let pairValuesListHolder = await axios.get( fetchPath );
    pairValuesListHolder = pairValuesListHolder.data;

    pairValuesList = pairValuesListHolder.map( (element) => {
        return{
            date: element.date,
            price: element.close
        }
    } );

    return pairValuesList;
}

export default GetPairValues;