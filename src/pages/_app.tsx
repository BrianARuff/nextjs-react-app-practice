import * as React from "react";
import { Component, Suspense, lazy } from "react";
import Spinner from "../components/spinner";

const Index = lazy(() => import("./index"));
import ErrorBoundary from "../components/ErrorBoundary";


const App = ({ Component, pageProps }) => {
  return (
    <Component {...pageProps}>
      <ErrorBoundary>
        <Suspense fallback={Spinner}>
          <Index />
        </Suspense>
      </ErrorBoundary>
    </Component>
  );
};


export default App;