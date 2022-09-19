import React, { useRef, useState } from "react";
import { Card } from "react-bootstrap";
import {
  Button,
  Form,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
} from "reactstrap";
import { AiFillCloseCircle } from "../../node_modules/react-icons/ai";
import { BiPencil } from "../../node_modules/react-icons/bi";
import { IoCheckmarkDoneCircle } from "../../node_modules/react-icons/io5";

const Cards = (props, args) => {
  const { id, handleDeleteDuty, deadline, description, handleEditDuty } = props;

  const deleteCard = () => {
    handleDeleteDuty(id);
  };

  const editCard = () => {
    const arr = handleEditDuty(id);
  };

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  const formDate = useRef();
  const formDescription = useRef();

  const handleToggle = () => {
    toggle();
  };

  return (
    <Card>
      <Card.Header className="title">
        <span>DUTY {id}</span>
        <ol>
          <li>
            <a>
              <IoCheckmarkDoneCircle size={"1.3rem"} color={"green"} />
            </a>
          </li>
          <li>
            <a onClick={editCard}>
              <BiPencil size={"1.3rem"} color={"black"} />
            </a>
            <div className="form">
              <Modal isOpen={modal} toggle={handleToggle} {...args}>
                <ModalHeader toggle={handleToggle}>Just Do It</ModalHeader>
                <ModalBody>
                  <Form>
                    <div>
                      <label for="date">Deadline :</label>
                      <input ref={formDate} type={"date"} id={"date"} />
                    </div>
                    <div>
                      <label for="context">Context :</label>
                      <input ref={formDescription} type="text" id={"context"} />
                    </div>
                  </Form>
                </ModalBody>
                <ModalFooter>
                  <Button color="success" onClick={editCard}>
                    Save
                  </Button>
                  <Button color="danger" onClick={handleToggle}>
                    Cancel
                  </Button>
                </ModalFooter>
              </Modal>
            </div>
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
