import { useState } from "react";
import { Card, CardBody, Col } from "reactstrap";
import { IconsWithTabs } from "../../../../utils/Constant";
import IconNav from "./IconNav";
import IconTabBody from "./IconTabBody";
import CommonHeader from "../../../../Common/CommonHeader";

const IconTabs = () => {
  const [basicTab, setBasicTab] = useState("1");
  const submenuObj = [
    {
      text: "Use the ",
      code: ".nav-link ",
    },
    {
      text: "with feather icons. And ",
      code: ".show",
    },
    {
      text: " class to tabs change.",
    },
  ];
  return (
    <Col sm={12} xl={6}>
      <Card>
        <CommonHeader title={IconsWithTabs} subTitle={submenuObj} headClass="pb-0 card-no-border" />
        <CardBody>
          <IconNav basicTab={basicTab} setBasicTab={setBasicTab} />
          <IconTabBody tabId={basicTab} />
        </CardBody>
      </Card>
    </Col>
  );
};

export default IconTabs;
