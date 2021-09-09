import Image from "next/image";
import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { CloseIcon, InstagramLogo } from "./Icons";
import PageName from "./PageContent/Header/PageName";
import logoWhite from "../assets/images/ig_logo_white.png";

const Modal = ({ show, onClose, children, title }) => {
  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => {
    setIsBrowser(true);
  }, []);

  const handleClose = (e) => {
    e.preventDefault();
    onClose();
  };

  const modalContent = show ? (
    <div
      id="modal-backdrop"
      className="fixed inset-0 bg-gray-600 flex justify-between items-center p-5"
    >
      <div id="logo-white" className="self-start absolute text-white">
        <InstagramLogo />
      </div>
      <div
        id="modal"
        className="bg-gray-800 overflow-x-auto flex flex-col w-full max-w-xs md:max-w-md h-full rounded-lg mx-auto"
      >
        <hr className="text-white my-2 w-full h-1" />
        <header
          id="modal-header"
          className="px-4 flex justify-between items-center"
        >
          <div className="flex space-x-2">
            <Image
              src={
                "https://res.cloudinary.com/dpkreativ/image/upload/v1616357794/IMG_-oi62yk_wtfop2.jpg" ||
                null
              }
              className="rounded-full"
              width="30"
              height="30"
              alt="main profile"
            />
            <PageName />
          </div>
        </header>
        <section></section>
      </div>
      <div className="self-start absolute right-5">
        <button onClick={handleClose} className="text-white">
          <CloseIcon />
        </button>
      </div>
    </div>
  ) : null;

  if (isBrowser) {
    return ReactDOM.createPortal(
      modalContent,
      document.getElementById("modal-root")
    );
  } else {
    return null;
  }
};

export default Modal;
