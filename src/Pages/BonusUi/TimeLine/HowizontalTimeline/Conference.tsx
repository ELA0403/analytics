import { Button, Col } from "reactstrap";
import { H3, LI, P } from "../../../../AbstractElements";
import { Conference_util, Readmore } from "../../../../utils/Constant";

const Conference = () => {
  return (
    <Col xxl={4} sm={6}>
      <div>
        <LI className="event-list">
          <div className="px-4">
            <div className="event-date alert-light-primary txt-primary">
              1 Jan
            </div>
            <H3>{Conference_util}</H3>
            <P className="text-muted">{"Conferences are intended to bring individuals with similar interests together to discuss problems."}</P>
            <div className="read-more-btn">
              <Button color="primary" className="px-3">
                {Readmore}
              </Button>
            </div>
          </div>
        </LI>
        <div className="vertical-line" />
      </div>
    </Col>
  );
};

export default Conference;
