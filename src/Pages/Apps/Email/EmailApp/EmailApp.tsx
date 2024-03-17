import { Col, Container, Row } from "reactstrap";
import Breadcrumbs from "../../../../CommonElements/Breadcrumbs/Breadcrumbs";
import { EmailApps, Emails } from "../../../../utils/Constant";
import MailSidebar from "./MailSidebar/MailSidebar";
import EmailApplicationContain from "./EmailApplicationContain/EmailApplicationContain";

const EmailApp = () => {
  return (
    <>
      <Breadcrumbs mainTitle={EmailApps} parent={Emails} title={EmailApps} />
      <Container fluid>
        <div className="email-wrap emailapp-items">
          <Row>
            <Col xl="3" className="box-col-30">
              <MailSidebar path={"emailcompose"}/>
            </Col>
            <Col xl="9" className="box-col-80">
              <EmailApplicationContain />
            </Col>
          </Row>
        </div>
      </Container>
    </>
  );
};

export default EmailApp;
