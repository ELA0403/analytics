import { Card, CardBody, CardHeader, Col } from "reactstrap";
import { H3 } from "../../../../AbstractElements";
import { ActivityTimelines } from "../../../../utils/Constant";
import ActivityTimelineBody from "./ActivityTimelineBody";

const ActivityTimeline = () => {
  return (
    <Col xxl="3" xl="4" md="6" className="box-col-4 notification">
      <Card>
        <CardHeader>
          <H3 className="m-0">{ActivityTimelines}</H3>
        </CardHeader>
        <CardBody>
          <ActivityTimelineBody />
        </CardBody>
      </Card>
    </Col>
  );
};

export default ActivityTimeline;
