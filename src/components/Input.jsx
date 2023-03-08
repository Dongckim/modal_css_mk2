import React from "react";
import styled from "styled-components";


const Input = ({ titleRef }) => {
    console.log(titleRef)
    return(
        <StInput/>
    )
}

const StInput = styled.input` 
    width: 200px;
    height: 40px;
    border-radius: 8px;
`

export default Input;