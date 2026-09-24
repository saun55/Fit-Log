"use client"
import { useContext } from "react";
import { FitLogContext } from "../Context/FitLogProvider";
import Link from "next/link";


const PlanButton = () => {
  const {addPlan}= useContext(FitLogContext)
  return (
    <>
          <Link href={"/My-Plan"} className="">Plan <span className="bg-[#C2F800] text-black rounded-full text-11 px-1.5 font-inter">{addPlan.length}</span></Link>

</>
  );
};

export default PlanButton;