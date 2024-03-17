import { H3, LI, P } from "../../../../AbstractElements";
import { UpdatedProduct, Updatetext } from "../../../../utils/Constant";

const Variation1 = () => {
  return (
    <LI className="d-flex">
      <div className="activity-dot-primary" />
      <div className="w-100 ms-3">
        <P className="d-flex justify-content-between mb-2">
          <span className="date-content light-background">8th March, 2022</span>
          <span>1 day ago</span>
        </P>
        <H3>
          {UpdatedProduct}
          <span className="dot-notification" />
        </H3>
        <P className="f-light">{Updatetext}</P>
      </div>
    </LI>
  );
};

export default Variation1;
