import { Button, Col } from "reactstrap";
import { Meeting_util, Readmore } from "../../../../utils/Constant";
import { H3, LI, P } from "../../../../AbstractElements";

const Meeting = () => {
  return (
    <Col xxl={4} className="horizontal-timeline">
      <div>
        <LI className="list-inline-item event-list">
          <div className="px-4">
            <div className="event-date alert-light-danger txt-danger">
              22 March
            </div>
            <H3>{Meeting_util}</H3>
            <P className="text-muted">{"If several languages coalesce the grammar of the resulting simple and regular social networking platform."}</P>
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

export default Meeting;
