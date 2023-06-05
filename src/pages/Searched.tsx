import React from "react";
import { useEffect, useState } from "react";
//parameter
import { useParams } from "react-router-dom";
//css
import styled from "styled-components";

//nearly copy of Cuisine.tsx
type SearchedType = {
  id: number;
  image: string;
  title: string;
};

function Searched() {
  const [searchedRecipes, setSearchedRecipes] = useState<SearchedType[]>([]);
  const { search } = useParams<string>();

  const getSearched = async (name: string) => {
    const api = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${name}`);
    const data = await api.json();
    setSearchedRecipes(data.results);
  };

  useEffect(() => {
    if (search) { //part of current url
      getSearched(search);
    }
  }, [search]);

  return (
    <Grid>
      {searchedRecipes.map((item) => {
        return (
          <Card key={item.id}>
            <img src={item.image} alt="" />
            <h4>{item.title}</h4>
          </Card>
        );
      })}
    </Grid>
  );
}
export default Searched;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
  grid-gap: 4rem;
`;
const Card = styled.div`
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 2rem;
  }
  a {
    text-decoration: none;
  }
  h4 {
    text-align: center;
    margin-bottom: 1rem;
  }
`;
