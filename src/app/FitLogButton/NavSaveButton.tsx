"use client";
import { useContext } from "react";
import { FitLogContext } from "../Context/FitLogProvider";

import Link from "next/link";

const SavedButton = () => {
  const { saveLater } = useContext(FitLogContext);

  return (
    <Link href={"/My-Plan"}>
      Saved{" "}
      <span className="border-[#ffffff49] border-1 px-1 rounded-full">
        {saveLater.length}
      </span>
    </Link>
  );
};

export default SavedButton;
