import * as React from "react";
import { Component } from "react";
import Index from "./index";

const Application = ({ Component, pageProps }) => {
  return (
    <Component {...pageProps}>
      <Index />
    </Component>
  );
};


export default Application;