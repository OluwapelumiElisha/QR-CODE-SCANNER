import React from "react";
import { useList } from "../utils/useLists";
import { NavLink } from "react-router-dom";

const DashboardLayout = ({ children }) => {
  return (
    <div className="dashboard-layout ">
      <div className="relative  bg-customColor z-50">
      {/* <div className="absolute top-3 right-0"> */}
          <section>
            {children}</section>
        {/* </div> */}
        <div className="fixed w-full bottom-0 left-0 text-white bg-customColor">
          <div className="flex justify-around py-1">
            {useList.map((elem, i) => (
             <NavLink key={i}
             className={({ isActive, isPending }) =>
               isPending ? "pending" : isActive ? "text-yellow-600" : ""
             }
             to={elem.path}
           >
             <div className="flex flex-col items-center">
               <img className="w-7 h-7" src={elem.icon} alt={elem.name} />
               <span className="text-md mt-1">{elem.name}</span>
             </div>
           </NavLink>
           
            ))}
          </div>
        </div>
      </div>
      <div className="relative">
      
      </div>
    </div>
  );
};

export default DashboardLayout;
