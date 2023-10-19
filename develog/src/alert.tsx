import styled from "styled-components";
import "./fonts/Font.css";
import { useContext } from "react";
import ModalContext from "./store/modal-context";
import { useNavigate } from "react-router-dom";
import UserContext from "./store/user-context";

const _Modal = styled.div`
  width: 300px;
  height: 150px;
  border-radius: 5px;
  box-shadow: 2px 2px 2px gray;
  font-weight: bold;
  background-color: white;

  @keyframes dropdown {
    0% {
      transform: translateY(20%);
    }
    100% {
      transform: translateY(0);
    }
  }

  animation: dropdown 0.4s ease;
`;

const _ModalFont = styled.div`
  font-size: 20px;
`;

const _Flex = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 300px;
  height: 70px;
`;

const _ButtonPosition = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const _CloseButton = styled.button`
  border: none;
  background: none;
  font-size: unset;
  margin: 0px 10px;
  margin-top: 10px;
  &:hover {
    cursor: pointer;
  }
`;

const _OkButton = styled.button`
  background-color: #3a5fff;
  color: white;
  border: none;
  width: 70px;
  height: 30px;
  border-radius: 5px;
  font-family: "HakgyoansimWoojuR";
  font-size: 15px;

  &:hover {
    cursor: pointer;
  }
`;

const _ButtonFlex = styled.div`
  display: flex;
  justify-content: center;
`;

interface Props {
  link: any;
  text: string;
}

export default function Alert({ link, text }: Props) {
  const modalOpenValue = useContext(ModalContext);
  const postOpen = useContext(ModalContext);
  const isLoginValue = useContext(UserContext);

  const navigate = useNavigate();

  const modalValue = () => {
    modalOpenValue.setAlertOpen(false);
  };

  const OkButton = () => {
    navigate(link);
    modalOpenValue.setAlertOpen(false);
    postOpen.setPostOpen(false);
    modalOpenValue.setModalOpen(false);
  };

  return (
    <div style={{ fontFamily: "HakgyoansimWoojuR" }}>
      <_Modal>
        <_ButtonPosition>
          <_CloseButton onClick={() => modalValue()}>x</_CloseButton>
        </_ButtonPosition>
        <_Flex>
          <_ModalFont>{text}</_ModalFont>
        </_Flex>
        <_ButtonFlex>
          <_OkButton onClick={() => OkButton()}>확인</_OkButton>
        </_ButtonFlex>
      </_Modal>
    </div>
  );
}
