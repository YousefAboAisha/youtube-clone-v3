import { useEffect, useRef, useState } from "react";
import Logo from "./logo";
import Input from "./UI/Inputs/Input";
import { BsSearch } from "react-icons/bs";
import {
  MdOutlineArrowBackIosNew,
  MdOutlineArrowForwardIos,
} from "react-icons/md";
import {
  AiOutlineBell,
  AiOutlineUser,
  AiOutlineVideoCameraAdd,
} from "react-icons/ai";
import IconElement from "./UI/Typography/IconElement";
import Tag from "./UI/Typography/Tag";

enum Direction {
  Left = "left",
  Right = "right",
}

const Navbar = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [searchQuery, setSearchQuery] = useState("");

  const handleScroll = (direction: Direction) => {
    const container = containerRef.current;

    if (container) {
      const containerWidth = container.offsetWidth;
      const scrollAmount = containerWidth / 5;
      if (direction === Direction.Left) {
        container.scrollBy({ left: -scrollAmount, behavior: "smooth" });
      } else {
        container.scrollBy({ left: scrollAmount, behavior: "smooth" });
      }
    }
  };

  return (
    <div className="fixed flex flex-col w-full top-0 left-0 bg-theme shadow-sm gap-1">
      <div className="h-[70px]">
        <div className="container h-full flex items-center justify-between">
          <Logo />

          <div className="w-8/12">
            <Input
              onChange={(e) => setSearchQuery(e.target.value)}
              value={searchQuery}
              placeholder="Search"
              icon={<BsSearch />}
            />
          </div>

          <div className="flex items-center gap-2 md:gap-4">
            <IconElement Icon={AiOutlineVideoCameraAdd} size={22} />
            <IconElement Icon={AiOutlineBell} size={22} />
            <IconElement Icon={AiOutlineUser} size={22} />
          </div>
        </div>
      </div>

      <div
        className={`relative flex flex-row justify-between items-center container mb-4 gap-4 `}
      >
        <IconElement
          Icon={MdOutlineArrowBackIosNew}
          size={25}
          styles={`cursor-pointer hidden md:block duration-300 z-20 `}
          onClick={() => handleScroll(Direction.Left)}
        />

        <span className="absolute bg-gradient-to-r from-background_dark to-transparent h-full left-0 top-0 w-20 z-10"></span>
        <div
          ref={containerRef}
          className="relative flex items-center gap-4 hidden-scrollbar overflow-x-auto whitespace-nowrap"
        >
          <Tag title="faw" />
          <Tag title="faw" />
          <Tag title="faw" />
          <Tag title="faw" />
          <Tag title="faw" />
          <Tag title="faw" />
          <Tag title="faw" />
          <Tag title="faw" />
          <Tag title="faw" />
          <Tag title="faw" />
          <Tag title="faw" />
          <Tag title="faw" />
          <Tag title="faw" />
          <Tag title="faw" />
          <Tag title="faw" />
          <Tag title="faw" />
          <Tag title="faw" />
          <Tag title="faw" />
          <Tag title="faw" />
          <Tag title="faw" />
          <Tag title="faw" />
          <Tag title="faw" />
          <Tag title="faw" />
          <Tag title="faw" />
        </div>
        <span className="absolute bg-gradient-to-l from-background_dark to-transparent h-full right-0 top-0 w-20 z-10"></span>

        <IconElement
          Icon={MdOutlineArrowForwardIos}
          size={25}
          styles={`cursor-pointer hidden md:block z-20 duration-300 `}
          onClick={() => handleScroll(Direction.Right)}
        />
      </div>
    </div>
  );
};

export default Navbar;
