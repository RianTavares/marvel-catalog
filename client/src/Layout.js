import React from "react";
import { withRouter } from "react-router";
import Header from './components/header';
import Footer from './components/footer';

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
