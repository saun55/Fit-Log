const HomeFitLogCartSkeleton = () => {
  return (
    <div className="card w-full max-w-xl overflow-hidden border border-base-300 bg-[#15171d] text-white shadow-xl">
      {/* Image Skeleton */}
      <div className="h-72 w-full skeleton bg-gray-700"></div>

      {/* Card Body */}
      <div className="card-body p-7">

        {/* Tags Skeleton */}
        <div className="flex flex-wrap gap-3">
          <div className="skeleton h-8 w-24 rounded-full bg-gray-700"></div>
          <div className="skeleton h-8 w-28 rounded-full bg-gray-700"></div>
          <div className="skeleton h-8 w-20 rounded-full bg-gray-700"></div>
        </div>

        {/* Name Skeleton */}
        <div className="skeleton mt-3 h-6 w-3/4 bg-gray-700"></div>

        {/* Equipment Skeleton */}
        <div className="skeleton mt-2 h-5 w-1/2 bg-gray-700"></div>

        {/* Divider */}
        <div className="divider my-1 border-gray-700"></div>

        {/* Stats Skeleton */}
        <div className="mt-4 flex flex-wrap gap-4">
          <div className="skeleton h-5 w-20 bg-gray-700"></div>
          <div className="skeleton h-5 w-24 bg-gray-700"></div>
          <div className="skeleton h-5 w-14 bg-gray-700"></div>
        </div>

      </div>
    </div>
  );
};

export default HomeFitLogCartSkeleton;