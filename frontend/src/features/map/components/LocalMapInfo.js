import React from "react";
import styled from "styled-components";

const LocalMapInfo = () => {

    return(<>
        <InfoUl>
            <li>
                <InfoDiv><div><label>진료소 A</label></div></InfoDiv>
            </li>
        </InfoUl>
    </>)
}

export default LocalMapInfo

const InfoDiv = styled.div`
    width: 200px;
    height: 300px;
    border: solid 1px black;
    display: inline-block;
`

const InfoUl = styled.ul`
    list-style: none;
`