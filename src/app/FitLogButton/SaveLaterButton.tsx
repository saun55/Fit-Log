"use client"

import { useContext } from "react";
import { FitLogType } from "../FitLogType/FitLogType";
import { FitLogContext } from "../Context/FitLogProvider";
import { FaBookmark } from "react-icons/fa";
import { toast, Zoom } from "react-toastify";

interface AddPlanButtonType{
  data:FitLogType
}

const SaveLaterButton = ({data}:AddPlanButtonType) => {
const {saveLater,setSaveLater} = useContext(FitLogContext)

const allReady = saveLater.some(a=> a.id === data.id)

const handelSave = ()=> {
  if(allReady){
 toast.success("Already in your save", {
position: "top-right",
autoClose: 1000,
hideProgressBar: false,
closeOnClick: false,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "colored",
transition: Zoom,
});
    return;
  }
  else{
    setSaveLater([...saveLater,data])
    toast.success("Save for later", {
position: "top-right",
autoClose: 1000,
hideProgressBar: false,
closeOnClick: false,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "colored",
transition: Zoom,
});
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