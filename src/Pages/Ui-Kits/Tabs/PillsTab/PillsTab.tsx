import { useState } from "react";
import { Card, CardBody, Col } from "reactstrap";
import { Pillstabs } from "../../../../utils/Constant";
import PillNav from "./PillNav";
import PillContent from "./PillContent";
import CommonHeader from "../../../../Common/CommonHeader";

const PillsTab = () => {
  const [basicTab, setBasicTab] = useState("3");
  const submenuObj = [
    {
      text: "Use the ",
      code: 'data-bs-toggle="pill"',
    },
    {
      text: " to tabs pill shape. And mandatory for ",
      code: ".active ",
    },
    {
      text: " class.",
    },
  ];
  return (
    <Col sm={12} xxl={6}>
      <Card className="height-equal">
        <CommonHeader title={Pillstabs} subTitle={submenuObj} headClass="pb-0"/>
        <CardBody>
          <PillNav basicTab={basicTab} setBasicTab={setBasicTab} />
          <PillContent tabId={basicTab} />
        </CardBody>
      </Card>
    </Col>
  );
};

export default PillsTab;
