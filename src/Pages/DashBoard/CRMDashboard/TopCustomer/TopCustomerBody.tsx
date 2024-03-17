import { Button } from "reactstrap";
import { H5, Image } from "../../../../AbstractElements";
import { dynamicImage } from "../../../../Service";
import { Href, Mamber } from "../../../../utils/Constant";
import {topCustomerData} from "../../../../Data/Dashboard/CRM/TopCustomer"
import { Link } from "react-router-dom";

const TopCustomerBody = () => {
  return (
    <>
      {topCustomerData.map((data,index)=>(
        <div className={`d-flex align-items-center ${data.className}`} key={index}>
          <Image src={dynamicImage(`dashboard-2/user/${data.img}.jpg`)} alt="" />
          <div className="flex-grow-1 ms-2">
            <Link to={Href}>
              <H5>{data.name}</H5>
              <span>{data.id}</span>
            </Link>
          </div>
          <div className="flex-shrink-0">
            <Button className={`bg-light-${data.color} txt-${data.color}`} color="transparent">
              {data.status} 
              <span>{Mamber}</span>
            </Button>
          </div>
        </div>
      ))}
    </>
  );
};

export default TopCustomerBody;
