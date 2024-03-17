import { Card, CardBody, Col } from "reactstrap";
import { BrooklynSimmons, Brooklysimmons, Href } from "../../../../../utils/Constant";
import { demoModalData } from "../../../../../Data/Ui-Kits/ModalData";
import { H5, LI, UL } from "../../../../../AbstractElements";
import { Link } from "react-router-dom";
import BgImage from "./BgImage";

const Modal1Body = () => {
  return (
    <Col xl={12}>
      <Card className="social-profile mb-0">
        <CardBody>
          <BgImage />
          <div className="social-details">
            <H5 className="mb-1">
              <Link to={Href}>{BrooklynSimmons}</Link>
            </H5>
            <span className="f-light">{Brooklysimmons}</span>
            <UL className="social-follow simple-list">
              {demoModalData &&
                demoModalData.map((item, index) => (
                  <LI key={index}>
                    <H5 className="mb-0">{item.class}</H5>
                    <span className="f-light">{item.text}</span>
                  </LI>
                ))}
            </UL>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default Modal1Body;
