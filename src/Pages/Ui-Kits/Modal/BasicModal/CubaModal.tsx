import { useState } from "react";
import { Button, Modal } from "reactstrap";
import { CionSIGNUP, OpenmodalforCion } from "../../../../utils/Constant";
import { H3 } from "../../../../AbstractElements";
import FormModalBody from "./FormModalBody";

const CionModal = () => {
  const [modal, setModal] = useState(false);
  const Toggle = () => {
    setModal(!modal);
  };
  return (
    <>
      <Button
        color="primary"
        onClick={() => {
          setModal(true);
        }}
      >
        {OpenmodalforCion}
      </Button>
      <Modal isOpen={modal} toggle={Toggle}>
        <div className="modal-toggle-wrapper social-profile text-start dark-sign-up">
          <H3 className="modal-header justify-content-center border-0">{CionSIGNUP}</H3>
          <FormModalBody />
        </div>
      </Modal>
    </>
  );
};

export default CionModal;
