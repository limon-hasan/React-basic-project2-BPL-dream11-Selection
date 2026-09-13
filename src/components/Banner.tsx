import { toast } from "react-toastify";
import BannerImg from "../assets/banner-main.png";
import { useState, type Dispatch, type SetStateAction } from "react";

interface BannerProps {
  coin : number;
  setCoin: Dispatch<SetStateAction<number>>;
}

const Banner = ({ setCoin }: BannerProps) => {
  const [isClaimed, setIsClaimed] = useState(false);

  const handleClaimCredit = () => {
    setCoin((prev) => prev + 500000);
    setIsClaimed(true);
    toast.success("Free credit claimed successfully!");
  };

  return (
    <div className="container mx-auto px-4 my-8">
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-slate-950 via-slate-900 to-indigo-950 px-6 py-16 text-center text-white shadow-2xl border border-slate-800">
        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-primary/20 blur-3xl" />
        <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-indigo-500/20 blur-3xl" />

        <div className="relative z-10 flex flex-col items-center max-w-2xl mx-auto">
          {BannerImg && (
            <img
              src={BannerImg}
              alt="Cricket Banner"
              className="mb-6 h-40 w-auto object-contain drop-shadow-[0_10px_20px_rgba(0,0,0,0.5)]"
            />
          )}

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight mb-4">
            Assemble Your Ultimate Dream 11 Cricket Team
          </h1>

          <p className="text-base sm:text-lg text-slate-300 font-medium mb-8">
            Beyond Boundaries Beyond Limits
          </p>

          <div className="p-1 border border-lime-400/30 rounded-2xl bg-black/30">
            <button
              onClick={handleClaimCredit}
              disabled={isClaimed}
              className={`btn rounded-xl px-7 py-3 font-bold shadow-lg transition-all border-none ${
                isClaimed
                  ? "bg-gray-500 text-gray-300 cursor-not-allowed opacity-60"
                  : "bg-lime-400 hover:bg-lime-300 text-black hover:scale-105 active:scale-95"
              }`}
            >
              {isClaimed ? "Credit Claimed" : "Claim Free Credit"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
