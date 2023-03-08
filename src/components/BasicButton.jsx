import React from "react";
import styled, { css } from "styled-components";

const BasicButton= ({ children, ...theme}) =>{
    return <StButton theme={Object.keys(theme)[0]} onClick = {theme.onClick}>{children}</StButton>
}

const StButton = styled.button`
    border-radius: 8px;
    width: 200px;
    height: 50px;

    border: 3px solid #15de9b;
    background-color: transparent;
    ${({theme}) => {
    switch (theme) {
      case 'LargePrime':
        return css`
          cursor : pointer;
          font-Weight : bold;
        `
      case 'LargeNegative':
        return css`
          cursor : pointer;
          font-Weight : bold;
          color : #cf0606;
          border : 3px solid #f29c9c;
        `
      case 'NormalMedium':
        return css`
          cursor : pointer;
          background-color: #15de9b;
          width : 130px;
          height: 45px;
          :active{
            background-color: #178a69;
          }
        `
      case 'NormalSmall':
        return css`
          cursor : pointer;
          background-color: #15de9b;
          width : 100px;
          height: 40px;
          :active{
            background-color: #178a69;
          }
        `
      case 'NegativeMedium':
        return css`
          cursor : pointer;
          background-color: #f29c9c;
          border : 3px solid #f29c9c;
          width : 130px;
          height: 45px;
          :active{
            background-color: #a52121;
          }
        `
      case 'NegativeSmall':
        return css`
          cursor : pointer;
          background-color: #f29c9c;
          border : 3px solid #f29c9c;
          width : 100px;
          height: 40px;
          :active{
            background-color: #a52121;
          }
        `
    }
  }}
`

export default BasicButton;