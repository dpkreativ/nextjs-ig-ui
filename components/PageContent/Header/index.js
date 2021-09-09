import { useState } from "react";
import Modal from "../../Modal";
import ProfileImage from "./ProfileImage";
import ProfileUserData from "./ProfileUserData";

const Header = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <header className="p-5 flex max-w-screen-lg mx-auto">
      <button onClick={() => setShowModal(true)}>
        <ProfileImage />
      </button>
      <ProfileUserData />
      <Modal onClose={() => setShowModal(false)} show={showModal} />
    </header>
  );
};

export default Header;
