import { Card, CardBody, Col } from "reactstrap";
import CommonHeader from "../../../../Common/CommonHeader";
import { HoveringTimeline } from "../../../../utils/Constant";
import Hover1 from "./Hover1";
import HoverEvent from "./HoverEvent";
import MeetingEvent from "./MeetingEvent";
import { UL } from "../../../../AbstractElements";

const HoverTimeline = () => {
  const subMenu = [
    {
      text: "Use the ",
      code: ".square-timeline",
    },
    {
      text: " main class through create new variations of timeline.",
    },
  ];
  return (
    <Col xl={6}>
      <Card className="height-equal" style={{ minHeight: "645.891px" }}>
        <CommonHeader title={HoveringTimeline} subTitle={subMenu} headClass="pb-0" />
        <CardBody>
          <UL className="square-timeline simple-list">
            <Hover1 />
            <HoverEvent />
            <MeetingEvent />
          </UL>
        </CardBody>
      </Card>
    </Col>
  );
};

export default HoverTimeline;
