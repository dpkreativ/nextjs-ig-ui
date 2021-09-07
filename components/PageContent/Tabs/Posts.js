const Posts = ({ media }) => {
  return (
    <div className="grid grid-cols-3 gap-1 md:gap-8">
      {media &&
        media.map((image) => (
          <div
            key={image.id}
            className="bg-gray-400 aspect-w-1 aspect-h-1 object-cover"
          >
            <img
              src={image.url}
              alt={`post ${image.id}`}
              className="w-full h-full"
            />
          </div>
        ))}
    </div>
  );
};

export default Posts;
