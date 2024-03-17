import { useState } from "react";
import { Card, CardBody, Col } from "reactstrap";
import { BorderTab } from "../../../../utils/Constant";
import BorderNav from "./BorderNav/BorderNav";
import TabComponent from "./TabComponent";
import CommonHeader from "../../../../Common/CommonHeader";

const BorderTabs = () => {
  const [basicTab, setBasicTab] = useState("2");
  const submenuObj = [
    {
      text: "Use the ",
      code: ".nav-link ",
    },
    {
      text: "with ",
      code: ".active ",
    },
    {
      text: "class. And hover effect added on bottom border styles.",
    },
  ];
  return (
    <Col xxl={6}>
      <Card>
        <CommonHeader title={BorderTab} subTitle={submenuObj} headClass="pb-0"/>
        <CardBody>
          <BorderNav basicTab={basicTab} setBasicTab={setBasicTab} />
          <TabComponent tabId={basicTab} />
        </CardBody>
      </Card>
    </Col>
  );
};

export default BorderTabs;
