import { Badge, Card, CardBody, Col } from "reactstrap";
import CommonHeader from "../../../../Common/CommonHeader";
import { BorderSecondaryState } from "../../../../utils/Constant";
import { borderStateData } from "../../../../Data/BonusUi/CreativeCardData";
import { LI } from "../../../../AbstractElements";

const BorderSecondary = () => {
  const subMenu = [
    {
      text: "Use the class of",
      code: ".b-l-* ",
    },
    {
      text: "for left border and ",
      code: ".border-3 ",
    },
    {
      text: "is used to increase the width of the border.",
    },
  ];
  return (
    <Col md={6} xxl={4}>
      <Card className="height-equal">
        <CommonHeader title={BorderSecondaryState} subTitle={subMenu} headClass="border-l-secondary border-2 pb-0" />
        <CardBody className="scroll-demo">
          <ol className="list-group list-group-numbered scroll-rtl">
            {borderStateData &&
              borderStateData.map((item, index) => (
                <LI className="d-flex align-items-start flex-wrap" key={index} >
                  <div className="ms-2 me-auto">{item.text}</div>
                  <Badge pill color={item.class} className="p-2">
                    {item.text2}
                  </Badge>
                </LI>
              ))}
          </ol>
        </CardBody>
      </Card>
    </Col>
  );
};

export default BorderSecondary;
