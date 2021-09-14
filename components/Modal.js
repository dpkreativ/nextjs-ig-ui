import { useEffect, useState } from "react";
import ReactDOM from "react-dom";

const Modal = () => {
  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => {
    setIsBrowser(true);
  }, []);

  if (isBrowser) {
    return ReactDOM.createPortal(
      <div>Hello, I am modal</div>,
      document.getElementById("modal-root")
    );
  } else {
    return null;
  }
};

export default Modal;
