import { Card, CardBody, Col } from "reactstrap";
import { AlertsWithIconsandTextActions } from "../../../../utils/Constant";
import TimeAlert from "./TimeAlert";
import HeartAlert from "./HeartAlert";
import CommonHeader from "../../../../Common/CommonHeader";

const AlertWithIcon = () => {
  const submenuObj = [
    {
      text: "Use the ",
      code: ".dismiss-text",
    },
    {
      text: " class to add dismiss text instead of icon",
    },
  ];
  return (
    <Col sm={12} xl={6}>
      <Card>
        <CommonHeader
          title={AlertsWithIconsandTextActions}
          subTitle={submenuObj}
          headClass='pb-0'
        />
        <CardBody className="dark-txt">
          <TimeAlert />
          <HeartAlert />
        </CardBody>
      </Card>
    </Col>
  );
};

export default AlertWithIcon;
