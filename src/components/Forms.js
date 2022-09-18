import React, { useRef, useState } from "react";
import { Form } from "react-bootstrap";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { AiOutlinePlus } from "../../node_modules/react-icons/ai";
import "../assets/Forms.scss";

function Forms(props) {
  const { args, handleCreateDuty } = props;
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  const formDate = useRef();
  const formDescription = useRef();

  const createDuty = () => {
    const description = formDescription.current.value;
    const deadline = formDate.current.value;
    handleCreateDuty(description, deadline);
    toggle();
    console.log(formDate.current.value);
  };

  return (
    <div className="form">
      <AiOutlinePlus size={"2.5rem"} onClick={toggle} />

      <Modal isOpen={modal} toggle={toggle} {...args}>
        <ModalHeader toggle={toggle}>Modal title</ModalHeader>
        <ModalBody>
          <Form>
            <input ref={formDate} type={"date"} />
            <input ref={formDescription} type="text" />
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button color="success" onClick={createDuty}>
            Save
          </Button>
          <Button color="danger" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}
export default Forms;
