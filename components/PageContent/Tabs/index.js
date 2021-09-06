import { PostsIcon } from "../../Icons";
import Posts from "./Posts";

const Tabs = () => {
  return (
    <section className="max-w-screen-lg mx-auto px-5">
      <div className="p-5 flex justify-center md:border-t border-gray-300">
        <button
          type="button"
          className="text-blue-400 md:text-black flex items-center md:text-sm"
        >
          <PostsIcon className="md:h-4" />
          <span className="hidden md:block uppercase">Posts</span>
        </button>
      </div>
      <div>
        <Posts />
      </div>
    </section>
  );
};

export default Tabs;
