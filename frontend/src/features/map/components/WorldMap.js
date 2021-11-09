import React from "react";
import { WorldMap } from 'react-svg-worldmap';
import styled from 'styled-components';

export default function World() {
    const data =
    [
      { country: "in", value: 32857937 }, // india
      { country: "us", value: 40330712 },  // united states
      { country: "br", value: 20804215 },  // brazil
      { country: "ru", value: 6937333 },  // russia
      { country: "gb", value: 6825074 },   // UK
      { country: "fr", value: 6783329 },   // france
      { country: "tr", value: 6412277 },   // turkey
      { country: "ar", value: 5190948 },   // Argentina
      { country: "ir", value: 5025233 },   // Iran
      { country: "co", value: 4911082 },   // Colombia

      { country: "kr", value: 255401 }   // korea
    ]

    const stylingFunction = ({
        countryValue,
        minValue,
        maxValue,
        country,
        color,
      }) => {
        const opacityLevel =
          0.1 + (1.5 * (countryValue - minValue)) / (maxValue - minValue);
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
            <WorldMap color="red" title="Top 10 Coronavirus Rates" value-suffix="people" size="xxl" data={data} frame={true} styleFunction={stylingFunction} />
        </WorldMapDiv>
    </>)
}

const WorldMapDiv = styled.div`
  text-align: center;
`