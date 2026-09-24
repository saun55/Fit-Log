"use client"
import { useContext } from "react";
import { FitLogContext } from "../Context/FitLogProvider";


const SavedButon = () => {
  const {saveLater} =useContext(FitLogContext)
  return (
          <button>Saved <span className="border-[#ffffff49] border-1 px-1 rounded-full">{saveLater.length}</span></button>
  );
};

export default SavedButon;