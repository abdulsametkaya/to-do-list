import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { createDuty, deleteDuty, getDuty } from "./Api";
import Cards from "./Cards";
import "../assets/Cardlist.scss";

const CardList = (props) => {
  const { duties, handleDeleteDuty } = props;

  return (
    <Container>
      {duties.map((duty) => (
        <Col className="col" key={duty.id}>
          <Cards {...duty} handleDeleteDuty={handleDeleteDuty} />
        </Col>
      ))}
    </Container>
  );
};

export default CardList;
