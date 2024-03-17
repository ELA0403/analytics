import { H3, LI, P } from "../../../../AbstractElements";
import { Tellojust } from "../../../../utils/Constant";

const Variation3 = () => {
  return (
    <LI className="d-flex pb-0">
      <div className="activity-dot-secondary" />
      <div className="w-100 ms-3">
        <P className="d-flex justify-content-between mb-2">
          <span className="date-content light-background">20th Sep, 2022</span>
          <span>12:00 PM</span>
        </P>
        <H3>
          {Tellojust}
          <span className="dot-notification" />
        </H3>
        <P>{"Quisque a consequat ante sit amet magna..."}</P>
      </div>
    </LI>
  );
};

export default Variation3;
