import { Card, CardBody, Col } from "reactstrap";
import CommonHeader from "../../../../Common/CommonHeader";
import { BorderTopText, BorderTops } from "../../../../utils/Constant";
import { P } from "../../../../AbstractElements";

const BorderTop = () => {
  const subMenu = [
    {
      text: "Use the class of",
      code: ".b-t-* ",
    },
    {
      text: "for top border.",
    },
  ];
  return (
    <Col md={6} xs={12}>
      <Card>
        <CommonHeader title={BorderTops} subTitle={subMenu} headClass="border-t-danger pb-0"/>
        <CardBody>
          <P className="mb-0">{BorderTopText}</P>
        </CardBody>
      </Card>
    </Col>
  );
};

export default BorderTop;
