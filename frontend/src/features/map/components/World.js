import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { WorldMap } from 'react-svg-worldmap';
import styled from 'styled-components';
import { worldMap } from "features/map/reducer/mapSlice";

export default function World() {
    const maps = useSelector(state => state.map.mapsState)
    const dispatch = useDispatch()
    useEffect(()=>{
      dispatch(worldMap())
    },[])

    const stylingFunction = ({
        countryValue,
        minValue,
        maxValue,
        country,
        color,
      }) => {
        const opacityLevel = 0.1 + (1.0 * (countryValue - minValue)) / (maxValue - minValue);
        return {
          // fill: country === 'US' ? 'blue' : color,
          fill: countryValue < 300000 ? 'green' : color,
          fillOpacity: opacityLevel,
          stroke: 'brown',
          strokeWidth: 1,
          strokeOpacity: 0.2,
          cursor: 'pointer',
        };
      };

    return (<>
        <WorldMapDiv className="App" >
            <WorldMap color="red" title="Top 10 Coronavirus Rates" value-suffix="people" size="xxl" 
            data={maps.map(x => {return {country: x.meta, value: parseInt(x.cases)}})} 
            frame={true} styleFunction={stylingFunction} />
        </WorldMapDiv>
    </>) 
}

const WorldMapDiv = styled.div`
  text-align: center;
`