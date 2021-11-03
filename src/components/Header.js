import styled from "@emotion/styled";
import React from "react";
import Title from "./Title";

// HEADER STYLE
const List = styled.header`
  display: flex;
  justify-content: space-around;
  flex-flow: column wrap;
  height: 250px;
  background-color: #1c2b2d;
  border-bottom: 5px solid #e6d5b8;
  box-shadow: 1px 1px 5px #000;
`;



// COMPONENT'S HEADER
const Header = () => {


  const searchStyle = {
    height: '100%',
    borderRadius: '150px',
    margin: 0,
    padding: 0,
    width: '100%',
    borderRadius: 'inherit',
    textAlign: 'center',
  }
  return (
  <List>
    <Title />
    <div>
      <input style={searchStyle} type="text" placeholder='Search'/>
    </div>
  </List>
);
}

export default Header;
