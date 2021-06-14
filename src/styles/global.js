import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    :root {
  /* ------------------------- box shadow & border, border-radius ------------------------- */
  --borderOne: 1px solid var(--black);
  --borderRadiousOne: 5px;

  /* ------------------------- color ------------------------- */
  --white: #fff;
  --black: #000;

  /* ------------------------- font size ------------------------- */
  /*  common font size  */
  --smallFont: 14px;
  --mediumFont: 17px;
  --LargeFont: 19px;

  /* ------------------------- font weight ------------------------- */
  --normal: 400;
  --semiBold: 600;
  --bold: 700;
  /* ------------------------- transition ------------------------- */
  --defaultTransition: 0.3s;

  /* ------------------------- Adjust Menu ------------------------- */
  --menuHeight: 60px;

}

/* ------------------------- common css ------------------------- */
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  -webkit-tap-highlight-color: transparent;
}
html {
  font-size: 10px;
}
body {
  color: var(--black);
  font-weight: var(--normal);
  line-height: 1;
}
ol,
ul {
  list-style: none;
}
a {
  text-decoration: none;
  display: inline-block;
  color: var(--black);
}
:focus {
  outline: none;
}
input {
  border: none;
}
input:focus {
  outline-offset: 0px;
  outline: none;
  border: none;
}
`;

export default GlobalStyle;
