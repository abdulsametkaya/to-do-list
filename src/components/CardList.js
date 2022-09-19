import React from "react";
import Cards from "./Cards";
import "../assets/Cardlist.scss";

const CardList = (props) => {
  const { duties, handleDeleteDuty, handleEditDuty } = props;

  return (
    <div className="cardlist">
      <div className="cont">
        {duties.map((duty) => (
          <Cards
            {...duty}
            key={duty.id}
            handleDeleteDuty={handleDeleteDuty}
            handleEditDuty={handleEditDuty}
          />
        ))}
      </div>
    </div>
  );
};

export default CardList;
