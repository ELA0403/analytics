import { Card, CardBody, Col } from "reactstrap";
import CommonHeader from "../../../../Common/CommonHeader";
import { UL } from "../../../../AbstractElements";
import Conference from "./Conference";
import { HorizontalTimelines } from "../../../../utils/Constant";
import MeetUp from "./MeetUp";
import Meeting from "./Meeting";
import Conference2 from "./Conference2";
import Meeting2 from "./Meeting2";
import LunchTime from "./LunchTime";

const HowizontalTimeline = () => {
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
    <Col xxl={8} xl={7} className="box-col-12">
      <Card>
        <CommonHeader title={HorizontalTimelines} subTitle={subMenu} headClass="pb-0" />
        <CardBody>
          <UL className="list-inline events timeline-list timeline-border row simple-list flex-row">
            <Conference />
            <MeetUp />
            <Meeting />
          </UL>
          <UL className="list-inline events border-0 timeline-list row simple-list flex-row">
            <Conference2 />
            <Meeting2 />
            <LunchTime />
          </UL>
        </CardBody>
      </Card>
    </Col>
  );
};

export default HowizontalTimeline;
