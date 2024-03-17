import { Link } from "react-router-dom";
import { H5, Image, LI, UL } from "../../../../AbstractElements";
import { dynamicImage } from "../../../../Service";
import { Href } from "../../../../utils/Constant";
import { Button } from "reactstrap";
import { dealOpenData } from "../../../../Data/Dashboard/CRM/DealOpen";

const DealOpenBody = () => {
  return (
    <UL className="theme-scrollbar">
      {dealOpenData.map((data,index) => (
        <LI className="d-flex align-items-center" key={index}>
          <Image src={dynamicImage(`dashboard-2/user/${data.img}.jpg`)} alt="" />
          <Link className="ms-2" to={Href}>
            <H5>{data.title}</H5>
            <span>{data.subTitle}</span>
          </Link>
          <div className="flex-grow-1 ms-2">
            <H5>{data.duration}</H5>
            <span>{data.date}</span>
          </div>
          <div className="flex-shrink-0 ms-2">
            <H5>{data.amount}</H5>
            <Button color="transperant" className="bg-light-primary txt-primary">
              {data.btn}
            </Button>
          </div>
        </LI>
      ))}
    </UL>
  );
};

export default DealOpenBody;
