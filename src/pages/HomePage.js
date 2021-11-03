import styled from "@emotion/styled";
import React from "react";

import TitlePage from "../components/TitlePage";
import ShowCard from "../components/ShowCard";

import { getMovies } from "../functions/Functions";

// HOME PAGE STYLE
const Content = styled.div`
  padding: 50px;
  align-content: center;
  box-shadow: 5px 5px 5px #000;
  background-color: #1c2b2d;
  display: flex;
  flex-flow:wrap;


  
  @media screen and (max-width: 1024px) {
    div {
      width: 80%;
      margin: 50px auto;
      margin-bottom: 100px;
    }
    padding: 0;
  }
`;



const movies = getMovies()
// console.log(movies)

// HOME PAGE
const HomePage = () => {


  return (
    <div>
      <TitlePage content={"All movies are here"} />
      <Content>
        {movies.map((movie) => (
            <ShowCard key={movie.id} movie={movie} />
          ))} 
      </Content>
    </div>
  );
};

export default HomePage;
