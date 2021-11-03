import React from "react";
import styled from "@emotion/styled";
import ProgressBar from "./ProgressBar";
import Icon_FoTop from "../img/icon_finger_on_the_top.png";
import Icon_FoBot from "../img/icon_finger_on_the_bottom.png";

// CARD STYLE
let CardStyle = styled.div`

  text-align: center;
  display:flex;
  flex-flow:column;
  background-color: #99a8b2;
  p {
    margin: 2% auto;
  }
  
  img:hover {
    transform: scale(1.1);
  }

  @media screen and (max-width: 1024px) {
    p {
        font-size: 2rem;
      
    }
  }
  
`;

// CARD COMPONENT
const Card = (props) => {

  const {movie} = props

  const [toggleLike, setToggleLike] = React.useState(false)
  const [toggleDislike, setToggleDislike] = React.useState(false)

  const pourcentage =(toggleLike,toggleDislike)=>{
    let nblike=movie.likes
    let nbdislike=movie.dislikes
    nblike+=toggleLike?1:0
    nbdislike+=toggleDislike?1:0
    return Math.floor((nblike*100) / (nblike+nbdislike))
  }


  const containerStyles = {
    height: '100px',
    margin: '20px 0',
    display: "flex",
    flexFlow: 'row wrap',
    justifyContent: "space-around",

  }

  const buttonStyles = {
    backgroundColor: "transparent",
    border: 0,
  }

  const containerVoteStyles = {
    width: '100%',
    display: "flex",
    flexFlow: 'row wrap',
    justifyContent: "space-around",
  }


  return (
    <CardStyle>
      <p><b>{movie.title}</b></p>
      <p>Type : {movie.category}</p>
      <ProgressBar pourcentage={pourcentage(toggleLike,toggleDislike)}/>
      <div style={containerStyles}>

        <button style={buttonStyles} onClick={()=> (toggleDislike ? null:setToggleLike(!toggleLike))}>
          <img src={Icon_FoTop}  alt={Icon_FoTop} style={{filter:toggleLike ? 'invert(100%)' : 'none'}}/>
        </button>
        <button style={buttonStyles} onClick={()=> (toggleLike ? null:setToggleDislike(!toggleDislike))}>
          <img src={Icon_FoBot}  alt={Icon_FoBot} style={{filter:toggleDislike ? 'invert(100%)' : 'none'}}/>
        </button>
        <div style={containerVoteStyles}>
          <p>{toggleLike ? movie.likes+1 : movie.likes}</p>
          <p>{toggleDislike ? movie.dislikes+1 : movie.dislikes}</p>
        </div> 
      </div>
    </CardStyle>
  );
};

export default Card;
