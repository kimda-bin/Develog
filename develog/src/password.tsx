import styled from "styled-components";
import "./fonts/Font.css";
import { SubmitHandler, useForm } from "react-hook-form";
import React, { useContext, useState } from "react";
import ModalContext from "./store/modal-context";
import Alert from "./alert";

const _Flex = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;
  height: auto;
`;

const _BackDrop = styled.div`
  z-index: 10;
  position: fixed;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.2);
  width: 100%;
  height: 100%;
  display: flex;
`;

const _FlexInput = styled(_Flex)`
  width: 230px;
  height: 140px;
  margin-top: 15px;
`;

const _Input = styled.input`
  width: 100%;
  height: 27px;
  border: 1.5px solid #ccc;
  border-radius: 3px;
  margin-top: 5px;
  padding: 0px;
  font-family: "HakgyoansimWoojuR";
`;

const _ErrorMsg = styled.div`
  color: red;
  font-size: 10px;
  width: 230px;
  margin-top: 2px;
`;
const _Button = styled.button`
  width: 100%;
  border: 1.5px solid #3a5fff;
  height: 27px;
  background-color: #3a5fff;
  color: white;
  border-radius: 3px;
  margin-top: 10px;
  font-family: "HakgyoansimWoojuR";

  &:hover {
    cursor: pointer;
  }
`;

interface FormValues {
  password: string;
  passwordC: string;
}
export default function Password() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const modalOpenValue = useContext(ModalContext);
  const [passwordC, setPasswordC] = useState("");

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data);
    modalOpenValue.setModalOpen(false);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <_FlexInput>
          <_Input
            type="password"
            placeholder="비밀번호"
            {...register("password", {
              required: "비밀번호를 입력하세요",
              validate: {
                usePassword: (v) => {
                  const flag = v.match(/(?=.*\d)(?=.*[a-z]).{8,}/);
                  return flag || "문자,숫자를 포함하여 8자 이상이어야 합니다";
                },
              },
            })}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setPasswordC(e.target.value)
            }
          />
          {errors.password && <_ErrorMsg>{errors.password?.message}</_ErrorMsg>}
          <_Input
            type="password"
            placeholder="비밀번호 확인"
            {...register("passwordC", {
              required: "비밀번호를 다시 입력하세요",
              validate: {
                usePasswordC: (v) =>
                  v === passwordC || "비밀번호가 일치하지 않습니다",
              },
            })}
          />
          {errors.passwordC && (
            <_ErrorMsg>{errors.passwordC?.message}</_ErrorMsg>
          )}
          <_Button type="submit">회원가입</_Button>
        </_FlexInput>
      </form>
    </>
  );
}
