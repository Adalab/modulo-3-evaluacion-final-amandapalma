import React from "react";
import "./detailsCard.scss";

const DetailsCard = () => {
  return (
    <div className="detailsCardContainer">
      <div className="detailsCardContainer-detailsCard">
        <img className="itemImage" alt="character" src=""></img>
        <h1 className="itemTitle">Nombre del personaje</h1>
        <p className="itemSubtitle1">Especie</p>
        <p className="itemSubtitle2">Planeta</p>
        <p className="itemSubtitle3">Número de episodios</p>
        <p className="itemSubtitle4">Vivo/Muerto</p>
      </div>
    </div>
  );
};

export default DetailsCard;
