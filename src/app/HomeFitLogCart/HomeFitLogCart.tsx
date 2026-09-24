import Image from "next/image";
import { FitLogType } from "../FitLogType/FitLogType";
import { FaRegClock, FaRegStar } from "react-icons/fa";
import { PiFireSimpleFill } from "react-icons/pi";
import Link from "next/link";

interface HomeFitLogCartType {
  cart: FitLogType;
}

const HomeFitLogCart = ({ cart }: HomeFitLogCartType) => {
  return (
    <>
      <Link href={`/Workouts/${cart.id}`}>
        <div>
          <div className="card w-full max-w-xl overflow-hidden border border-base-300 bg-[#15171d] text-white shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
            {/* Image */}
            <figure className="h-72 w-full">
              <Image
                src={cart.image}
                alt={cart.name}
                className="h-full w-full object-cover"
                height={150}
                width={150}
              />
            </figure>

            {/* Card Body */}
            <div className="card-body p-7">
              {/* Tags */}
              <div className="flex flex-wrap gap-3">
                {cart.muscleGroups.map((muscle) => (
                  <div
                    key={muscle}
                    className="badge bg-[#C2F800]  rounded-full px-5 py-4 text-[11px] font-bold font-inter text-black uppercase"
                  >
                    {muscle}
                  </div>
                ))}
              </div>

              {/* Name */}
              <h2 className="mt-2 text-[18px] font-oswald font-bold uppercase">
                {cart.name}
              </h2>

              {/* Equipment */}
              <p className="text-lg text-gray-400">{cart.equipment}</p>

              <div className="divider my-1 border-gray-700"></div>

              {/* Stats */}

              <div className="mt-4 flex flex-wrap gap-3">
                <FaRegClock className="text-[#9CA3AF] text-lg" />
                <span className="text-[#9CA3AF] ">{cart.duration} min</span>

                <PiFireSimpleFill className="text-[#9CA3AF] text-lg" />
                <span className="text-[#9CA3AF] ">
                  {cart.caloriesBurned} Kcal
                </span>

                <FaRegStar className="text-[#9CA3AF] text-lg" />
                <span className="text-[#9CA3AF]">{cart.rating}</span>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default HomeFitLogCart;
