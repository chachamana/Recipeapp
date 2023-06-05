import React, { useState, useContext } from "react";

//type
type PropsType = {
  children: React.ReactNode;
};
type PopularType = {
  id: number;
  image: string;
  title: string;
};
type DessertType = {
  id: number;
  image: string;
  title: string;
};

const AppContext = React.createContext<any | null>(null);

const AppProvider: React.FC<PropsType> = ({ children }) => {
  const [popular, setPopular] = useState<PopularType[]>([]);
  const [dessert, setDessert] = useState<DessertType[]>([]);


  const getPopular = async () => {
    const check = localStorage.getItem("popular");
    if (check) {
      setPopular(JSON.parse(check)); //if there is data already, no need to fetch again
    } else {
      const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9`);
      const data = await api.json();
      localStorage.setItem("popular", JSON.stringify(data.recipes));
      setPopular(data.recipes); //returned data
      console.log(data.recipes);
    }
  };

  const getDessert = async () => {
    const check = localStorage.getItem("dessert");
    if (check) {
      setDessert(JSON.parse(check)); //if there is data already, no need to fetch again
    } else {
      const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9&tags=dessert`);
      const data = await api.json();
      localStorage.setItem("dessert", JSON.stringify(data.recipes));
      setDessert(data.recipes); //returned data
      console.log(data.recipes);
    }
  };





  return <AppContext.Provider value={{ popular, getPopular,dessert,getDessert }}>{children}</AppContext.Provider>;
};

//costom hook
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
