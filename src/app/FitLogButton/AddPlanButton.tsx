"use client"

import { useContext } from "react";
import { FitLogContext } from "../Context/FitLogProvider";
import { FaCalendarPlus } from "react-icons/fa";
import { FitLogType } from "../FitLogType/FitLogType";
interface AddPlanButtonType{
  data:FitLogType
}

const AddPlanButton = ({data}:AddPlanButtonType) => {
const {addPlan,setAddPlan} = useContext(FitLogContext)

const allReady = addPlan.some(a=> a.id === data.id)

const handelAddPlan = ()=> {
  if(allReady){
    return;
  }
  else{
    setAddPlan([...addPlan,data])
  }

}

  return (
              <button
              onClick={()=>{handelAddPlan()}} 
              className="btn bg-[#CCFF00] rounded-lg px-5 text-black">
                <FaCalendarPlus />
                Add to today&#39;s plan
              </button>
  );
};

export default AddPlanButton;