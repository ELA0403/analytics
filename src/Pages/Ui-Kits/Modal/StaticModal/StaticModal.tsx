import { useState } from "react";
import { Button, Card, CardBody, Col } from "reactstrap";
import CommonModal from "../../../../CommonElements/Ui-kits/CommonModal";
import { CionLogin, StaticBackdropModal, Staticbackdropmodal } from "../../../../utils/Constant";
import StaticModalForm from "./StaticModalForm";
import { H3, P } from "../../../../AbstractElements";
import CommonHeader from "../../../../Common/CommonHeader";

const StaticModal = () => {
  const [modal, setModal] = useState(false);
  const toggle = () => {
    setModal(!modal);
  };
  const ModalData = {
    isOpen: modal,
    toggler: toggle,
    bodyClass: "social-profile text-start p-3",
  };
  const submenuObj = [
    {
      text: "When backdrop is set to static, the modal will not close when clicking outside of it. Click the button below to try it.",
    },
  ];
  return (
    <Col xl={4}>
      <Card>
        <CommonHeader title={StaticBackdropModal} subTitle={submenuObj} headClass='pb-0'/>
        <CardBody>
          <Button
            color="primary"
            onClick={() => {
              toggle();
            }}
          >
            {Staticbackdropmodal}
          </Button>
          <CommonModal modalData={ModalData}>
            <div className="modal-toggle-wrapper">
              <H3>{CionLogin}</H3>
              <P>{"Fill in your information below to continue."}</P>
              <StaticModalForm toggle={toggle} />
            </div>
          </CommonModal>
        </CardBody>
      </Card>
    </Col>
  );
};

export default StaticModal;
