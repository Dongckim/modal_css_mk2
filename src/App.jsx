import React from "react";
import styled from "styled-components";
import BasicButton from "./components/BasicButton";

function App(){

  return (
    <Wrapper>
      <BasicButton LargePrime>Large Prime Button</BasicButton>
      <BasicButton NormalMedium>Medium</BasicButton>
    </Wrapper>
    
  )
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`

export default App;
