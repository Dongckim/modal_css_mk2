import React, { createContext, useRef } from "react";
import styled from "styled-components";
import BasicButton from "./components/BasicButton";
import { TfiAngleRight } from "react-icons/tfi"
import { VscBellDot } from "react-icons/vsc"
import Input from "./components/Input";
import { onSubmitHandler } from "./fuction";
import Modal from "./components/Modal";
import Select from "./components/Select";

export const InputContext = createContext();

function App(){
  return (
    <>
      <h1>Button</h1>
        <Wrapper>
          <BasicButton LargePrime onClick ={()=>{alert('버튼을 클릭하셨습니다')}}>Large Prime Button <TfiAngleRight/></BasicButton>
          <BasicButton NormalMedium>Medium</BasicButton>
          <BasicButton NormalSmall>Small</BasicButton>
        </Wrapper>
        <br/>
        <Wrapper>
          <BasicButton LargeNegative onClick={()=>{prompt('어렵나요?')}}>Large Negative Button <VscBellDot/></BasicButton>
          <BasicButton NegativeMedium>Medium</BasicButton>
          <BasicButton NegativeSmall>Small</BasicButton>
        </Wrapper>
      <h1>Input</h1>
        <Input/>
      <h1>Modal</h1>
        <Modal/>
      <h1>Select</h1>
        <Select/>
    </>
  )
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`

export default App;
