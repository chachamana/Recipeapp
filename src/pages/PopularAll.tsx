//useContext
import { useGlobalContext } from "../Context";
import styled from "styled-components";
//link
import { Link } from "react-router-dom";

type PopularType = {
  id: number;
  image: string;
  title: string;
};

function PopularAll() {
  const { popular } = useGlobalContext();
  return (
    <>
       <Swrapper>
        <Stitle>
          <h3>Dessert menus all</h3>
        </Stitle>
        <section>
          {popular.map((recipe: PopularType) => {
            return (
              <Scard key={recipe.id}>
                <Link to={"/recipe/" + recipe.id}>
                  <p><img src={recipe.image} alt={recipe.title} /></p>
                  <h4>{recipe.title}</h4>
                </Link>
              </Scard>
            );
          })}
        </section>
      </Swrapper>
    </>
  );
}
export default PopularAll;


//styled components
const Swrapper = styled.div`
  margin-bottom: 40px;
  padding: 0px;
  & section {
    display: grid;
    gap: 1.5rem;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 1fr);
    @media (max-width:${(props) => props.theme.mqwidth}px) {
      grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
  }
  }
`;

const Stitle = styled.div`
  h3 {
    color: ${(props) => props.theme.primary};
    margin-bottom: 1rem;
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
      height: 100%;
    }
    h4 {
      text-align: center;
      margin: auto;
      padding:0 0.5rem;
    }
`;


