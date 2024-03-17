import { useState } from "react";
import { Card, CardBody, Col } from "reactstrap";
import { Simpletabs } from "../../../../utils/Constant";
import SimpleNav from "./SimpleNav";
import SimpleTabContent from "./SimpleTabContent";
import CommonHeader from "../../../../Common/CommonHeader";

const SimpleTab = () => {
  const [basicTab, setBasicTab] = useState("1");
  const submenuObj = [
    {
      text: "Use the ",
      code: ".nav-link",
    },
    {
      text: " with ",
      code: ".show ",
    },
    {
      text: "class to jump particular tabs.",
    },
  ];
  return (
    <Col sm={12} xl={6}>
      <Card>
        <CommonHeader title={Simpletabs} subTitle={submenuObj} headClass="pb-0" />
        <CardBody>
          <SimpleNav basicTab={basicTab} setBasicTab={setBasicTab} />
          <SimpleTabContent tabId={basicTab} />
        </CardBody>
      </Card>
    </Col>
  );
};

export default SimpleTab;
