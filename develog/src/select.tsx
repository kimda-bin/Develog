import styled from "styled-components";
import "./fonts/Font.css";
import { useState } from "react";

const _SelectInput = styled.input`
  width: 80px;
  height: 25px;
  border: 1px solid #ccc;
  border-radius: 10px;
  padding-left: 10px;
  font-family: "HakgyoansimWoojuR";
`;

const _SelectButton = styled.button`
  border: none;
  background: none;
  font-size: 10px;
  margin-left: -25px;

  &:hover {
    cursor: pointer;
  }
`;

const _Ul = styled.ul`
  z-index: 1;
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.3);
  background-color: white;
  border-radius: 5px;
  width: 70px;
  height: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  font-family: "HakgyoansimWoojuR";
  position: absolute;
  margin: 5px 3px;
  overflow: auto;
  animation: dropdown 0.4s ease;

  @keyframes dropdown {
    0% {
      transform: translateY(-20%);
    }
    100% {
      transform: translateY(0);
    }
  }

  animation: dropdown 0.4s ease;

  &::-webkit-scrollbar {
    width: 6px;
    background: none;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #3a5fff;
    border-radius: 3px;
  }
`;

const _List = styled.li`
  list-style: none;
  font-size: 14px;
  font-weight: bold;
  width: 50px;
  display: flex;
  justify-content: center;
  padding: 4px 0px;
  border-radius: 5px;

  &:hover {
    cursor: pointer;
    background-color: #3a5fff;
    color: white;
  }
`;

export default function Select() {
  const yearArr = ["2019", "2020", "2021", "2022", "2023"];
  const [select, setSelect] = useState(false);
  const [isYear, setIsYear] = useState("2019");

  const selectClick = () => {
    setSelect(!select);
  };

  const selectList = (year: string) => {
    setIsYear(year);
    setSelect(false);
  };
  return (
    <div>
      <div>
        <_SelectInput
          type="text"
          value={isYear}
          readOnly
          onClick={() => selectClick()}
        />
        {select ? (
          <_SelectButton onClick={() => selectClick()}>▲</_SelectButton>
        ) : (
          <_SelectButton onClick={() => selectClick()}>▼</_SelectButton>
        )}
      </div>
      {select ? (
        <div>
          <_Ul>
            {yearArr.map((value, idx) => {
              return (
                <_List onClick={() => selectList(value)} key={idx}>
                  {value}
                </_List>
              );
            })}
          </_Ul>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}
