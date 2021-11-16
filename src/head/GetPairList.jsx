import axios from "axios";


async function GetPairList() {

    let fetchHolder = await axios.get( 'https://financialmodelingprep.com/api/v3/symbol/available-forex-currency-pairs?apikey=6db32b5e7e9f0fb9617e3197acb510b0' );
    fetchHolder = fetchHolder.data;

    let arrayHolder = fetchHolder.map( ( obj ) => {
        return {
            name: obj.name,
            value: obj.symbol
        };
    } );

    return arrayHolder;
}

export default GetPairList;