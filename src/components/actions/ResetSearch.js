import React from "react";
import portalGun from "../../images/portal-gun.png";
import "./reset.scss";

const ResetSearch = (props) => {
  const handleClick = (ev) => {
    props.handleReset(ev);
  };

  return (
    <div className="resetContainer" onClick={handleClick}>
      <img className="reset__image" alt="Portal gun" src={portalGun}></img>
    </div>
  );
};
export default ResetSearch;
