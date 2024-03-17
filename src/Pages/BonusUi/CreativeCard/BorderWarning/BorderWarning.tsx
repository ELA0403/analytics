import { Card, CardBody, Col } from "reactstrap";
import CommonHeader from "../../../../Common/CommonHeader";
import { BorderWarningState } from "../../../../utils/Constant";
import { borderWarningState } from "../../../../Data/BonusUi/CreativeCardData";
import { LI } from "../../../../AbstractElements";

const BorderWarning = () => {
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
        <CommonHeader title={BorderWarningState} subTitle={subMenu} headClass="border-l-warning border-3 pb-0" />
        <CardBody>
          <ol className="list-group list-group-numbered">
            {borderWarningState.map((data,index) => (
              <LI className={`txt-${data.color} fw-bold`} key={index}>
                {data.detail}
              </LI>
            ))}
          </ol>
        </CardBody>
      </Card>
    </Col>
  );
};

export default BorderWarning;
