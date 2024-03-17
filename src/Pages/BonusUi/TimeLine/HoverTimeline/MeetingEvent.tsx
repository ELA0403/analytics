import { H3, LI, P } from "../../../../AbstractElements";
import { Label } from "reactstrap";
import { USMeeting } from "../../../../utils/Constant";
import Profile from "./Profile";

const MeetingEvent = () => {
  return (
    <LI className="timeline-event">
      <Label className="timeline-event-icon" />
      <div className="timeline-event-wrapper">
        <P className="timeline-thumbnail">{'December 2022 - Meetup'}</P>
        <H3>{USMeeting}</H3>
        <span className="text-muted">{"2209 Leverton Cove RoadSpringfield, MA 01109"}</span>
        <P className="pt-3 mb-0" />
        <Profile />
      </div>
    </LI>
  );
};

export default MeetingEvent;
