import { Col, Row, TabContent, TabPane } from "reactstrap";
import { H3, Image, P } from "../../../../../AbstractElements";
import { dynamicImage } from "../../../../../Service";
import EmailContentBody from "./EmailContentBody";

const EmailContent = () => {
  return (
    <Col xl="8" md="12" className="box-md-12 pl-0">
      <div className="email-right-aside">
        <div className="email-body radius-left">
          <div className="ps-0">
            <TabContent >
                <TabPane className="fade active show" id="pills-darkprofile" >
                    <div className="email-content">
                        <div className="email-top">
                            <Row>
                                <Col md="6" sm="12" className="xl-100">
                                    <div className="d-flex">
                                        <Image className="me-3 rounded-circle" src={dynamicImage("user/user.png")} alt="user"/>
                                        <div className="flex-grow-1">
                                            <H3 className="p-0">
                                                {'Kori Thomas'}{" "}
                                                <small>
                                                    <span>(20</span> January) <span>6:00</span> AM
                                                </small>
                                            </H3>
                                            <P>{'Inquiry about our theme pages design.'}</P>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                        <EmailContentBody />
                    </div>
                </TabPane>
            </TabContent>
          </div>
        </div>
      </div>
    </Col>
  );
};

export default EmailContent;
