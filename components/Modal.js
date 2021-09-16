import { useEffect, useState } from "react";
import ReactDOM from "react-dom";

const Modal = ({ show, children }) => {
  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => {
    setIsBrowser(true);
  }, []);

  const modalContent = show ? (
    <div
      id="modal-backdrop"
      className="fixed inset-0 bg-gray-600 flex justify-center items-center p-5"
    >
      {children}
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
