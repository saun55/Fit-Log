"use client";

import { useContext, useState } from "react";
import { FitLogContext } from "../Context/FitLogProvider";
import TodayPlanCart from "./TodayPlanCart";
import SavedCart from "./SavedCart";
import { FitLogType } from "../FitLogType/FitLogType";
import Link from "next/link";
type sortType = "duration" | "calories" | "rating";

const MyPlanPage = () => {
  const { addPlan, saveLater } = useContext(FitLogContext);

  const [activeTab, setActiveTab] = useState<"plan" | "saved">("plan");

  const [sortBy, setSortBy] = useState<sortType>("duration");

  const sortSelector = (fit: FitLogType[]) => {
    const sortByfit = [...fit];

    if (sortBy === "duration") {
      sortByfit.sort((a, b) => b.duration - a.duration);
    } else if (sortBy === "rating") {
      sortByfit.sort((a, b) => b.rating - a.rating);
    } else if (sortBy === "calories") {
      sortByfit.sort((a, b) => b.caloriesBurned - a.caloriesBurned);
    }

    return sortByfit;
  };

  const savedSort = sortSelector(saveLater);

  const addPlanSort = sortSelector(addPlan);

  //  const Exercises = addPlanSort.length

  // const totalTime = addPlanSort.reduce((total , valu)=> total+ valu.duration,0)

  // const totalCslori = addPlanSort.reduce((total,valu)=>total+ valu.caloriesBurned ,0)

  const currentData = activeTab === "plan" ? addPlanSort : savedSort;

  const exercises = currentData.length;

  const totalTime = currentData.reduce(
    (total, work) => total + work.duration,
    0,
  );

  const totalCslori = currentData.reduce(
    (acc, valu) => valu.caloriesBurned + acc,
    0,
  );

  return (
    <div className="space-y-5 mx-auto w-full max-w-7xl px-7 py-8">
      <div className="space-y-4">
        <h1 className="font-bold font-oswald text-[30px]">MY PLAN</h1>

        <p className="text-[14px] font-inter">
          Cap of five lifts for today. Finish them, then load more.
        </p>

        {/*========= today plan total==========*/}

        {
          <div className="border-2 text-black bg-[#13161D] py-8 flex justify-around items-center">
            <div className="grid grid-cols-1 text-[#8A92A0]">
              Exercises{" "}
              <span className="text-[#C2F800] font-bold font-oswald text-[30px]">
                {exercises}
              </span>
            </div>

            <div className="grid grid-cols-1 text-[#8A92A0]">
              Minutes{" "}
              <span className="text-white font-bold font-oswald text-[30px]">
                {totalTime}
              </span>
            </div>

            <div className="grid grid-cols-1 text-[#8A92A0]">
              Calories{" "}
              <span className="text-white font-bold font-oswald text-[30px]">
                {totalCslori}
              </span>
            </div>
          </div>
        }
      </div>

      {/* ================= HEADER ================= */}
      <div className="flex items-center justify-between ">
        {/* ================= TABS ================= */}
        <div className="flex rounded-[28px] border border-[#252b35] bg-[#15181f] p-1 shadow-inner">
          {/* Today's Plan */}
          <button
            onClick={() => setActiveTab("plan")}
            className={`rounded-[22px] px-5 py-2 font-semibold transition-all duration-300 ${
              activeTab === "plan"
                ? "bg-[#202631] text-white shadow-inner"
                : "text-gray-500 hover:text-gray-300"
            }`}
          >
            Today&#39;s Plan
          </button>

          {/* Saved */}
          <button
            onClick={() => setActiveTab("saved")}
            className={`rounded-[22px] px-5 py-2 font-semibold transition-all duration-300 ${
              activeTab === "saved"
                ? "bg-[#202631] text-white shadow-inner"
                : "text-gray-500 hover:text-gray-300"
            }`}
          >
            Saved
          </button>
        </div>

        {/* ================= SORT ================= */}
        <select
          value={sortBy}
          className="select select-neutral"
          onChange={(b) => setSortBy(b.target.value as sortType)}
        >
          <option disabled>Sort By</option>
          <option value={"duration"}>Duration</option>
          <option value={"calories"}>Calories</option>
          <option value={"rating"}>Rating</option>
        </select>
      </div>

      {/* ================= TODAY'S PLAN ================= */}
      {activeTab === "plan" && (
        <div className="mt-8 space-y-4">
          {addPlanSort.length > 0 ? (
            addPlanSort.map((f) => <TodayPlanCart key={f.id} PlanCart={f} />)
          ) : (
            <div className="space-y-2 grid items-center text-center">
              <h1 className="font-bold font-oswald text-[20px]">
                NOTHING HERE YET
              </h1>
              <p className="font-inter text-[12px]">
                Browse the library and add a lift to get today moving.
              </p>
              <Link
                className="btn btn-xs mt-2 h-7 min-h-7 mx-auto px-3 text-[10px] border-none bg-[#C2F800] text-black hover:bg-[#aee000]"
                href={"/"}
              >
                Go to workouts
              </Link>
            </div>
          )}
        </div>
      )}

      {/* ================= SAVED ================= */}
      {activeTab === "saved" && (
        <div className="mt-8 space-y-4">
          {savedSort.length > 0 ? (
            savedSort.map((f) => <SavedCart key={f.id} PlanCart={f} />)
          ) : (
            <div className="space-y-2 grid items-center text-center">
              <h1 className="font-bold font-oswald text-[20px]">
                NOTHING HERE YET
              </h1>
              <p className="font-inter text-[12px]">
                Browse the library and add a lift to get today moving.
              </p>
              <Link
                className="btn btn-xs mt-2 h-7 min-h-7 mx-auto px-3 text-[10px] border-none bg-[#C2F800] text-black hover:bg-[#aee000]"
                href={"/"}
              >
                Go to workouts
              </Link>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default MyPlanPage;
