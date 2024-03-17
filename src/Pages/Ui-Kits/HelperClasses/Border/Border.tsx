import { Card, CardBody, Col, Row } from "reactstrap";
import { BordersAndDisplays } from "../../../../utils/Constant";
import AdditiveBorder from "./AdditiveBorder";
import SubtractiveBorder from "./SubtractiveBorder";
import AdditiveRadius from "./AdditiveRadius";
import CommonHeader from "../../../../Common/CommonHeader";

const Border = () => {
  const submenuObj = [
    {
      text: "Use border utilities to add or remove an element's borders.",
    },
  ];
  return (
    <Col xs={12}>
      <Card>
        <CommonHeader title={BordersAndDisplays} subTitle={submenuObj} headClass='pb-0'/>
        <CardBody>
          <Row className="g-3">
            <AdditiveBorder />
            <SubtractiveBorder />
            <AdditiveRadius />
          </Row>
        </CardBody>
      </Card>
    </Col>
  );
};

export default Border;
