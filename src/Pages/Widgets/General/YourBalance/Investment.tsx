import { H5, LI, UL } from "../../../../AbstractElements";
import { yourBalanceData } from "../../../../Data/Widgets/General/General";
import FeatherIcons from "../../../../utils/CommonSvgIcon/FeatherIcons";
import { Badge } from "reactstrap";

const Investment = () => {
  return (
    <UL className="simple-list flex-row">
      {yourBalanceData.map((data,index) => (
        <LI key={index}>
          <div className={`balance-item ${data.class}`}>
            <div className="balance-icon-wrap">
              <div className="balance-icon">
                <FeatherIcons iconName={data.arrow} />
              </div>
            </div>
            <div>
              <span className="f-14 f-light">{data.header}</span>
              <H5>{data.amount}</H5>
              <Badge pill className={`badge-light-${data.class}`} color="transperant">
                {data.badge}
              </Badge>
            </div>
          </div>
        </LI>
      ))}
    </UL>
  );
};

export default Investment;
