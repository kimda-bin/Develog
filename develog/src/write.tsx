import ReactQuill from "react-quill";
import styled from "styled-components";
import "./fonts/Font.css";
import "./css/quillCss.css";
import { useState, useContext } from "react";
import "./css/write.css";
import back from "./img/back.png";
import ModalContext from "./store/modal-context";
import Post from "./post";
import { useNavigate } from "react-router-dom";

const _Flex = styled.div`
  display: flex;
  height: 80%;
`;

const _WriteBox = styled.div`
  width: 50%;
  height: 80vh;
  font-family: "HakgyoansimWoojuR";
  margin-left: 20px;
  overflow: auto;
  &::-webkit-scrollbar {
    width: 6px;
    background: none;
  }

  @media screen and (max-width: 1000px) {
    & {
      width: 100%;
    }
  }
`;

const _WriteView = styled.div`
  width: 50%;
  height: 80vh;
  font-family: "HakgyoansimWoojuR";
  margin-right: 20px;
  overflow: auto;
  &::-webkit-scrollbar {
    width: 6px;
    background: none;
  }

  @media screen and (max-width: 1000px) {
    & {
      display: none;
    }
  }
`;

const _WriteInput = styled.input`
  width: 100%;
  border: none;
  height: 100px;
  font-size: 50px;
  font-family: "HakgyoansimWoojuR";
  font-weight: bold;
  letter-spacing: 5px;

  &:focus {
    outline: none;
  }
`;

const _Title = styled.div`
  height: 100px;
  font-size: 50px;
  display: flex;
  align-items: center;
  font-weight: bold;
`;

const _Bottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: white;
  position: fixed;
  height: 70px;
  width: 500px;
  bottom: 0px;
  border-radius: 0px 5px 0px 0px;
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.3);

  @media screen and (max-width: 450px) {
    & {
      width: 300px;
    }
  }
`;

const _BottomBox = styled.div`
  display: flex;
  font-family: "HakgyoansimWoojuR";
  align-items: center;
  font-size: 17px;
`;

const _Img = styled.img`
  width: 20px;
  margin-left: 15px;

  &:hover {
    cursor: pointer;
  }
`;

const _Button = styled.button`
  width: 80px;
  height: 30px;
  border: none;
  border-radius: 5px;
  background-color: #3a5fff;
  color: white;
  font-family: "HakgyoansimWoojuR";
  margin-right: 15px;

  &:hover {
    cursor: pointer;
  }
`;

const _BackDrop = styled(_Flex)`
  z-index: 5;
  position: fixed;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.2);
  width: 100%;
  height: 100%;
`;

export default function Write() {
  const module = {
    toolbar: {
      container: [
        [{ header: [1, 2, 3, 4, 5, false] }],
        ["image", "link"],
        ["bold", "italic", "underline", "strike"],
        ["blockquote", "code-block"],
        [{ list: "ordered" }, { list: "bullet" }],
        [{ align: [] }],
        [{ color: [] }, { background: [] }],
      ],
    },
  };
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");

  const postOpen = useContext(ModalContext);

  const contentPost = () => {
    postOpen.setPostOpen(true);
  };

  const navigate = useNavigate();

  return (
    <div>
      {postOpen.postOpen ? (
        <>
          <_BackDrop>
            <Post />
          </_BackDrop>
        </>
      ) : (
        <></>
      )}
      <_Flex>
        {/* 글쓰기 */}
        <_WriteBox>
          <_WriteInput
            type="text"
            placeholder="제목을 입력하세요"
            onChange={(e) => setTitle(e.target.value)}
          />
          <ReactQuill modules={module} onChange={setContent} />
        </_WriteBox>
        {/* 작성한 글을 옆에서 미리 볼 수 있음 */}
        <_WriteView>
          {/* 제목 */}
          <_Title>{title}</_Title>
          {/* 컨텐츠 */}
          <div dangerouslySetInnerHTML={{ __html: content }} />
        </_WriteView>
      </_Flex>
      <_Bottom>
        <div>
          <_BottomBox>
            <_Img src={back} onClick={() => navigate(-1)} />
            <div style={{ marginLeft: "5px" }}>나가기</div>
          </_BottomBox>
        </div>
        <div>
          <_Button onClick={() => contentPost()}>출간하기</_Button>
        </div>
      </_Bottom>
    </div>
  );
}
