import React, { useRef, useState } from "react";
import { Form, FormLabel } from "react-bootstrap";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { AiOutlinePlus } from "../../node_modules/react-icons/ai";
import "../assets/Forms.scss";

function Forms(props) {
  const { args, handleCreateDuty } = props;
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  const formDate = useRef();
  const formDescription = useRef();

  const handleToggle = () => {
    toggle();
  };

  const createDuty = () => {
    const description = formDescription.current.value;
    const deadline = formDate.current.value;
    handleCreateDuty(description, deadline);
    handleToggle();
    console.log(formDate.current.value);
  };

  return (
    <div className="form">
      <AiOutlinePlus size={"2.5rem"} onClick={handleToggle} />

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
          <Button color="success" onClick={createDuty}>
            Save
          </Button>
          <Button color="danger" onClick={handleToggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}
export default Forms;
