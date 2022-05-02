import React, { useState } from "react";
import styled from "styled-components";
import { changeIndex } from "../../actions/changeIndexAction";

import lotties from "../../assets/lottiefiles/lottieTypes";
import dispatcher from "../../dispatcher";
const Main = styled("div")`
  font-family: sans-serif;
  background: none;
  height: 10vh;
  margin-left:100%;
  border:1px rounded white; 
  color:white
`;

const DropDownContainer = styled("div")`
  width: 15.5em;
  margin: 0 auto;
  
`;

const DropDownHeader = styled("div")`
  margin-bottom: 0.8em;
  padding: 0.4em 2em 0.4em 0.5em;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.15);
  font-weight: 500;
  font-size: 1.3rem;
  border:1px solid none;
  border-radius:15px;
  background: #0c232b;
  color:white
 
`;

const DropDownListContainer = styled("div")``;

const DropDownList = styled("ul")`
  padding: 0;
  margin: 0;
  
  padding-left:0.5em;
  background: none;
  border:1px solid #0c232b;
  border-radius:10px;
  box-sizing: border-box;
  background:#0c232b;
  
  font-size: 1.3rem;
  font-weight: 500;
  &:first-child {
    padding-top: 0.8em;
  }
`;

const ListItem = styled("li")`
  list-style: none;
  margin-bottom: 0.8em;
`;


export default function DropDown() {
  const [isOpen, setIsOpen] = useState(false);
  const toggling = () => setIsOpen(!isOpen);
 
function changeLottie(e){
    setCurrentLottie(e.target.id);
    changeIndex(currentLottie);
    } 
  const [currentLottie,setCurrentLottie]=useState(0);
// const changeLottie=(e)=>setCurrentLottie(e.target.id);
  return (
    <Main>
      <h1>Animation</h1>
      <DropDownContainer>
        <DropDownHeader onClick={toggling}>{lotties[currentLottie].animationName}</DropDownHeader>
        {isOpen && (
          <DropDownListContainer>
            <DropDownList>
              {lotties.map((l,index)=><ListItem id={index} onClick={changeLottie} >{l.animationName}</ListItem>)}
            </DropDownList>
          </DropDownListContainer>
        )}
      </DropDownContainer>
    </Main>
  );
}
