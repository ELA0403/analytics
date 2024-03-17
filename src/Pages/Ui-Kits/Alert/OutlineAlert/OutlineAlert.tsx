import { Card, CardBody, Col } from "reactstrap";
import { OutlineDarkAndLightAlerts } from "../../../../utils/Constant";
import LightOutline from "./LightOutline";
import DarkOutline from "./DarkOutline";
import CommonHeader from "../../../../Common/CommonHeader";

const OutlineAlert = () => {
  const submenuObj = [
    {
      text: "Use the ",
      code: ".border-*",
    },
    {
      text: "utility class to quickly provide matching border and border-width within any alert.",
    },
  ];
  return (
    <Col sm={12} xl={6}>
      <Card>
        <CommonHeader title={OutlineDarkAndLightAlerts} subTitle={submenuObj} headClass='pb-0'/>
        <CardBody>
          <LightOutline />
          <DarkOutline />
        </CardBody>
      </Card>
    </Col>
  );
};

export default OutlineAlert;
