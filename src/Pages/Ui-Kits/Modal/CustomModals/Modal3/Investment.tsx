import { Badge } from "reactstrap";
import { H5, LI } from "../../../../../AbstractElements";
import FeatherIcons from "../../../../../utils/CommonSvgIcon/FeatherIcons";
import { Investment_Constant } from "../../../../../utils/Constant";

const Investment = () => {
  return (
    <LI>
      <div className="balance-item danger">
        <div className="balance-icon-wrap">
          <div className="balance-icon">
            <FeatherIcons iconName="ArrowDownRight" />
          </div>
        </div>
        <div>
          {" "}
          <span className="f-12 f-LIght">{Investment_Constant} </span>
          <H5>78.8K</H5>
          <Badge pill className="badge-light-danger" color="">-11.67%</Badge>
        </div>
      </div>
    </LI>
  );
};

export default Investment;
