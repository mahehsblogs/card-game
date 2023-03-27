import React from "react";

const Card = ({ card, onClick }) => {
  return (
    <div className="col-md-3 mb-4">
      <div className="card h-100" onClick={onClick}>
        <div className="card-body">{card.value}</div>
      </div>
    </div>
  );
};

export default Card;
