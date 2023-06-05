import { useEffect, useState } from "react";
//css
import styled from "styled-components";
//parameter
import { useParams } from "react-router-dom";

type DetailType = {
  id: number;
  image: string;
  title: string;
  summary: string;
  instructions: string;
  extendedIngredients: Array<{ id: number; original: string }>;
};

function Recipe() {
  const { recipename } = useParams<string>();
  const [details, setDetails] = useState<DetailType[]>([]);
  const [activeTab, setActiveTab] = useState<string>("instructions");

  const fetchDetails = async () => {
    const data = await fetch(`https://api.spoonacular.com/recipes/${recipename}/information?apiKey=${process.env.REACT_APP_API_KEY}`);
    const detailData = await data.json();
    setDetails([detailData]);
    console.log(detailData);
  };

  useEffect(() => {
    if (recipename) {
      fetchDetails();
    }
  }, [recipename]);

  return (
    <SdetailWrapper>
      {details.map((item: DetailType) => {
        const str = item.instructions
          .replace(/([.?!])\s*(?=[A-Z])/g, "$1|")
          .split("|")
          .join("<br/>");
        return (
          <>
            <h3>{item.title}</h3>
            <Ssection key={item.id}>
              <figure>
                {" "}
                <img src={item.image} alt="" />
              </figure>

              <div>
                <Sbuttonwrapper>
                  <button className={activeTab === "instructions" ? "active" : ""} onClick={() => setActiveTab("instructions")}>
                    Instructions
                  </button>
                  <button className={activeTab === "ingredients" ? "active" : ""} onClick={() => setActiveTab("ingredients")}>
                    Ingredients
                  </button>
                </Sbuttonwrapper>
                {activeTab === "instructions" && <p dangerouslySetInnerHTML={{ __html: str }}></p>}
                {activeTab === "ingredients" && (
                  <Sul>
                    {item.extendedIngredients.map((ingredient) => {
                      return <li key={ingredient.id}>{ingredient.original}</li>;
                    })}
                  </Sul>
                )}
              </div>
            </Ssection>
          </>
        );
      })}
    </SdetailWrapper>
  );
}
export default Recipe;

const SdetailWrapper = styled.div`
  h3 {
    margin-bottom: 2rem;
    text-align: center;
    color: ${(props) => props.theme.primary};
  }
  .active {
    background: ${(props) => props.theme.primary};
    color: white;
    position: relative;
  }
  .active:before {
    content: "";
    border: 12px solid transparent;
    border-top: 12px solid ${(props) => props.theme.primary};
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
  }
`;

const Ssection = styled.section`
  & p {
    font-weight: 500;
    line-height: 1.7;
  }

  & figure {
    /*image */
    margin: 0 auto 2rem;
    max-width: 500px;
    img {
      border-radius: 20px;
    }
  }
`;

const Sbuttonwrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 2rem;
  & button {
    padding: 1rem 1.5rem;
    border-radius: 100vh;
    background: white;
    color: ${(props) => props.theme.primary};
    border: 2px solid ${(props) => props.theme.primary};
    font-weight: 600;
  }
`;

const Sul = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  counter-reset: li_count;
  & li {
    padding: 1 rem;
    margin-bottom: 5px;
    font-size: 1rem;
    font-weight: 700;
    &:before {
      counter-increment: li_count;
      content: counter(li_count) ".";
      color: #f44336;
      margin-right: 5px;
    }
  }
`;
