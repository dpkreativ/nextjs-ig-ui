import { OptionsIcon } from "../../Icons";

const MoreOptions = () => {
  return (
    <div className="justify-self-end md:order-last">
      <button className="text-xl flex items-center">
        <OptionsIcon />
      </button>
    </div>
  );
};

export default MoreOptions;
