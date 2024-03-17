import { Card, CardBody, Col } from "reactstrap";
import CommonHeader from "../../../../Common/CommonHeader";
import { UL } from "../../../../AbstractElements";
import { VariationTimelines } from "../../../../utils/Constant";
import Variation1 from "./Variation1";
import Variation2 from "./Variation2";
import Variation3 from "./Variation3";

const VariationTimeline = () => {
  const subMenu = [
    {
      text: "Use the ",
      code: ".activity-dot-primary ",
    },
    {
      text: "through rounded animations.",
    },
  ];
  return (
    <Col xl={5} xxl={4} className="notification box-col-12">
      <Card>
        <CommonHeader title={VariationTimelines} subTitle={subMenu} headClass="pb-0"/>
        <CardBody className="dark-timeline">
          <UL className="simple-list">
            <Variation1 />
            <Variation2 />
            <Variation3 />
          </UL>
        </CardBody>
      </Card>
    </Col>
  );
};

export default VariationTimeline;
