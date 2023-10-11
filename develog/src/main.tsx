import React, { useState } from "react";

export default function Main() {
  const [modal, setModal] = useState(false);
  const modalOpen = () => {
    setModal(!modal);
  };
  return (
    <>
      <button onClick={modalOpen}>로그인</button>
      {modal ? <></> : null}
    </>
  );
}
