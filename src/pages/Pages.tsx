import { Route,Routes, useLocation } from "react-router-dom";
//each page
import Home from "./Home";
import Cuisine from "./Cuisine";
import Searched from "./Searched";
import Recipe from "./Recipe";
import PopularAll from "./PopularAll";
import DessertAll from "./DessertAll";


//animation
import { AnimatePresence } from "framer-motion";

// path = "〜"   => show the element page
function Pages() {
  const location=useLocation();
/**
 useLocation :
returns the location object from the current URL, like ↓
 if  http://localhost:3000/products/school/?name=bags,
{
pathname: ‘/products/school/’,
search: ‘?bags’, hash: ‘’,
state: undefined}hash: “”
pathname: “/products/school/”
search: “?bags”
state: undefined
}
useLocation object will update each time when the URL changes.
 useful → when we want to trigger a function based on the change of our URL.
 */
  return (
    <AnimatePresence >
    <Routes location={location} key={location.pathname}>
      <Route path="/" element={<Home/>}/>
      <Route path="/cuisine/:type" element={<Cuisine/>}/>
      <Route path="/searched/:search" element={<Searched/>}></Route>
      <Route path="/recipe/:recipename" element={<Recipe/>}/>
      <Route path="/recipe/popular" element={<PopularAll/>}/>
      <Route path="/recipe/dessert" element={<DessertAll/>}/>

    </Routes>
    </AnimatePresence>
  );
}
export default Pages;
