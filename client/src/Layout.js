import React from "react";
import { withRouter } from "react-router";
import Header from './components/Header';
import Footer from './components/Footer';

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
