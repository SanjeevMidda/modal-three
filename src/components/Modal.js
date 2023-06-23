import React from "react";

const Modal = ({ status }) => {
  return <div className={status ? "noModal modal" : "modal"}>A</div>;
};

export default Modal;
