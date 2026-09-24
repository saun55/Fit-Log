import { FitLogType } from "../FitLogType/FitLogType";
import HomeFitLogCart from "../HomeFitLogCart/HomeFitLogCart";

const getFitLogData = async () => {
  try {
    const res = await fetch("https://api.abcz.workers.dev/api/fitlog");
    return res.json();
  } catch (error) {
    console.error("Data Not Found", error);
    return [];
  }
};

const FitLogCart = async () => {
  const FitLogData = await getFitLogData();

  return (
    <>
      <div className="my-7 space-y-2 mx-auto w-full max-w-7xl px-7">
        <h1 className="font-bold font-oswald text-[30px]">THE LIBRARY</h1>

        <p className="font-inter text-[14px]">
          Twelve lifts covering every major muscle group.
        </p>
      </div>

      <div className="mx-auto w-full max-w-7xl px-7 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 py-6">
        {FitLogData.map((cart: FitLogType) => (
          <HomeFitLogCart key={cart.id} cart={cart} />
        ))}
      </div>
    </>
  );
};

export default FitLogCart;
