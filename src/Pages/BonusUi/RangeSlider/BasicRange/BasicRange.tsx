import { Card, CardBody, Col, Form, Row } from "reactstrap";
import CommonHeader from "../../../../Common/CommonHeader";
import { BasicSlider } from "../../../../utils/Constant";
import BasicRangeDemo from "./BasicRangeDemo";

const BasicRange = () => {
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
    <Col lg={6}>
      <Card>
        <CommonHeader title={BasicSlider} subTitle={subTitle} headClass="pb-0"/>
        <CardBody>
          <Form className="theme-form form-label-align-right range-slider">
            <Row className="mb-0">
              <Col md={10}>
                <BasicRangeDemo />
              </Col>
            </Row>
          </Form>
        </CardBody>
      </Card>
    </Col>
  );
};

export default BasicRange;
