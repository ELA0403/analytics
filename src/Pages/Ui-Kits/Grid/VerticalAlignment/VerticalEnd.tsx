import { Col, Row } from "reactstrap";
import { Onecolumns, Twocolumns } from "../../../../utils/Constant";

const VerticalEnd = () => {
  return (
    <Col lg={4}>
      <Row className="grid-vertical align-items-end m-1 g-2">
        <Col xs={6}>
          <span className="bg-white">{Onecolumns}</span>
        </Col>
        <Col xs={6}>
          <span className="bg-white">{Twocolumns}</span>
        </Col>
      </Row>
    </Col>
  );
};

export default VerticalEnd;
