import { Card, CardBody, Col } from "reactstrap";
import CommonHeader from "../../../../Common/CommonHeader";
import { P } from "../../../../AbstractElements";
import { FlatCardText, FlatCards } from "../../../../utils/Constant";

const FlatCard = () => {
  const subMenu = [
    {
      text: "For flat cards, make the",
      code: ".b-r-0[border-radius:0]",
    },
    {
      text: "used class.",
    },
  ];
  return (
    <Col sm={12} xl={6}>
      <Card className="b-r-0">
        <CommonHeader title={FlatCards} subTitle={subMenu} headClass="pb-0"/>
        <CardBody>
          <P className="mb-0">{FlatCardText}</P>
        </CardBody>
      </Card>
    </Col>
  );
};

export default FlatCard;
