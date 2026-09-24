import { FaRegClock, FaRegStar } from "react-icons/fa";
import { MdOutlineDone } from "react-icons/md";
import { PiFireSimpleFill } from "react-icons/pi";
import { TiDelete } from "react-icons/ti";
import { FitLogType } from "../FitLogType/FitLogType";
import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
import { FitLogContext } from "../Context/FitLogProvider";

interface SavedCartType{
  PlanCart:FitLogType
}





const SavedCart = ({PlanCart}:SavedCartType) => {

const {saveLater,setSaveLater} = useContext(FitLogContext)

const handelDelete = ()=>{
  const pre = saveLater.filter(fit => fit.id !== PlanCart.id);
 setSaveLater(pre)
}

  return (
    <div className="flex w-full flex-col gap-4 rounded-2xl border border-[#252b35] bg-[#15181f] p-4 shadow-xl sm:p-5 md:flex-row md:items-center md:justify-between">

  {/* ================= LEFT SIDE ================= */}
  <div className="flex min-w-0 items-center gap-3 sm:gap-4">

    {/* Image */}
    <Image
      src={PlanCart.image}
      height={75}
      width={135}
      alt={PlanCart.name}
      className="h-20 w-28 shrink-0 rounded-xl object-cover sm:h-20 sm:w-32 md:h-[75px] md:w-[135px]"
    />

    {/* Content */}
    <div className="min-w-0">

      {/* Name */}
      <h1 className="truncate text-base font-black uppercase text-white sm:text-lg">
        {PlanCart.name}
      </h1>

      {/* Equipment */}
      <p className="mt-0.5 truncate text-xs text-[#9CA3AF] sm:text-sm">
        {PlanCart.equipment}
      </p>

      {/* Stats */}
      <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 sm:gap-x-4">

        {/* Duration */}
        <div className="flex items-center gap-1.5">
          <FaRegClock className="text-sm text-lime-400" />

          <span className="text-xs text-gray-300">
            {PlanCart.duration} min
          </span>
        </div>

        {/* Calories */}
        <div className="flex items-center gap-1.5">
          <PiFireSimpleFill className="text-sm text-lime-400" />

          <span className="text-xs text-gray-300">
            {PlanCart.caloriesBurned} kcal
          </span>
        </div>

        {/* Rating */}
        <div className="flex items-center gap-1.5">
          <FaRegStar className="text-sm text-lime-400" />

          <span className="text-xs text-gray-300">
            {PlanCart.rating}
          </span>
        </div>

      </div>
    </div>
  </div>


  {/* ================= RIGHT SIDE ================= */}
  <div className="flex w-full flex-wrap items-center gap-2 sm:justify-end sm:gap-3 md:w-auto">

    {/* View Details */}
    <Link href={`/Workouts/${PlanCart.id}`}>
    <button
      className="
        btn btn-sm
        flex-1
        rounded-full
        border border-[#374151]
        bg-transparent
        px-3
        text-xs
        text-gray-200
        hover:border-gray-500
        hover:bg-[#20242c]
        sm:flex-none
        sm:px-5
        sm:text-sm
      "
    >
      View Details
    </button>
</Link>


    {/* Delete */}
    <button
    onClick={handelDelete}
      className="
        btn btn-circle btn-sm
        border-none
        bg-transparent
        text-gray-500
        hover:bg-[#20242c]
        hover:text-white
      "
    >
      <TiDelete className="text-xl" />
    </button>

  </div>

</div>
  );
};

export default SavedCart;