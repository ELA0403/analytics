import { H5, LI, UL } from "../../../../AbstractElements";
import { TotalUsers } from "../../../../Data/Widgets/General/General";
import FeatherIcons from "../../../../utils/CommonSvgIcon/FeatherIcons";

const TotalUsersBody = () => {
  return (
    <UL className="user-list simple-list flex-row">
      {TotalUsers.map((data,i) => (
        <LI key={i}>
          <div className={`user-icon ${data.color}`}>
            <div className="user-box">
              <FeatherIcons className={`font-primary`} iconName={data.fIcon} />
            </div>
          </div>
          <div>
            <H5 className="mb-1">{data.count}</H5>
            <span className={`font-${data.fontcolor} d-flex align-items-center`}>
              <i className={`${data.icon} icon-rotate me-1`}> </i>
              <span className="f-w-600">{data.result}</span>
            </span>
          </div>
        </LI>
      ))}
    </UL>
  );
};

export default TotalUsersBody;
