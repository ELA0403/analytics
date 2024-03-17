import { useState } from "react";
import { Alert, Button, Card, CardBody, Col } from "reactstrap";
import FeatherIcons from "../../../../utils/CommonSvgIcon/FeatherIcons";
import { DismissingLightAlerts } from "../../../../utils/Constant";
import { P } from "../../../../AbstractElements";
import CommonHeader from "../../../../Common/CommonHeader";

const DismissingLight = () => {
  const [active, setActive] = useState(true);
  const submenuObj = [
    {
      text: "Use the ",
      code: ".alert-dismissible",
    },
    {
      text: " utility class to quickly remove the alerts.",
    },
  ];
  return (
    <Col sm={12} xl={6}>
      <Card className="height-equal">
        <CommonHeader title={DismissingLightAlerts} subTitle={submenuObj} headClass='pb-0'/>
        <CardBody>
          <Alert
            color="warning"
            className={`alert-dismissible fade ${
              active ? "show" : "d-none"
            }`}
          >
            <FeatherIcons iconName="Bell" />
            <P>{"Hidden content You should check in on some of those fields below."}</P>
            <Button
              color="transperant"
              className="btn-close"
              onClick={() => {
                setActive(false);
              }}
            />
          </Alert>
        </CardBody>
      </Card>
    </Col>
  );
};

export default DismissingLight;
