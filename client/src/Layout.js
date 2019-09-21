import React from "react";
import { withRouter } from "react-router";
import Header from './components/Header';
import Footer from './components/Footer';
import Search from './components/Search';
import "./App.scss";

const Body = props => {
  return (
    <>
      <Header />
        <div className="page-content">
        <Search />
          <main className="page-content__body">{props.children}</main>
        </div>
      <Footer />
    </>
  );
};

export default withRouter(Body);
