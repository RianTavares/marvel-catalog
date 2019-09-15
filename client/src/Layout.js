import React from "react";
import { withRouter } from "react-router";
import Header from './components/sdasdasd';
import Footer from './components/Footer';
import "./App.scss";

const Body = props => {
  return (
    <>
      <Header />
        <div className="page-content">
          <main className="page-content__body">{props.children}</main>
        </div>
      <Footer />
    </>
  );
};

export default withRouter(Body);
