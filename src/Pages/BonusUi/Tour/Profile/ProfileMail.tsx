import { Col, Row } from "reactstrap";
import { BOD, Email, January, WilliamEmail } from "../../../../utils/Constant";
import { H6 } from "../../../../AbstractElements";

const ProfileMail = () => {
  return (
    <Col sm={6} xl={4} className="order-sm-1 order-xl-0">
      <Row className="g-3">
        <Col md={6}>
          <div className="tour-email text-start">
            <H6 className="tour-mb-space">
              <i className="fa fa-envelope" />
              &nbsp;&nbsp;&nbsp;{Email}
            </H6>
            <span>{WilliamEmail}</span>
          </div>
        </Col>
        <Col md={6}>
          <div className="tour-email text-start">
            <H6 className="tour-mb-space">
              <i className="fa fa-calendar" />
              &nbsp;&nbsp;&nbsp;{BOD}
            </H6>
            <span>{January}</span>
          </div>
        </Col>
      </Row>
    </Col>
  );
};

export default ProfileMail;
