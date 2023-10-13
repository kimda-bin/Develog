import styled from "styled-components";
import "./fonts/Font.css";
import { useForm } from "react-hook-form";
import { useContext, useState } from "react";
import UserContext from "./store/user-context";
import ModalContext from "./store/modal-context";

const _Input = styled.input`
  width: 100%;
  height: 27px;
  border: 1.5px solid #ccc;
  border-radius: 3px;
  margin-top: 5px;
  padding: 0px;
  font-family: "HakgyoansimWoojuR";
`;

const _Flex = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;
  height: auto;
`;

const _FlexInput = styled(_Flex)`
  width: 230px;
  margin-top: 15px;
  height: 140px;
  display: flex;
  justify-content: space-evenly;
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

const _ErrorMsg = styled.div`
  color: red;
  font-size: 10px;
  width: 230px;
  margin-top: 2px;
`;

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  //계정(임시)
  const id = "test@test.com";
  const pw = "test1234";

  const isLoginValue = useContext(UserContext);
  const modalOpenValue = useContext(ModalContext);

  const onSubmit = (data: any) => {
    console.log(data);
  };

  const UserLogin = () => {
    modalOpenValue.setModalOpen(false);
    isLoginValue.setIsLogin(true);
  };
  return (
    <_FlexInput>
      <form onSubmit={handleSubmit(onSubmit)}>
        <_Input
          type="text"
          placeholder="이메일"
          {...register("email", {
            required: "이메일을 입력하세요",
            validate: {
              correctEmail: (v) => {
                console.log(v.match(id));
                return v.match(id) || "이메일이 올바르지 않습니다";
              },
            },
          })}
        />
        {errors.email && (
          <_ErrorMsg>{errors.email?.message?.toString()}</_ErrorMsg>
        )}
        <_Input
          type="password"
          placeholder="비밀번호"
          {...register("password", {
            required: "비밀번호를 입력하세요",
            validate: {
              correctPassword: (v) => {
                console.log(v.match(pw));
                return v.match(pw) || "비밀번호가 올바르지 않습니다";
              },
            },
          })}
        />
        {errors.email && (
          <_ErrorMsg>{errors.password?.message?.toString()}</_ErrorMsg>
        )}
        <_Button type="submit" onClick={() => UserLogin()}>
          로그인
        </_Button>
      </form>
    </_FlexInput>
  );
}
