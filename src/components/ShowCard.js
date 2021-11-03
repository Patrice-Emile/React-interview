import React from "react";
import styled from "@emotion/styled";

import Card from "./Card";
import Icon_X from "../img/icon_x.png";

// SHOWCARD STYLE
let ShowCardStyle = styled.div`
  background-color: #99a8b2;
  border-radius: 5px;
  margin: 20px auto;
  min-width: 400px;
  display:flex;
  flex-flow: column wrap;
  
  @media screen and (max-width: 1024px) {
    border-top:1px solid #1f6f8b;
    margin-bottom: 20px;

    div {
      width: 80%;
      margin: 0;
    }
  }

`;


// SHOWCARD COMPONENT
const ShowCard = (props) => {

  const {movie} = props
  const [show, setShow] = React.useState(true)
  // console.log(show)

  const buttonStyles = {
    backgroundColor: "red",
    borderRadius: 15,
    border: 0,
    padding:10,
    margin: '20px 0',
    width:'80%',
  }
  const divButtonStyles = {
    backgroundColor: "transparent",
    borderRadius: 50,
    width:'100%',
    boxShadow: 'none',
    display: "flex",
    justifyContent: "space-around",
  }

  return (
    <ShowCardStyle style={{display:show ? 'block':'none'}}>
      <Card key={movie.id} movie={movie}/>       
      <div style={divButtonStyles}>
        <button style={buttonStyles} onClick={() =>setShow(false)}>
          <img src={Icon_X}  alt={Icon_X} width="25px" height="20px" />
        </button>
      </div>
    </ShowCardStyle>
  );
};

export default ShowCard;
