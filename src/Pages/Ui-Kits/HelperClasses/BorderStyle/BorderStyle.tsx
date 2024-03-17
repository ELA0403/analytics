import { Card, CardBody, Col, Row } from "reactstrap";
import { StylesInBorders } from "../../../../utils/Constant";
import CustomBorder from "./CustomBorder";
import BorderColor from "./BorderColor";
import BorderWidth from "./BorderWidth";
import TextColor from "./TextColor";
import CommonHeader from "../../../../Common/CommonHeader";

const BorderStyle = () => {
  const submenuObj = [
    {
      text: "Use the different styles of borders like:",
      code: "border radius/border-color/border-width",
    },
    {
      text: ". Use of any components.",
    },
  ];
  return (
    <Col xs={12}>
      <Card>
        <CommonHeader title={StylesInBorders} subTitle={submenuObj} headClass='pb-0' />
        <CardBody>
          <Row className="g-3">
            <CustomBorder />
            <BorderColor />
            <BorderWidth />
            <TextColor />
          </Row>
        </CardBody>
      </Card>
    </Col>
  );
};

export default BorderStyle;
