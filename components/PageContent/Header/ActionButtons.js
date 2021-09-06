import { DownChevronIcon, FollowerIcon } from "../../Icons";

const ActionButtons = () => {
  return (
    <div className="col-span-full flex justify-between md:space-x-2">
      <button className="border border-gray-200 py-1 w-3/5 md:px-10 font-bold text-sm rounded-md">
        Message
      </button>
      <button className="border border-gray-200 py-1 w-1/6 md:px-8 text-sm rounded-md">
        <FollowerIcon className="mx-auto" />
      </button>
      <button className="border border-gray-200 py-1 w-1/6 md:px-2 text-sm rounded-md">
        <DownChevronIcon className="transform rotate-180 mx-auto" />
      </button>
    </div>
  );
};

export default ActionButtons;
