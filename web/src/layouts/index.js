import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import Header from "./Header";
import Footer from "./Footer";
import TabSwitch from "components/TabSwitch";

export const PageLayout = (props) => (
  <>
    <Header />

    <main className={classnames("page__body", props.className)}>
      <div className="container">
        <h3 className="text-center">Welcome!</h3>
        <TabSwitch />
      </div>

      {props.children}
    </main>

    <Footer />
  </>
);

PageLayout.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};
