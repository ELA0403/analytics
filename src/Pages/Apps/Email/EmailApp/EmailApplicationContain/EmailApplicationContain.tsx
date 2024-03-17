import {Card,Col,Row} from "reactstrap";
import ReadEmailList from "./ReadEmailList";
import EmailContent from "./EmailContent";
import EmailTop from "./EmailTop";

const EmailApplicationContain = () => {

  return (
    <div className="email-right-aside">
      <Card className="email-body">
        <Row>
          <Col xl={4} md={12} className="box-md-12 pr-0">
            <div className="pe-0"></div>
            <EmailTop />
            <ReadEmailList />
          </Col>
          <EmailContent />
        </Row>
      </Card>
    </div>
  );
};

export default EmailApplicationContain;
