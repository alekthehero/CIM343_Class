import Button from "@/components/shared/button";
import Link from "next/link";

const Header = () => {
  return (
    <header className="border-b p-4 mb-4">
      {/* Desktop navigation (grid) */}
      <div className="w-full grid grid-cols-3 gap-4 items-center hidden sm:grid">
        <div className="col-span-1 sm:w-full sm:text-center">
          <h1>CIM 343</h1>
        </div>
        <div className="col-span-1 sm:w-full sm:text-center">
          <h1>Wikipedia Assignment</h1>
        </div>
        <div className="col-span-1 space-x-2 sm:space-x-0 sm:space-y-2 sm:flex sm:flex-col sm:items-center">
          <Link href="/about">
            <Button>About Me</Button>
          </Link>
        </div>
      </div>
      {/* Mobile navigation */}
      <nav className="block sm:hidden w-full mt-2">
        <ul className="flex flex-col items-center gap-2">
          <li>
            <Link href="/">
              <Button className="w-full">Home</Button>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <Button className="w-full">About Me</Button>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
