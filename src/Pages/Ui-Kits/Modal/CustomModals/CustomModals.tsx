import { Card, CardBody, Col, Row } from "reactstrap";
import { CionCustomModals } from "../../../../utils/Constant";
import Modal1 from "./Modal1/Modal1";
import Modal2 from "./Modal2/Modal2";
import Modal3 from "./Modal3/Modal3";
import CommonHeader from "../../../../Common/CommonHeader";

const CustomModals = () => {
  const submenuObj = [
    {
      text: "Custom Modal make by Cion.",
    },
  ];
  return (
    <Col xs={12}>
      <Card>
        <CommonHeader title={CionCustomModals} subTitle={submenuObj} headClass='pb-0'/>
        <CardBody>
          <Row className="g-3">
            <Modal1 />
            <Modal2 />
            <Modal3 />
          </Row>
        </CardBody>
      </Card>
    </Col>
  );
};

export default CustomModals;
