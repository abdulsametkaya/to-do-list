import React from "react";
import "../assets/Header.scss";
import Forms from "./Forms";

const Header = (props) => {
  const { handleCreateDuty, clickForm } = props;

  return (
    <div className="header">
      <div className="header-todo">
        <div href="#">Just Do It</div>
        <div>
          <div>
            <Forms handleCreateDuty={handleCreateDuty} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
