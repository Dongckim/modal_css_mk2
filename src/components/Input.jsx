import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import BasicButton from "./BasicButton";

const Input = () => {
    const titleRef = useRef('')
    const priceRef = useRef('')
    const onSubmitHandler = (event) => {
        event.preventDefault();
        alert(`name : ${ titleRef.current.value },  price : ${ priceRef.current.value.replaceAll(',','') }`)
  };

const onChangeHandler = ()=>{
    let str = priceRef.current.value
    let newstr = Number(str.replaceAll(',',''))
    if(isNaN(newstr)){
        priceRef.current.value = 0
    }else {
      const formatValue = newstr.toLocaleString('ko-KR');
      priceRef.current.value = formatValue
    }
};

    return(
        <form onSubmit={onSubmitHandler}>
            이름 : <StInput ref = {titleRef} /> &nbsp;
            가격 : <StInput ref = {priceRef} onChange={onChangeHandler} maxLength={16}/> &nbsp;
            <BasicButton NormalSmall> 추가 </BasicButton>
        </form>
    )
}

const StInput = styled.input` 
    width: 200px;
    height: 40px;
    border-radius: 8px;
`
export default Input;