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

  const [addClass, setAddClass] = useState(false);

  const deleteCard = () => {
    handleDeleteDuty(id);
  };

  const editCard = () => {
    const description = formDescription.current.value;
    const deadline = formDate.current.value;

    handleEditDuty(id, description, deadline);
    toggle();
  };

  const addDone = () => {
    setAddClass(!addClass);
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
      <div className={addClass ? "done" : ""}></div>
      <Card.Header className="title">
        <span>DUTY {id}</span>
        <ol>
          <li>
            <a onClick={addDone}>
              <IoCheckmarkDoneCircle size={"1.3rem"} color={"green"} />
            </a>
          </li>
          <li>
            <a onClick={handleToggle}>
              <BiPencil size={"1.3rem"} color={"black"} />
            </a>
            <div className="form">
              <Modal isOpen={modal} toggle={handleToggle} {...args}>
                <ModalHeader toggle={handleToggle}>Just Do It</ModalHeader>
                <ModalBody>
                  <Form>
                    <div>
                      <label htmlFor="date">Deadline :</label>
                      <input
                        ref={formDate}
                        defaultValue={deadline}
                        type={"date"}
                        id={"date"}
                      />
                    </div>
                    <div>
                      <label htmlFor="context">Context :</label>
                      <input
                        ref={formDescription}
                        defaultValue={description}
                        type="text"
                        id={"context"}
                      />
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
