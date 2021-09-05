import Image from "next/image";

const ProfileImage = ({ className }) => {
  return (
    <div className={className}>
      <div className="w-20 h-20 md:w-40 md:h-40 mx-auto">
        {/* <img
          src="https://res.cloudinary.com/dpkreativ/image/upload/v1616357794/IMG_-oi62yk_wtfop2.jpg"
          alt="main profile"
          className="rounded-full w-full h-full"
        /> */}
        <Image
          src={
            "https://res.cloudinary.com/dpkreativ/image/upload/v1616357794/IMG_-oi62yk_wtfop2.jpg" ||
            null
          }
        />
      </div>
    </div>
  );
};

export default ProfileImage;
