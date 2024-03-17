import { H5, Image } from "../../../../AbstractElements";
import { dynamicImage } from "../../../../Service";
import { Link } from "react-router-dom";
import { Accpet, Decline, Href } from "../../../../utils/Constant";
import { allNotificationData } from "../../../../Data/Dashboard/CRM/AllNotification";
import { Button } from "reactstrap";

const AllNotificationBody = () => {
  return (
    <>
      {allNotificationData.map((data,index) => (
        <div className={`d-flex align-items-center ${index === 0 ? "pt-0" : ""}`} key={index}>
          <Image src={dynamicImage(`dashboard-2/user/${data.img}.jpg`)} alt=""/>
          <div className="flex-grow-1 ms-2">
            <Link to={Href}>
              <H5>{data.comment}</H5>
              {data.btn && (
                <>
                  <Button color="primary" className="mt-1 mb-1 me-2">{Accpet}</Button>
                  <Button color="secondary" className="mt-1 mb-1">{Decline}</Button>
                </>
              )}
              {index !== 2 ? <span>{data.status}</span> : ""}
            </Link>
            {index === 2 ? <span>{data.status}</span> : ""}
          </div>
          <div className="flex-shrink-0">
            {data.icon && (
              <i className="fa fa-circle circle-dot-primary pull-right"></i>
            )}
          </div>
        </div>
      ))}
    </>
  );
};

export default AllNotificationBody;
