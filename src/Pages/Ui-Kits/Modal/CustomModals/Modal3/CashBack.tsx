import { H5, LI } from "../../../../../AbstractElements";
import FeatherIcons from "../../../../../utils/CommonSvgIcon/FeatherIcons";
import { Cash_Back } from "../../../../../utils/Constant";
import { Badge } from "reactstrap";

const CashBack = () => {
  return (
    <LI>
      <div className="balance-item success">
        <div className="balance-icon-wrap">
          <div className="balance-icon">
            <FeatherIcons iconName="ArrowUpRight" />
          </div>
        </div>
        <div>
          <span className="f-12 f-light">{Cash_Back}</span>
          <H5>19.7K</H5>
          <Badge pill className="badge-light-success" color="">
            +10.67%
          </Badge>
        </div>
      </div>
    </LI>
  );
};

export default CashBack;
