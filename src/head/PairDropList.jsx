import React, {useState, useEffect} from "react";
import SelectSearch from "react-select-search";
import GetPairList from "./GetPairList";
import "../styles/SearchList.css";

export default function PairDropList({updateCurrentPair}) {
    
    const [pairList, setPairList] = useState();

    const pairChange = ( value ) => {
        updateCurrentPair( value );
    }

    useEffect( () => {
        async function asyncGetPair() {
            setPairList( await GetPairList() );
        }
        asyncGetPair();
    }, [] );


    const searchPair = ( pairsArray ) => {
        return (searchValue) =>{
            if ( searchValue.length === 0 ) return pairList;

            const filtredPairList = pairsArray.filter( ( pairObj ) => {
                return pairObj.name.toLowerCase().includes( searchValue.toLowerCase() );
            } );

            return filtredPairList;
        };
    };


    return(
        <div>
            { pairList ? (
            <SelectSearch
                options={pairList}
                placeholder="Select the pair"
                filterOptions={searchPair}
                search
                onChange={pairChange}
            /> )
            :(
                <h1> Loading... </h1>
            ) }
        </div>
    );
}