//Router
import {BrowserRouter,Link} from 'react-router-dom';
//components
import Search  from './components/Search';
import Category from './components/Category';
//pages
import Pages from './pages/Pages';
//css
import styled from 'styled-components';
//Icon
import { FiCoffee } from "react-icons/fi";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Nav>
        <FiCoffee/>
        <Logo to={'/'}>Recipe App</Logo>
      </Nav>
      <Search/>
      <Category/>
      <Pages/> {/*changed by page link*/ }
      </BrowserRouter>
    </div>
  );
}

export default App;

const Logo = styled(Link)`
  text-decoration:none;
  font-size:2rem;
  font-weight:700;
  margin-left:0.5rem;
  color: ${props => props.theme.primary};
`

const Nav = styled.div`
  padding:1rem 0.5rem 2rem;
  display:flex;
  justify-content:flex-start;
  align-items:center;
  svg{
    font-size:2rem;
    color: ${props => props.theme.primary};
  }
`