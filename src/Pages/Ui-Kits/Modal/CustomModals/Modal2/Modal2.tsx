import { useState } from "react";
import { Button, Col } from "reactstrap";
import DotText from "../Modal1/DotText";
import { ClickOut, Modal_2, ResultModal, ResultText } from "../../../../../utils/Constant";
import { dynamicImage } from "../../../../../Service";
import { H5, Image, P } from "../../../../../AbstractElements";
import CommonModal from "../../../../../CommonElements/Ui-kits/CommonModal";
import Modal2Body from "./Modal2Body";

const Modal2 = () => {
  const [modal, setModal] = useState(false);
  const toggle = () => {
    setModal(!modal);
  };
  const ModalData = {
    isOpen: modal,
    class: "modal-dialog-centered",
    toggler: toggle,
    bodyClass: "social-profile text-start",
  };
  return (
    <Col xl={4} md={6} className=" custom-alert text-center">
      <div className="card-wrapper border rounded-3 h-100">
        <div className="Cion-demo-img">
          <DotText />
          <div className="title-wrapper pb-3 modal-heading">
            <H5 className="theme-name mb-0">
              <span>{Modal_2}</span>
              {ResultModal}
            </H5>
            <P>{ResultText}</P>
          </div>
          <div className="overflow-hidden">
            <Image
              className="img-fluid"
              src={dynamicImage("alert/learning.png")}
              alt="learning"
            />
            <Button
              color="primary"
              className="mx-auto mt-3"
              onClick={() => {
                toggle();
              }}
            >
              {ClickOut}
            </Button>
          </div>
          <CommonModal modalData={ModalData}>
            <Modal2Body toggle={toggle} />
          </CommonModal>
        </div>
      </div>
    </Col>
  );
};

export default Modal2;
