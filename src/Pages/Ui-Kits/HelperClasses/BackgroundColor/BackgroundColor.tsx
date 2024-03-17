import { Card, CardBody, Col, Row } from "reactstrap";
import { BackgroundColors } from "../../../../utils/Constant";
import DarkBackground from "./DarkBackground";
import LightBackground from "./LightBackground";
import ExtendedBackground from "./ExtendedBackground";
import CommonHeader from "../../../../Common/CommonHeader";

const BackgroundColor = () => {
  const submenuObj = [
    {
      text: "Use the ",
      code: ".bg-* ",
    },
    {
      text: "and ",
      code: ".alert-light-*",
    },
    {
      text: "colors in Cion theme.Use of any components.",
    },
  ];
  return (
    <Col xs={12}>
      <Card>
        <CommonHeader title={BackgroundColors} subTitle={submenuObj} headClass='pb-0'/>
        <CardBody>
          <Row className="g-3">
            <DarkBackground />
            <LightBackground />
            <ExtendedBackground />
          </Row>
        </CardBody>
      </Card>
    </Col>
  );
};

export default BackgroundColor;
