import { useState } from "react";
import { Button, Card, CardBody, Col } from "reactstrap";
import { CenteredModals, Verticallycentered } from "../../../../utils/Constant";
import CenterdModalBody from "./CenterdModalBody";
import CommonHeader from "../../../../Common/CommonHeader";

const CenteredModal = () => {
  const [modal, setModal] = useState(false);
  const toggle = () => {
    setModal(!modal);
  };
  const submenuObj = [
    {
      text: "Use the ",
      code: ".modal-dialog-centered ",
    },
    {
      text: "through centered modal. and set ",
      code: "data-bs-target",
    },
    {
      text: ".",
    },
  ];
  return (
    <Col xl={4}>
      <Card>
        <CommonHeader title={CenteredModals} subTitle={submenuObj} headClass='pb-0'/>
        <CardBody>
          <Button
            color="success"
            onClick={() => {
              toggle();
            }}
          >
            {Verticallycentered}
          </Button>
          <CenterdModalBody modal={modal} toggle={toggle} />
        </CardBody>
      </Card>
    </Col>
  );
};

export default CenteredModal;
