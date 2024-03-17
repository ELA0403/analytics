import { Button, Col } from "reactstrap";
import { Meeting_util, Readmore } from "../../../../utils/Constant";
import { H3, LI } from "../../../../AbstractElements";

const Meeting2 = () => {
  return (
    <Col xxl={4} sm={6}>
      <div>
        <div className="vertical-line" />
        <LI className="list-inline-item event-list">
          <div className="px-4">
            <div className="event-date alert-light-danger txt-danger">
              22 March
            </div>
            <H3>{Meeting_util}</H3>
            <p className="text-muted">{"If several languages coalesce the grammar of the resulting simple and regular social networking platform."}</p>
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

export default Meeting2;
