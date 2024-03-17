import { Card, CardBody, Col } from "reactstrap";
import { H5, Image } from "../../../../AbstractElements";
import { dynamicImage } from "../../../../Service";
import { Link } from "react-router-dom";
import { Href, YourBalances } from "../../../../utils/Constant";
import SVG from "../../../../utils/CommonSvgIcon/SVG";
import Investment from "./Investment";

const YourBalance = () => {
  return (
    <Col xxl="3" xl="4" sm="6" className="box-col-6">
      <Card className="balance-box height-equal-2">
        <CardBody className="d-flex align-items-center justify-content-center">
          <div className="balance-profile">
            <div className="balance-img">
              <Image src={dynamicImage("dashboard-2/user/user.png")} alt="user vector"/>
              <Link className="edit-icon" to={Href}>
                <SVG iconId="pencil" />
              </Link>
            </div>
            <span className="f-light d-block">{YourBalances} </span>
            <H5 className="mt-1">$768,987.90</H5>
            <Investment />
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default YourBalance;
