import Header from "./header";
import styled from "styled-components";
import profile from "./img/profile.jpg";
import "./fonts/Font.css";
import Statistic from "./statistics";

const _Flex = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "HakgyoansimWoojuR";
`;

const _Container = styled(_Flex)`
  width: 80%;
  flex-direction: column;
`;

const _Container2 = styled(_Flex)`
  width: 100%;
`;

const _ProfileBox = styled(_Flex)`
  width: 20%;
  height: 300px;
  border: 1px solid #ccc;
  flex-direction: column;
`;

const _StatisticsBox = styled(_ProfileBox)`
  width: 60%;
`;

const _Profile = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
`;

const _ProfileBox2 = styled(_Flex)`
  flex-direction: column;
  margin-top: 10px;
`;

const _Nickname = styled.div`
  font-weight: bold;
  margin-bottom: 5px;
  font-size: 20px;
`;

const _Email = styled.div`
  color: gray;
`;

const _StatisticsButton = styled.button`
  border: none;
  background: none;
  font-size: 15px;
  font-family: "HakgyoansimWoojuR";

  &:hover {
    cursor: pointer;
  }
`;

export default function MyPage() {
  return (
    <_Flex>
      <_Container>
        <_Container2>
          <_ProfileBox>
            <_Profile src={profile} />
            <_ProfileBox2>
              <_Nickname>귀오미</_Nickname>
              <_Email>test@test.com</_Email>
            </_ProfileBox2>
          </_ProfileBox>
          <Statistic />
        </_Container2>
        <hr />
        <div>분류(내가쓴글, 소개글, 구독)</div>
      </_Container>
    </_Flex>
  );
}
