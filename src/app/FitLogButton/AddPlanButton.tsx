"use client";

import { useContext } from "react";
import { FitLogContext } from "../Context/FitLogProvider";
import { FaCalendarPlus } from "react-icons/fa";
import { FitLogType } from "../FitLogType/FitLogType";
import { toast, Zoom } from "react-toastify";
interface AddPlanButtonType {
  data: FitLogType;
}

const AddPlanButton = ({ data }: AddPlanButtonType) => {
  const { addPlan, setAddPlan } = useContext(FitLogContext);

  const allReady = addPlan.some((a) => a.id === data.id);

  const handelAddPlan = () => {
    if (allReady) {
      toast.error("Already Saved", {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Zoom,
      });
      return;
    } else {
      setAddPlan([...addPlan, data]);
      toast.success("Add to today's plan", {
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
  };

  return (
    <button
      onClick={() => {
        handelAddPlan();
      }}
      className="btn bg-[#CCFF00] rounded-lg px-5 text-black"
    >
      <FaCalendarPlus />
      Add to today&#39;s plan
    </button>
  );
};

export default AddPlanButton;
