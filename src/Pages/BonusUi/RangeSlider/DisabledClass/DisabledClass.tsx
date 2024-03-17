import { Card, CardBody, Col, Form, Row } from "reactstrap";
import CommonHeader from "../../../../Common/CommonHeader";
import DisabledDemo from "./DisabledDemo";
import { Disabled } from "../../../../utils/Constant";

const DisabledClass = () => {
    const subTitle = [
        {
            text:"Use the ",
            code:".range-slider"
        },
        {
            text:"class. and Cion used Ion range slider.",
            code:"[http://ionden.com/a/plugins/ion.rangeSlider]"
        },
    ]
  return (
    <Col sm={12} xl={6}>
      <Card>
        <CommonHeader title={Disabled} subTitle={subTitle} headClass="pb-0" />
        <CardBody>
          <Form className="theme-form form-label-align-right range-slider">
            <Row className="mb-0">
              <DisabledDemo />
            </Row>
          </Form>
        </CardBody>
      </Card>
    </Col>
  );
};

export default DisabledClass;
