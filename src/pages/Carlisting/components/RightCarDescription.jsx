import React from "react";
import Price from "./Price";
import CarSpec from "./CarSpec";
import UserDetails from "./UserDetails";
function RightCarDescription({ car }) {
  console.log(car);
  return (
    <div className="flex flex-col pt-3 mt-2 md:mt-10 rounded-3xl md:mx-5 gap-3 md:gap-5">
      <div className="p-1 shadow-slate-200 border-2 border-slate-200 shadow-md rounded-sm">
        <Price sellingPrice={car.sellingPrice} />
      </div>
      <div className="p-1 shadow-slate-200 border-2 border-slate-200 shadow-md rounded-sm">
        <CarSpec car={car} />
      </div>
      <div className="p-1 shadow-slate-200 border-2 border-slate-200 shadow-md rounded-sm">
        <UserDetails car={car}/>
      </div>
    </div>
  );
}

export default RightCarDescription;
