import { Card, CardBody, Col } from "reactstrap";
import CommonHeader from "../../../../Common/CommonHeader";
import { BorderBottomText, BorderBottoms } from "../../../../utils/Constant";
import { P } from "../../../../AbstractElements";

const BorderBottom = () => {
  const subMenu = [
    {
      text: "Use the class of",
      code: ".b-b-* ",
    },
    {
      text: "for bottom border.",
    },
  ];
  return (
    <Col md={6} xs={12}>
      <Card>
        <CommonHeader title={BorderBottoms} subTitle={subMenu} headClass="border-b-info" />
        <CardBody>
          <P className="mb-0">{BorderBottomText}</P>
        </CardBody>
      </Card>
    </Col>
  );
};

export default BorderBottom;
