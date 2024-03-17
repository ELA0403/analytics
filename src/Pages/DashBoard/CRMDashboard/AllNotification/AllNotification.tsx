import { Card, CardBody, CardHeader, Col } from "reactstrap";
import { H3 } from "../../../../AbstractElements";
import { AllNotifications } from "../../../../utils/Constant";
import AllNotificationBody from "./AllNotificationBody";

const AllNotification = () => {
  return (
    <Col xl="5" lg="6">
      <Card className="all-notification">
        <CardHeader className="pb-0">
          <div className="header-top">
            <H3 className="m-0">{AllNotifications}</H3>
          </div>
        </CardHeader>
        <CardBody>
          <AllNotificationBody />
        </CardBody>
      </Card>
    </Col>
  );
};

export default AllNotification;
