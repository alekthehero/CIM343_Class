import Button from "@/components/shared/button";
import Link from "next/link";

const Header = () => {
  return (
    <header className="border-b p-4 mb-4">
      <div className="w-full flex justify-between items-center">
        <div>
          <h1>CIM 343</h1>
        </div>
        <div>
          <h1>Wikipedia Assignment</h1>
        </div>
        <div className="space-x-2">
          <Link href="/about">
            <Button>About Me</Button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
