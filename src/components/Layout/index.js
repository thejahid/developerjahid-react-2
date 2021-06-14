import React, { Fragment } from "react";

import { Navbar } from "./Navbar";
import { MainWrapper } from "./styles";

export const Layout = ({ children }) => {
  return (
    <Fragment>
      <Navbar />
      <MainWrapper>{children}</MainWrapper>
    </Fragment>
  );
};
