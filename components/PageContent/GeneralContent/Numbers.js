const Numbers = ({ className }) => {
  return (
    <div className={className}>
      <div className="md:flex md:space-x-1">
        <p className="font-bold text-sm">13</p>
        <p className="text-sm font-medium text-gray-400">posts</p>
      </div>
      <div className="md:flex md:space-x-1">
        <p className="font-bold text-sm">194</p>
        <p className="text-sm font-medium text-gray-400">followers</p>
      </div>
      <div className="md:flex md:space-x-1">
        <p className="font-bold text-sm">182</p>
        <p className="text-sm font-medium text-gray-400">following</p>
      </div>
    </div>
  );
};

export default Numbers;
