import { useState } from "react";
import Logo from "./logo";
import Input from "./UI/Inputs/Input";
import { BsSearch } from "react-icons/bs";
import {
  AiOutlineBell,
  AiOutlineUser,
  AiOutlineVideoCameraAdd,
} from "react-icons/ai";

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  return (
    <div className="fixed w-full top-0 left-0 bg-background_ligh shadow-sm h-[70px]">
      <div className="container h-full flex items-center justify-between">
        <Logo />

        <div className="w-8/12">
          <Input
            onChange={(e) => setSearchQuery(e.target.value)}
            value={searchQuery}
            placeholder="Search here"
            icon={<BsSearch />}
          />
        </div>

        <div className="flex items-center gap-2 md:gap-4">
          <AiOutlineVideoCameraAdd size={22} />
          <AiOutlineBell size={22} />
          <AiOutlineUser size={22} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
