"use client"

import { useContext } from "react";
import { FitLogType } from "../FitLogType/FitLogType";
import { FitLogContext } from "../Context/FitLogProvider";
import { FaBookmark } from "react-icons/fa";

interface AddPlanButtonType{
  data:FitLogType
}

const SaveLaterButton = ({data}:AddPlanButtonType) => {
const {addPlan,setSaveLater} = useContext(FitLogContext)

const allReady = addPlan.some(a=> a.id === data.id)

const handelSave = ()=> {
  if(allReady){
    return;
  }
  else{
    setSaveLater([...addPlan,data])
  }

}

  return (
              <button
              onClick={()=>{handelSave()}}
              className="btn btn-outline rounded-lg border-gray-600 text-white hover:border-[#CCFF00]">
                <FaBookmark />
                Save for later
              </button>
  );
};

export default SaveLaterButton;