import React from "react";
import { AiOutlinePlus } from "../../node_modules/react-icons/ai";
import "../assets/Header.scss";

const Header = () => {
  return (
    <div className="header">
      <div className="container">
        <div href="#">Just Do It</div>
        <div>
          <a className="plus" href="#">
            <AiOutlinePlus size={"2.5rem"} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
