import React, { Fragment } from "react";

import GlobalStyle from "styles/global";
import { Layout } from "components";

const App = () => {
  return (
    <Fragment>
      <GlobalStyle />
      <Layout>Hello I'm Children!!!</Layout>
    </Fragment>
  );
};

export default App;
