import React from "react";
import { Card } from "react-bootstrap";
import "../assets/Cards.scss";
import { AiFillCloseCircle } from "../../node_modules/react-icons/ai";
import { BiPencil } from "../../node_modules/react-icons/bi";
import { IoCheckmarkDoneCircle } from "../../node_modules/react-icons/io5";

const Cards = () => {
  return (
    <Card>
      <Card.Header className="title">
        <span>DUTY</span>
        <ol>
          <li>
            <a href="#">
              <IoCheckmarkDoneCircle size={"1.3rem"} color={"green"} />
            </a>
          </li>
          <li>
            <a href="#">
              <BiPencil size={"1.3rem"} color={"black"} />
            </a>
          </li>
          <li>
            <a href="#">
              <AiFillCloseCircle size={"1.3rem"} color={"red"} />
            </a>
          </li>
        </ol>
      </Card.Header>
      <Card.Body className="cardBody">
        <Card.Title className="date">15.09.2022</Card.Title>
        <Card.Text className="text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
          molestias ab quod odit asperiores! Ratione laboriosam esse pariatur
          earum similique reprehenderit illo rem deleniti, voluptatem soluta
          sint enim, molestiae inventore. Expedita, ex pariatur corrupti libero
          suscipit quam est ratione debitis eveniet quasi maiores similique
          culpa architecto perspiciatis cupiditate quaerat laboriosam accusamus
          optio! Similique esse velit adipisci delectus quaerat temporibus nam!
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Cards;
