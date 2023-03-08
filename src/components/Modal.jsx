import React, { useRef, useState } from "react";
import styled from "styled-components";
import BasicButton from "./BasicButton";

const Modal = () => {

const outSection = useRef()

const [toggle, setToggle] = useState(false)
  const toggleModal = () => {
    setToggle(!toggle)
  }
const [toggle2, setToggle2] = useState(false)
const toggleModal2 = () => {
    setToggle2(!toggle2)
  }
    return(
        <div style={{display:'flex', gap:'15px'}}>
            <BasicButton NormalSmall onClick={toggleModal}>open modal</BasicButton>
            { toggle ? 
            <ModalLayout>
                <ModalContent>
                    닫기와 확인 버튼 2개가 있고, 외부 영역을 눌러도 모달이 닫히지 않아요.
                    <div style={{display:'block',float:'bottom', marginTop : '128px'}}>
                        <BasicButton NegativeSmall onClick={toggleModal}>닫기</BasicButton>
                        <BasicButton NormalSmall>확인</BasicButton>
                    </div>
                </ModalContent>
            </ModalLayout> : null } 

            <BasicButton LargeNegative onClick={toggleModal2}>open modal</BasicButton>
            {toggle2 ? 
            <ModalLayout ref={outSection} onClick={(event) => {
            if(outSection.current === event.target){
                setToggle2(false)
            }
            }}>
            <ModalContent>
                닫기 버튼 1개가 있고, <StCancelBtn onClick={toggleModal2}>X</StCancelBtn><br/>
                외부 영역을 누르면 모달이 닫혀요.
            </ModalContent>
            </ModalLayout>
            :null}
        </div>
        
    )
        
    
}

const ModalLayout = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
`

const ModalContent = styled.div`
  background-color: #fff;
  height: 200px;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.5);
  max-width: 80%;
  max-height: 80%;
`

const StCancelBtn = styled.span`
  display: flex;
  float: right;
  justify-content: center;
  align-items: center;
  height: 35px;
  width: 35px;
  border-radius:25px;
  border: 2px solid grey;
  :hover{
    border: 2px solid black;
  }
`

export default Modal