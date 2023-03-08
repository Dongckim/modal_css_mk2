import React, { useRef, useState } from "react";
import styled from "styled-components";

const Select = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isOpen2, setIsOpen2] = useState(false);
    const [selectedOption, setSelectedOption] = useState('');
    const [selectedOption2, setSelectedOption2] = useState('');

    const options = ['리액트', '자바', '스프링', '리액트 네이티브'];

    const handleOptionHandler = (option) => {
        setSelectedOption(option)
        setIsOpen(false)
    }
    const handleOptionHandler2 = (option) => {
      setSelectedOption2(option)
      setIsOpen2(false)
    }

    return (
        <>
            <SelectWrapper>
            <SelectContainer>
            <SelectHeader onClick={()=>setIsOpen(!isOpen)}>
                <span>{selectedOption || 'Select an option'}</span>
                <span>{isOpen ? '▲' : '▼'}</span>
            </SelectHeader>
            {isOpen && (
            <SelectList>
            {options.map((option) => (
                <Option key={option} onClick={() => handleOptionHandler(option)}>
                {option}
                </Option>
            ))}
            </SelectList>
        )}
            </SelectContainer>
            <div style={{overflow:'hidden', height:'150px', display:'flex', alignItems:'center'}}>
            <SelectContainer>
            <SelectHeader onClick={()=>setIsOpen2(!isOpen2)}>
                <span>{selectedOption2 || 'Select an option'}</span>
                <span>{isOpen2?'▲' : '▼'}</span>
            </SelectHeader>
            {isOpen2 && <SelectList>
                {options.map((item)=>(
                <Option key={item} onClick={()=>handleOptionHandler2(item)}>
                    {item}
                </Option>
                ))}
            </SelectList>
        }
            </SelectContainer>
        </div>
        </SelectWrapper>
    </>
    )
}

const SelectWrapper = styled.div`
  border: 2.5px solid #bfbfbf;
  background-color: #ffffff;
  width: 100vw;
  height: 150px;
  display: flex;
  align-items: center;
  z-index: 1;
`
const SelectContainer = styled.div`
  position: relative;
  width: 400px;
`

const SelectHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #fff;
  cursor: pointer;
`

const SelectList = styled.div`
  position: absolute;
  width: 100%;
  max-height: 150px;
  overflow-y: scroll;
  border: 1px solid #cccccc;
  border-radius: 5px;
  background-color: #ffffff;
  z-index: 1;
`

const Option = styled.div`
  padding: 10px;
  cursor: pointer;
  &:hover {
    background-color: #f0f0f0;
  }
`;

export default Select;