"use client";
import Image from "next/image";
import Link from "next/link";
import logu from "@/assets/logo.png";

import PlanButton from "../FitLogButton/NavPlanButton";
import SavedButon from "../FitLogButton/NavSaveButton";

import { usePathname } from "next/navigation";
const Navbar = () => {
  const pathName = usePathname();

  const link = (
    <>
      <li>
        <Link
          href={"/"}
          className={`${pathName === "/" ? "text-[#CCFF00] bg-[#c8d1a64e] " : ""}`}
        >
          Workouts
        </Link>
      </li>

      <li>
        <Link
          href={"/My-Plan"}
          className={`${pathName === "/My-Plan" ? "text-[#CCFF00] bg-[#c8d1a64e] " : ""}`}>
        
          My Plan
        </Link>
      </li>
    </>
  );

  return (
    <div className="border-b-1 border-base-100">
      <div className="mx-auto w-full max-w-7xl px-7">
        <div className="navbar">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  aria-label="Menu"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={-1}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
              >
                {link}
              </ul>
            </div>
            <Link href={"/"} className=" flex gap-3">
              <Image src={logu} alt="Navbar logu" width={25} height={25} />
              <span className="font-oswald">FITLOG</span>
            </Link>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{link}</ul>
          </div>
          <div className="navbar-end gap-2">
            <PlanButton />

            <SavedButon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
