import React, { useState } from "react";
import Menucard from "./Menucard";
import Menu from './MenuApi'

const Resturant = () => {
  const [menuData,setMenuData] = useState(Menu);
  // console.log(menuData)
  

  const filteritem = (category) =>{
      const updatedList = Menu.filter((curElem)=>{
        return curElem.category === category
      })
      setMenuData(updatedList);
  }
  return (
    <>
    <nav className="navbar">
      <div className="btn-group">
        <button className="btn-group__item" onClick={ () => filteritem("breakfast")}>Breakfast</button>
        <button className="btn-group__item" onClick={ () => filteritem("lunch")}>lunch</button>
        <button className="btn-group__item" onClick={ () => filteritem("evening")}>Evening</button>
        <button className="btn-group__item" onClick={ () => filteritem("dinner")}>Dinner</button>
        <button className="btn-group__item" onClick={()=>setMenuData(Menu)}>All</button>
      </div>
    </nav>
    <Menucard menuData={menuData}/>
     </>
  );
};

export default Resturant;
