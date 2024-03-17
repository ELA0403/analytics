import { useState } from "react";
import { Alert, Button, Card, CardBody, Col } from "reactstrap";
import FeatherIcons from "../../../../utils/CommonSvgIcon/FeatherIcons";
import { LeftBorderAlerts } from "../../../../utils/Constant";
import { P } from "../../../../AbstractElements";
import CommonHeader from "../../../../Common/CommonHeader";

const LeftBorderAlert = () => {
  const [active, setActive] = useState(true);
  const submenuObj = [
    {
      text: "Use the ",
      code: ".border-left-wrapper ",
    },
    {
      text: "to change border-left radius.",
    },
  ];
  return (
    <Col xl={6}>
      <Card>
        <CommonHeader title={LeftBorderAlerts} subTitle={submenuObj} headClass='pb-0'/>
        <CardBody className="live-dark">
          <Alert
            className= {`alert-light-dark light alert-dismissible fade text-dark border-left-wrapper ${
              active ? "show" : "d-none"
            }`} color=""
          >
            <FeatherIcons iconName="HelpCircle" />
            <P>{"You can check in on some of those fields below."}</P>
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

export default LeftBorderAlert;
