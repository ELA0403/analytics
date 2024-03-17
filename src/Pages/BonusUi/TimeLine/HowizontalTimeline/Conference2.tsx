import { Button, Col } from "reactstrap";
import { Conference_util, Readmore } from "../../../../utils/Constant";
import { H3, LI, P } from "../../../../AbstractElements";

const Conference2 = () => {
  return (
    <Col xxl={4} sm={6}>
      <div>
        <div className="vertical-line" />
        <LI className="list-inline-item event-list">
          <div className="px-4">
            <div className="event-date alert-light-primary txt-primary">
              1 Jan
            </div>
            <H3>{Conference_util}</H3>
            <P className="text-muted">{"A gathering of two or more people to talk about issues of interest."}</P>
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

export default Conference2;
