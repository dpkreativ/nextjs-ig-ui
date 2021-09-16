import Image from "next/image";
import { useState } from "react";
import dp from "../../../assets/images/dp.jpg";
import { CloseIcon, InstagramLogo } from "../../Icons";
import Modal from "../../Modal";
import Stories from "react-insta-stories";

const ProfileImage = ({ stories }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="mr-6 md:mr-8 w-1/3 h-auto">
      <div
        className="w-20 h-20 md:w-40 md:h-40 md:mx-auto"
        onClick={() => setShowModal(!showModal)}
      >
        <Image
          src={dp}
          className="rounded-full object-cover"
          width="160"
          height="160"
          alt="main profile"
        />
      </div>

      <Modal show={showModal}>
        <div className="text-white absolute top-2 left-2">
          <InstagramLogo />
        </div>

        {/* <div>Stories</div> */}
        <div className="rounded-lg overflow-hidden">
          <Stories stories={stories} defaultInterval={5000} height={"90vh"} />
        </div>

        <div className="absolute top-2 right-2">
          <button
            type="button"
            onClick={() => setShowModal(!showModal)}
            className="text-white"
          >
            <CloseIcon />
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default ProfileImage;
