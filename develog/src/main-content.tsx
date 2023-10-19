import styled from "styled-components";
import "./fonts/Font.css";
import Content from "./content";
import ContentImg from "./content-img";
import contentImg1 from "./img/contentImg1.jpg";
import contentImg2 from "./img/contentImg2.jpg";
import contentImg3 from "./img/contentImg3.jpg";
import contentImg4 from "./img/contentImg4.jpg";
import contentImg5 from "./img/contentImg5.jpg";
import contentImg6 from "./img/contentImg6.jpg";

const _Flex = styled.div`
  display: flex;
  flex-direction: row;
`;

export default function MainContent() {
  return (
    <div>
      <_Flex>
        <Content
          title={"test"}
          content={"컨텐츠 내용입니다. 작성한 글의 내용을 볼 수 있습니다."}
          nickname={"dabeen"}
          link={"/contentView"}
        />
        <Content
          title={"react와 typescript"}
          content={
            "react와 typescript를 알아보자. typescript는 JavaScript 의 기본 문법에 자료형 체크하는 기능을 추가한 것이다."
          }
          nickname={"귀오미"}
          link={"/contentView2"}
        />
        <ContentImg
          title={"바다를 보니 떠오르는것"}
          imgUrl={contentImg1}
          content={"재미있는 알고리즘"}
          nickname={"알고"}
        />
      </_Flex>
      <_Flex>
        <Content
          title={"프로젝트 회고1"}
          content={
            "프론트엔드 프로젝트를 시작했다! 신박한 아이디어를 생각해내고 싶었지만 오래 생각할 수가 없어서 그냥 하고싶었던걸 해본다."
          }
          nickname={"dabeen"}
          link={"/contentView2"}
        />
        <ContentImg
          title={"프로젝트 회고2"}
          imgUrl={contentImg2}
          content={"플젝 회고2~ 시간은 없는데 할건 많다.. 재미있다"}
          nickname={"길동"}
        />
        <ContentImg
          title={"nodejs"}
          imgUrl={contentImg3}
          content={
            "nodejs를 안한지 좀 오래되어 내 기억에서 사라지는것같다,, 이러면 안된다! 복습을 시작해보자"
          }
          nickname={"야호"}
        />
      </_Flex>
      <_Flex>
        <Content
          title={"프로젝트 회고2"}
          content={
            "의외로 보여지는건 별로 없는데 컴포넌트만 많아진다,, 이게 맞는걸까"
          }
          nickname={"dabeen"}
          link={"/contentView2"}
        />
        <ContentImg
          title={"프로젝트 회고3"}
          imgUrl={contentImg4}
          content={
            "리액트는 이번이 처음이라 내가 맞게 하고있는건지 확신이 들지 않는다,,, 일단 해보자고"
          }
          nickname={"dabeen"}
        />
        <Content
          title={"react router"}
          content={"리액트에 라우터라는 기능이 있다. 라우터는 뭘까? 알아보자"}
          nickname={"박카스"}
          link={"/contentView2"}
        />
      </_Flex>
      <_Flex>
        <Content
          title={"react useState"}
          content={
            "리액트에 useState라는 기능이 있다. 이번 프로젝트에서 많이썼다. 안쓸수없다.."
          }
          nickname={"베이글"}
          link={"/contentView2"}
        />
        <ContentImg
          title={"react"}
          imgUrl={contentImg5}
          content={"리액트를 사용해보자"}
          nickname={"귀오미"}
        />
        <Content
          title={"프로젝트 회고4"}
          content={
            "프론트엔드 프로젝트라 은근 반복작업이 많다... 백엔드는 할 시간도 없다"
          }
          nickname={"dabeen"}
          link={"/contentView2"}
        />
      </_Flex>
      <_Flex>
        <ContentImg
          title={"프로젝트 회고5"}
          imgUrl={contentImg6}
          content={
            "이거하느라 컴포넌트를 몇번을 불러오는건지 모르겠다... 너무 렉걸린다"
          }
          nickname={"dabeen"}
        />
        <Content
          title={"react useContext"}
          content={"useContext 없었으면 귀찮을뻔했다.. 고마워"}
          nickname={"귀오미"}
          link={"/contentView2"}
        />
        <Content
          title={"프론트엔드"}
          content={"프론트엔드보다 백엔드가 좋다.."}
          nickname={"박카스"}
          link={"/contentView2"}
        />
      </_Flex>
    </div>
  );
}
