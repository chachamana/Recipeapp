import { useEffect } from "react";
import styled from "styled-components";
//slide
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import "@splidejs/react-splide/css";
//link
import { Link } from "react-router-dom";
//useContext
import { useGlobalContext } from "../Context";

type PopularType = {
  id: number;
  image: string;
  title: string;
};

function Popular() {
  const { popular, getPopular } = useGlobalContext();

  useEffect(() => {
    getPopular();
  }, []);

  return (
    <>
      <Swrapper>
        <Stitle>
          <h3>Popular menus</h3>
          <Link to="/recipe/popular">All </Link>
        </Stitle>
        <Splide
          options={{
            type: "loop",
            drag: "free",
            gap:"0.5rem",
            arrows: false,
            pagination: false,
            perPage: 4,
            breakpoints: {
              768: {
                perPage: 2,
              }},
          autoScroll: {
              pauseOnHover: false,
              pauseOnFocus: false,
              rewind: false,
              speed: 1,
            },
          }}
         extensions={{ AutoScroll }}
        >
          {popular.map((recipe: PopularType) => {
            return (
              <SplideSlide key={recipe.id}>
                <Scard>
                  <Link to={"/recipe/" + recipe.id}>
                    <p>
                      <img src={recipe.image} alt={recipe.title} />
                    </p>
                    <h4>{recipe.title}</h4>
                  </Link>
                </Scard>
              </SplideSlide>
            );
          })}
        </Splide>
      </Swrapper>
    </>
  );
}
export default Popular;

//css
const Swrapper = styled.div`
  margin-bottom: 3rem;
`;

const Stitle = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 0.5rem;
  margin-bottom: 1rem;
  h3 {
    color: ${(props) => props.theme.primary};
  }
  a {
    display: block;
    padding: 0.5rem 2rem;
    border: 2px solid ${(props) => props.theme.primary};
    border-radius: 10px;
    color: ${(props) => props.theme.primary};
    font-weight: 700;
    text-decoration: none;
    &:hover {
      background-color: ${(props) => props.theme.primary};
      color: white;
      transition: 0.5s;
    }
  }
`;

const Scard = styled.div`
display: flex;
  min-height: 15rem;
  margin: 0.5rem;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: ${(props) => props.theme.shadow};
  a {
    display: flex;
    flex-direction: column;
    &:hover {
      opacity: 0.5;
      transition: 0.5s;
    }
  }
  img {
height: 100%;  }
  p {
    text-align: center;
    font-size: 0.9rem;
    font-weight: 500;
      max-height: 10rem;
    height: 100%;
  }
   h4 {
    text-align: center;
      margin: auto;
      padding: 0 0.5rem;
    }
`;
