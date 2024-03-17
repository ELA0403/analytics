import { Card, CardBody, Col } from "reactstrap";
import { H5, Image, UL } from "../../../../../AbstractElements";
import { dynamicImage } from "../../../../../Service";
import { Link } from "react-router-dom";
import { Href, YourBalance } from "../../../../../utils/Constant";
import SVG from "../../../../../utils/CommonSvgIcon/SVG";
import Investment from "./Investment";
import CashBack from "./CashBack";

const Modal3Body = () => {
  return (
    <Col xl={12}>
      <Card className="balance-box mb-0">
        <CardBody>
          <div className="balance-profile">
            <div className="balance-img">
              <Image
                src={dynamicImage("dashboard-2/user/user.png")}
                alt="user vector"
                width={64}
                height={64}
              />
              <Link to={Href} className="edit-icon">
                <SVG iconId="pencil" />
              </Link>
            </div>
            <span className="f-light d-block">{YourBalance}</span>
            <H5 className="mt-1">$768,987.90</H5>
            <UL>
              <Investment />
              <CashBack />
            </UL>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default Modal3Body;
