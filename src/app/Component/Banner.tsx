import banner from "@/assets/banner.png";
import Image from "next/image";

const Banner = () => {
  return (
    <div className="mx-auto w-full max-w-7xl px-7">
      <div className="bg-[#222630] py-10 flex justify-around items-center rounded-2xl">

      {/* left side  */}
      <div className="space-y-4">
        <p className="text-[#C2F800] font-inter font-bold text-[11px]">WORKOUT LIBRARY</p>

        <h1 className="text-white font-bold font-oswald text-6xl">TRAIN WITH INTENT. LOG <br /> EVERY SET.</h1>

        <p className="font-inter text-[16px]">
          FitLog is a dark, no-nonsense gym companion: pick a lift, lock it <br /> into
          today&apos;s plan, and watch the week&apos;s work add up.
        </p>

        <button className="btn text-black font-bold font-inter bg-[#C2F800]">BROWSE WORKOUTS</button>
      </div>

      {/* Right side img*/}
      <div>
        <Image src={banner} height={334} width={334} alt="Banner Pic" />
      </div>

</div>
    </div>
  );
};

export default Banner;
