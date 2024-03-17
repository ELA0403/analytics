import { Button, Col } from "reactstrap";
import { H3, LI, P } from "../../../../AbstractElements";
import { Launch_Theme, Readmore } from "../../../../utils/Constant";

const LunchTime = () => {
  return (
    <Col xxl={4} className="horizontal-timeline">
      <div>
        <div className="vertical-line" />
        <LI className="LIst-inline-item event-list">
          <div className="px-4">
            <div className="event-date alert-light-warning txt-warning">
              7 Dec
            </div>
            <H3>{Launch_Theme}</H3>
            <P className="text-muted">{"Responsive Website is the approach that suggests website design and development should respond."}</P>
            <div>
              <Button color="primary" className="px-3">
                {Readmore}
              </Button>
            </div>
          </div>
        </LI>
      </div>
    </Col>
  );
};

export default LunchTime;
