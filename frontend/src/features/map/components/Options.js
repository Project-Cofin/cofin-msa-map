import React from "react";
import styled from "styled-components";

const Options = () => {
    return(<>
    <OptionUl>
        <li>
            <label>표시 대상 선택</label><br/>
            <select>
                <optgroup label="표시 대상 선택">
                  <option>선별 진료소</option>  
                  <option>확진자 발생 위치</option>  
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
