import AddPlanButton from "@/app/FitLogButton/AddPlanButton";
import SaveLaterButton from "@/app/FitLogButton/SaveLaterButton";
import { FitLogType } from "@/app/FitLogType/FitLogType";

import Image from "next/image";

interface FitLogDetailsType {
  params: Promise<{ Id: string }>;
}

export const generateStaticParams = async () => {
  const res = await fetch("https://api.abcz.workers.dev/api/fitlog");
  const data = await res.json();
  return data.map((fitData: FitLogType) => ({ Id: String(fitData.id) }));
};

const FitLogDetails = async ({ params }: FitLogDetailsType) => {
  const { Id } = await params;
  const res = await fetch(`https://api.abcz.workers.dev/api/fitlog/${Id}`);

  const data = await res.json();

  return (
    <div>
      <div className="min-h-screen bg-[#090b0f] p-5 text-white">
        <div className="mx-auto max-w-6xl border border-[#00aaff] p-5 md:p-8">
          <div className="grid gap-8 border border-dotted border-[#0088cc] p-0 md:grid-cols-2">
            {/* ================= IMAGE ================= */}
            <div className="h-full min-h-[400px]">
              <Image
                src={data.image}
                alt={data.name}
                className="h-full  w-full rounded-xl object-cover"
                width={150}
                height={150}
              />
            </div>

            {/* ================= DETAILS ================= */}
            <div className="py-1 md:pr-1">
              {/* Title */}
              <h1 className="text-3xl font-black uppercase leading-tight tracking-wide md:text-4xl">
                {data.name}
              </h1>

              {/* Description */}
              <p className="mt-3 max-w-xl text-sm leading-6 text-gray-400">
                {data.description}
              </p>

              {/* Muscle Groups */}
              <div className="mt-4 flex flex-wrap gap-2">
                {data.muscleGroups.map((m: string, i: number) => (
                  <span
                    key={i}
                    className="badge bg-[#CCFF00] rounded-full px-4 py-3 text-xs font-bold text-black"
                  >
                    {m}
                  </span>
                ))}
              </div>

              {/* ================= INFO BOX ================= */}
              <div className="mt-5 overflow-hidden rounded-xl border border-base-300 bg-[#151820]">
                {/* Equipment */}
                <div className="flex items-center justify-between border-b border-base-300 px-4 py-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-gray-400">
                    Equipment
                  </span>

                  <span className="text-sm">{data.equipment}</span>
                </div>

                {/* Difficulty */}
                <div className="flex items-center justify-between border-b border-base-300 px-4 py-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-gray-400">
                    Difficulty
                  </span>

                  <span className="text-sm">{data.difficulty}</span>
                </div>

                {/* Sets */}
                <div className="flex items-center justify-between border-b border-base-300 px-4 py-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-gray-400">
                    Sets
                  </span>

                  <span className="text-sm">{data.sets}</span>
                </div>

                {/* Reps */}
                <div className="flex items-center justify-between border-b border-base-300 px-4 py-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-gray-400">
                    Reps
                  </span>

                  <span className="text-sm">{data.reps}</span>
                </div>

                {/* Duration */}
                <div className="flex items-center justify-between border-b border-base-300 px-4 py-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-gray-400">
                    Duration
                  </span>

                  <span className="text-sm">{data.duration} min</span>
                </div>

                {/* Calories */}
                <div className="flex items-center justify-between border-b border-base-300 px-4 py-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-gray-400">
                    Calories
                  </span>

                  <span className="text-sm">{data.caloriesBurned} kcal</span>
                </div>

                {/* Rating */}
                <div className="flex items-center justify-between px-4 py-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-gray-400">
                    Rating
                  </span>

                  <span className="text-sm">{data.rating}</span>
                </div>
              </div>

              {/* ================= INSTRUCTIONS ================= */}
              <div className="mt-6">
                <h2 className="text-lg font-bold uppercase tracking-wide">
                  Instructions
                </h2>

                <ol className="mt-4 space-y-4 text-sm text-gray-400">
                  {data.instructions.map(
                    (instruction: string, index: number) => (
                      <li key={index} className="flex gap-3 leading-6">
                        <span className="text-gray-500">{index + 1}.</span>

                        <span>{instruction}</span>
                      </li>
                    ),
                  )}
                </ol>
              </div>

              {/* ================= BUTTONS ================= */}
              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <AddPlanButton data={data} />

                <SaveLaterButton data={data} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FitLogDetails;
