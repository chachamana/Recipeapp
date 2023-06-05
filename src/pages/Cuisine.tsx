import React, { useState, useEffect } from "react";
//css
import styled from "styled-components";
//animation
import { motion } from "framer-motion";
//to put out the keywords
import { Link, useParams } from "react-router-dom";

type CuisineType = {
  id: number;
  image: string;
  title: string;
};

function Cuisine() {
  const [cuisine, setCuisine] = useState<CuisineType[]>([]);
  const { type } = useParams<string>(); // from pages.tsx <Route path="/cuisine/:type" element={<Cuisine/>}/>

  const getCuisine = async (name: string) => {
    const api = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&cuisine=${name}&number=12`);
    const data = await api.json();
    setCuisine(data.results);
  };

  useEffect(() => {
    if (type) {
      getCuisine(type);
      console.log(type);
    }
  }, [type]);

  return (
    <>
      <Swrapper animate={{ opacity: 1 }} initial={{ opacity: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
        <section>
          {cuisine.map((item) => {
            return (
              <Scard key={item.id}>
                <Link to={"/recipe/" + item.id}>
                  <p>
                    <img src={item.image} alt="" />
                  </p>
                  <h4>{item.title}</h4>
                </Link>
              </Scard>
            );
          })}
        </section>
      </Swrapper>
    </>
  );
}
export default Cuisine;

const Swrapper = styled(motion.div)`
  margin-bottom: 40px;
  padding: 0px;
  & section {
    display: grid;
    gap: 1.5rem;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 1fr);
    @media (max-width: ${(props) => props.theme.mqwidth}px) {
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: repeat(2, 1fr);
    }
  }
`;

const Scard = styled.div`
  display: flex;
  min-height: 15rem;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: ${(props) => props.theme.shadow};

  a {
    width: 100%;
    display: flex;
    flex-direction: column;
    &:hover {
      opacity: 0.5;
      transition: 0.5s;
    }
  }
  img {
    height: 100%;
  }
  p {
    text-align: center;
    font-size: 0.9rem;
    font-weight: 500;
    max-height: 10.5rem;
  }
  h4 {
    text-align: center;
    margin: auto;
    padding: 0 0.2rem;
  }
`;

/*
const SCard = styled.div`

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
*/
