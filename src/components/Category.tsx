
//css
import styled from "styled-components";
//navlink(compared to Link, NavLink can be added  activeClassName="〜")
import { NavLink } from "react-router-dom";
//icons
import { IT, JP, FR, IN } from "country-flag-icons/react/3x2";

function Category() {
  return (
    <SList>
      <SLink to={"/cuisine/Italian"}>
        <IT title="Italy" className="..." />
        <h4>Italian</h4>
      </SLink>
      <SLink to={"/cuisine/Indian"}>
        <IN title="India" className="..." />
        <h4>India</h4>
      </SLink>
      <SLink to={"/cuisine/French"}>
        <FR title="France" className="..." />
        <h4>French</h4>
      </SLink>

      <SLink to={"/cuisine/Japanese"}>
        <JP title="Japan" className="..." />
        <h4>Japanese</h4>
      </SLink>
    </SList>
  );
}
export default Category;

const SList = styled.div`
  margin-bottom: 3rem;
  display: grid;
  gap: 1rem;
  justify-content: center;
  grid-template-columns: repeat(4, 1fr);
  @media (max-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;
const SLink = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  border-radius: 10px;

  box-shadow: ${(props) => props.theme.shadow};
  cursor: pointer;
  transition: 0.5s;

  h4 {
    font-size: 0.9rem;
  }
  svg {
    color: white;
    width: 1.5rem;
    margin-right: 10px;
  }
  &:hover{
    background: ${(props) => props.theme.primary};
  }
  &.active {
    background: ${(props) => props.theme.primary};
    svg {
      color: white;
    }
    h4 {
      color: white;
    }
  }
`;
