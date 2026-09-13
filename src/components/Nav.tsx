import { AiFillDollarCircle } from "react-icons/ai";
import Logo from "../assets/logo.png";

const Nav = ({ coin }: { coin: number }) => {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 shadow-sm transition-all">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <a
          href="#"
          className="flex items-center gap-2 hover:opacity-90 transition"
        >
          <img
            src={Logo}
            alt="Cricket Logo"
            className="h-12 w-auto object-contain"
          />
        </a>

        <ul className="hidden md:flex items-center gap-8 text-gray-600 font-medium">
          <li>
            <a
              href="#home"
              className="hover:text-primary transition-colors cursor-pointer"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#fixtures"
              className="hover:text-primary transition-colors cursor-pointer"
            >
              Fixtures
            </a>
          </li>
          <li>
            <a
              href="#players"
              className="hover:text-primary transition-colors cursor-pointer"
            >
              Players
            </a>
          </li>
          <li>
            <a
              href="#schedule"
              className="hover:text-primary transition-colors cursor-pointer"
            >
              Schedule
            </a>
          </li>
        </ul>

        <div className="flex items-center gap-2 bg-amber-50 border border-amber-200 px-4 py-2 rounded-xl shadow-inner">
          <span className="text-xl font-bold text-gray-800">
            {coin.toLocaleString()} Coin
          </span>
          <AiFillDollarCircle className="text-2xl text-amber-500" />
        </div>
      </div>
    </header>
  );
};

export default Nav;
