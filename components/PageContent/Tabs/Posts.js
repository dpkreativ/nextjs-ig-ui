import { Image, Video } from "../../Media";

const Posts = ({ media }) => {
  return (
    <div className="grid grid-cols-3 gap-1 md:gap-8">
      {media &&
        media.map((item) => (
          <div
            key={item.id}
            className="bg-gray-400 aspect-w-1 aspect-h-1 object-cover"
          >
            {item.tag === "img" ? (
              <Image src={item.url} className="w-full h-full object-cover" />
            ) : item.tag === "vid" ? (
              <Video src={item.url} className="w-full h-full object-cover" />
            ) : null}
          </div>
        ))}
    </div>
  );
};

export default Posts;
