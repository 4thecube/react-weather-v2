import React from "react";
import { Redirect } from "react-router";

import "./Error.styles.scss";

const Error = ({ error, isNoData, isRedirectable }) => {
  return (
    <div className="error">
      <span className="error-message">{error || isNoData}</span>
      <span className="error-message-redirect">
        You will be redirected in a few seconds...
        {isRedirectable ? <Redirect to="/" /> : null}
      </span>
    </div>
  );
};

export default Error;
