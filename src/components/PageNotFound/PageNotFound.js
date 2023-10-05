import React from "react";
import errorPage from "../../images/pnf.jpg";
import "../PageNotFound/PageNotFound.scss";
const PageNotFound = () => {
  return (
    <div>
      <img src={errorPage} alt="Error Page" />
    </div>
  );
};

export default PageNotFound;
