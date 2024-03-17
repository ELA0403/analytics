import { Card, CardBody, Col } from "reactstrap";
import CommonHeader from "../../../../Common/CommonHeader";
import { WithIndicators } from "../../../../utils/Constant";
import IndecatorSlide from "./IndecatorSlide";

const Indecator = () => {
  const submenu = [
    {
      text: "Use the ",
      code: ".carousel-indicators",
    },
    {
      text: " through carousel indicates.",
    },
  ];
  return (
    <Col xl={6} xs={12}>
      <Card>
        <CommonHeader title={WithIndicators} subTitle={submenu} headClass="pb-0"/>
        <CardBody>
          <IndecatorSlide />
        </CardBody>
      </Card>
    </Col>
  );
};

export default Indecator;
