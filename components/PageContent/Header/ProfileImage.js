import Image from "next/image";
import dp from "../../../assets/images/dp.jpg";

const ProfileImage = () => {
  return (
    <div className="mr-6 md:mr-8 w-1/3 h-auto">
      <div className="w-20 h-20 md:w-40 md:h-40 md:mx-auto">
        <Image
          src={dp}
          className="rounded-full object-cover"
          width="160"
          height="160"
          alt="main profile"
        />
      </div>
    </div>
  );
};

export default ProfileImage;
