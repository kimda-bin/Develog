import { createGlobalStyle } from "styled-components";
import "./fonts/Font.css";

const GrobalStyle = createGlobalStyle`
  html {
    height: 100%;
  }

  body {
    height: 100%;
    width: 100%;

    margin: auto 0px;

    &::-webkit-scrollbar {
    display: none;
  }
  
  }
`;

export default GrobalStyle;
