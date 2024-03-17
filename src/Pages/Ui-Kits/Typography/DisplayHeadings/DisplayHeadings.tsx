import { Card, CardBody, Col } from "reactstrap";
import { Display } from "../../../../utils/Constant";
import CardHeaderDisplay from "./CardHeaderDisplay";
import { H1 } from "../../../../AbstractElements";

const DisplayHeadings = () => {
  return (
    <Col xs={12}>
      <Card>
        <CardHeaderDisplay />
        <CardBody className="d-flex flex-column gap-2">
          <H1 className="display-1">{Display} 1</H1>
          <H1 className="display-2">{Display} 2</H1>
          <H1 className="display-3">{Display} 3</H1>
          <H1 className="display-4">{Display} 4</H1>
        </CardBody>
      </Card>
    </Col>
  );
};

export default DisplayHeadings;
