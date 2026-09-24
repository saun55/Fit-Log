import Link from "next/link";

const NotFound = () => {
  return (
    <main className="min-h-screen bg-[#0f1115] px-6 text-white">
      <div className="mx-auto flex min-h-screen max-w-5xl items-center justify-center">
        <div className="w-full text-center">

          {/* 404 */}
          <div className="relative">
            <h1 className="text-[140px] font-black leading-none tracking-tighter text-[#C2F800] sm:text-[200px]">
              404
            </h1>

            <div className="absolute inset-0 -z-0 flex items-center justify-center">
              <div className="h-40 w-40 rounded-full bg-[#C2F800]/10 blur-3xl sm:h-60 sm:w-60"></div>
            </div>
          </div>

          {/* Content */}
          <div className="relative z-10 mx-auto -mt-4 max-w-xl sm:-mt-8">
            <div className="mb-5 inline-flex items-center rounded-full border border-[#C2F800]/30 bg-[#C2F800]/10 px-4 py-2">
              <span className="mr-2 h-2 w-2 rounded-full bg-[#C2F800]"></span>

              <span className="text-sm font-semibold uppercase tracking-widest text-[#C2F800]">
                Page Not Found
              </span>
            </div>

            <h2 className="text-3xl font-bold tracking-tight sm:text-5xl">
              Looks like you missed a rep.
            </h2>

            <p className="mx-auto mt-5 max-w-lg text-base leading-7 text-gray-400 sm:text-lg">
              The workout or page you&#39;re looking for doesn&#39;t exist, has been
              moved, or is no longer available.
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">

              <Link
                href="/"
                className="btn border-none bg-[#C2F800] px-8 text-black hover:bg-[#d4ff3d]"
              >
                Back to Home
              </Link>

              <Link
                href="/Workouts"
                className="btn border border-gray-700 bg-transparent px-8 text-white hover:border-[#C2F800] hover:bg-[#C2F800]/10"
              >
                Browse Workouts
              </Link>

            </div>
          </div>

          {/* Bottom decoration */}
          <div className="mx-auto mt-16 flex max-w-md items-center justify-center gap-3">
            <div className="h-px flex-1 bg-gray-800"></div>

            <span className="text-xs uppercase tracking-[0.3em] text-gray-600">
              FitLog
            </span>

            <div className="h-px flex-1 bg-gray-800"></div>
          </div>

        </div>
      </div>
    </main>
  );
};

export default NotFound;