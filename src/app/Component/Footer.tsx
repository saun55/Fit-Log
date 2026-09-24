import Image from "next/image";
import logu from "@/assets/SVG.png";

const Footer = () => {
  return (
    <div className="border-t border-[#252b35]">
      <footer className="mx-auto flex w-full max-w-7xl items-center justify-between px-7 py-4">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Image src={logu} width={30} height={20} alt="logo" />

          <span className="font-oswald text-[14px] font-bold">FITLOG</span>
        </div>

        {/* Copyright */}
        <nav>
          <p className="text-right text-xs text-gray-400 sm:text-sm">
            © 2026 FitLog — Workout Library. Train hard, log honest.
          </p>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
