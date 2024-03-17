import { useState } from "react";
import { Card, CardBody, Col } from "reactstrap";
import { MaterialStyleLeftTabs } from "../../../../utils/Constant";
import MaterialTab from "./MaterialTab";
import MaterialBody from "./MaterialBody";
import CommonHeader from "../../../../Common/CommonHeader";

const LeftStyleTab = () => {
  const [basicTab, setBasicTab] = useState("1");
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
      text: "class through jump another tabs.And ",
      code: "aria-orientation='vertical'",
    },
    {
      text: "thorough change vertical tabs.",
    },
  ];
  return (
    <Col xxl={6}>
      <Card>
        <CommonHeader title={MaterialStyleLeftTabs} subTitle={submenuObj} />
        <CardBody>
          <div className="tabs-responsive-side">
            <div className="material-wrapper">
              <MaterialTab basicTab={basicTab} setBasicTab={setBasicTab} />
              <div className="material-content">
                <MaterialBody tabId={basicTab} />
              </div>
            </div>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default LeftStyleTab;
