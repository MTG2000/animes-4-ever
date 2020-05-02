import React from "react";
import "./App.scss";
import ScrollToTop from "./ScrollToTopController";
import { BrowserRouter } from "react-router-dom";
// import "./aos";
import MaterialTheme from "./MaterialTheme";
import { default as ApolloClient } from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";

const client = new ApolloClient({
  uri: "/graphql", //This is the default by the way
});

const AppWrapper = (props) => {
  return (
    <BrowserRouter>
      <MaterialTheme>
        <ScrollToTop>
          <ApolloProvider client={client}>{props.children}</ApolloProvider>
        </ScrollToTop>
      </MaterialTheme>
    </BrowserRouter>
  );
};

export default AppWrapper;
