import React, { useState, useEffect } from "react";

import info from "../../assets/info.svg";
import "./CurrentData.styles.scss";

const CurrentData = ({ title, data, handle, hasIcon, measure }) => {
  const [description, setDescription] = useState({});
  useEffect(() => {
    if (!handle) return;
    setDescription(handle(data));
  }, [data, handle]);
  return (
    <div className="current-data block">
      {data ? (
        <>
          <div className="c-data-title">{title}</div>
          <div className="c-data">
            <div className="c-data-value-container">
              <div className="c-data-value">
                {data}
                {measure ? (
                  <span className="c-data-measure">{measure}</span>
                ) : null}
              </div>
              {measure ? null : (
                <div className="c-data-description">{description.short}</div>
              )}
            </div>
            {hasIcon ? (
              <div description={description.long} className="c-data-info-icon">
                <img alt="info-icon" className="info" src={info} />
              </div>
            ) : null}
          </div>
        </>
      ) : (
        <h2>Loading...</h2>
      )}
    </div>
  );
};

export default CurrentData;
