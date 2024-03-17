import { H3, LI, P } from "../../../../AbstractElements";
import { Label } from "reactstrap";
import { Hover1text, Hover1text2, Location, Locationtext } from "../../../../utils/Constant";

const Hover1 = () => {
  return (
    <LI className="timeline-event">
      <Label className="timeline-event-icon" />
      <div className="timeline-event-wrapper">
        <P className="timeline-thumbnail">{Hover1text}</P>
        <H3>{Location}</H3>
        <span className="text-muted">{Hover1text2}</span>
        <P className="pt-3 mb-4">{Locationtext}</P>
      </div>
    </LI>
  );
};

export default Hover1;
