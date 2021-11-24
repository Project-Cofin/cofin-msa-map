import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { Geolocation } from "..";
import { casesPoints, medPoints } from "../reducer/mapSlice";


const Options = () => {
    const dispatch = useDispatch()
    var geoInfo = window.localStorage.getItem('sessionGeo').split(',')
    return(<>
    <OptionUl>
        <li>
            <label>표시 대상 선택</label><br/>
            <select id="sel" onChange={(e) => {
            if (e.target.value == 'medpoint'){
                dispatch(medPoints({'latitude': geoInfo[0], 'longitude': geoInfo[1]}))
            }else{
                dispatch(casesPoints({'latitude': geoInfo[0], 'longitude': geoInfo[1]}))
            }
          }}>
                <optgroup label="표시 대상 선택">
                  <option value="medpoint">선별 진료소</option>  
                  <option value="cases">확진자 발생 위치</option>  
                </optgroup>
            </select>
        </li>
    </OptionUl>
    </>)
}

export default Options

const OptionUl = styled.ul`
    list-style: none;
`
