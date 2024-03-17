import { Button, Col } from "reactstrap";
import { Meet_up, Readmore } from "../../../../utils/Constant";
import { H3, LI, P } from "../../../../AbstractElements";

const MeetUp = () => {
  return (
    <Col xxl={4} sm={6}>
      <div>
        <LI className="list-inline-item event-list">
          <div className="px-4">
            <div className="event-date alert-light-success txt-success">
              4 Feb
            </div>
            <H3>{Meet_up}</H3>
            <P className="text-muted">{ "You may connect with males from all around the world using the friend-forward."}</P>
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

export default MeetUp;
