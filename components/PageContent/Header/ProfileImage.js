import Image from "next/image";

const ProfileImage = () => {
  return (
    <div className="mr-6 md:mr-8 w-1/3 h-auto">
      <div className="w-20 h-20 md:w-40 md:h-40 md:mx-auto">
        <Image
          src={
            "https://res.cloudinary.com/dpkreativ/image/upload/v1616357794/IMG_-oi62yk_wtfop2.jpg" ||
            null
          }
          className="rounded-full"
          width="100%"
          height="100%"
          alt="main profile"
        />
      </div>
    </div>
  );
};

export default ProfileImage;
