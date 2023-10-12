import styled from "styled-components";
import "./fonts/Font.css";
import { useForm } from "react-hook-form";
import { useState } from "react";
import Password from "./password";

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
  height: 140px;
  margin-top: 15px;
`;

const _FlexInput2 = styled(_FlexInput)`
  height: auto;
  margin: 0px;
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

export default function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [mailClick, setMailClick] = useState(false);
  const [codeValue, setCodeValue] = useState("");
  const [codeCheck, setCodeCheck] = useState(false);

  //인증코드(임시)
  const code = 1234;

  const onSubmit = (data: any) => {
    console.log(data);
  };

  const mailSend = () => {
    setMailClick(true);
  };

  const correctMail = () => {
    if (Number(codeValue) === code) {
      setCodeCheck(true);
    }
  };

  return (
    <_FlexInput>
      {codeCheck ? (
        <Password />
      ) : (
        <form onSubmit={handleSubmit(onSubmit)}>
          <_FlexInput>
            <_Input
              type="text"
              placeholder="이메일"
              {...register("email", {
                required: "이메일을 입력하세요",
                validate: {
                  useMail: (v) =>
                    v.match(
                      /^[a-zA-Z0-9+-_.]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/
                    ) || "이메일 형식이 올바르지 않습니다",
                },
              })}
            />
            {errors.email && (
              <_ErrorMsg>{errors.email?.message?.toString()}</_ErrorMsg>
            )}
            {mailClick ? (
              <_FlexInput2>
                <_Input
                  type="text"
                  placeholder="인증코드"
                  {...register("code", {
                    required: "인증코드를 입력하세요",
                    validate: {
                      useMail: (v) =>
                        v.match(code) || "인증코드가 일치하지 않습니다",
                    },
                  })}
                  onChange={(e) => setCodeValue(e.target.value)}
                />
                {errors.code && (
                  <_ErrorMsg>{errors.code?.message?.toString()}</_ErrorMsg>
                )}
                <_Button onClick={() => correctMail()}>이메일 인증</_Button>
              </_FlexInput2>
            ) : (
              <_Button onClick={() => mailSend()}>인증코드 전송</_Button>
            )}
          </_FlexInput>
        </form>
      )}
    </_FlexInput>
  );
}
