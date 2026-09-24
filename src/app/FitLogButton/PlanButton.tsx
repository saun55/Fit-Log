"use client"
import { useContext } from "react";
import { FitLogContext } from "../Context/FitLogProvider";


const PlanButton = () => {
  const {addPlan}= useContext(FitLogContext)
  return (
    <>
          <button className="">Plan <span className="bg-[#C2F800] text-black rounded-full text-11 px-1.5 font-inter">{addPlan.length}</span></button>

</>
  );
};

export default PlanButton;