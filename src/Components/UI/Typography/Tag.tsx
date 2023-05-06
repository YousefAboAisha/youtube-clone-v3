import { FaTimesCircle } from "react-icons/fa";

type TagProps = {
  title: string;
  hasTimes?: boolean;
  onTimesClicked?: () => void;
};

function Tag({ title, hasTimes = false, onTimesClicked }: TagProps) {
  return (
    <div className="relative dark:bg-[#ffffff2f] full-theme border-none flex items-center gap-1 text-sm w-fit px-3 h-[32px] min-w-fit rounded-md capitalize ">
      {title}
      {hasTimes && (
        <FaTimesCircle
          className=" cursor-pointer top-0 right-0"
          size={12}
          onClick={onTimesClicked}
        />
      )}
    </div>
  );
}

export default Tag;
