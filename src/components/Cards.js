import React from "react";
import { Card } from "react-bootstrap";
import { AiFillCloseCircle } from "../../node_modules/react-icons/ai";
import { BiPencil } from "../../node_modules/react-icons/bi";
import { IoCheckmarkDoneCircle } from "../../node_modules/react-icons/io5";

const Cards = (props) => {
  const { id, handleDeleteDuty, deadline, description } = props;

  const deleteCard = () => {
    handleDeleteDuty(id);
  };

  return (
    <Card>
      <Card.Header className="title">
        <span>DUTY</span>
        <ol>
          <li>
            <a href="">
              <IoCheckmarkDoneCircle size={"1.3rem"} color={"green"} />
            </a>
          </li>
          <li>
            <a href="#">
              <BiPencil size={"1.3rem"} color={"black"} />
            </a>
          </li>
          <li>
            <a onClick={deleteCard}>
              <AiFillCloseCircle size={"1.3rem"} color={"red"} />
            </a>
          </li>
        </ol>
      </Card.Header>
      <Card.Body className="cardBody">
        <Card.Title className="date">{deadline}</Card.Title>
        <Card.Text className="text">{description}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Cards;
