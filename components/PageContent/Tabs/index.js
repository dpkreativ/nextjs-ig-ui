import { PostsIcon } from "../../Icons";
import Posts from "./Posts";

const Tabs = () => {
  return (
    <section>
      <div className="p-5 flex justify-center">
        <button type="button" className="text-blue-400">
          <PostsIcon />
        </button>
      </div>
      <div>
        <Posts />
      </div>
    </section>
  );
};

export default Tabs;
