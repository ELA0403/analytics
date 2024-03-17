import { H3, LI, P } from "../../../../AbstractElements";
import { Label } from "reactstrap";
import { Afresher, FresherTime, Ofwrrior } from "../../../../utils/Constant";
import EventList from "./EventList";

const HoverEvent = () => {
  return (
    <LI className="timeline-event">
      <Label className="timeline-event-icon" />
      <div className="timeline-event-wrapper">
        <P className="timeline-thumbnail">{FresherTime}</P>
        <H3>{Ofwrrior}</H3>
        <span className="text-muted">{Afresher}</span>
        <P className="pt-3 mb-0"></P>
        <EventList />
      </div>
    </LI>
  );
};

export default HoverEvent;
