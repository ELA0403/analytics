import { useState } from "react";
import { Card, CardBody, Col, Row } from "reactstrap";
import { JavaScriptbehavior } from "../../../../utils/Constant";
import ListComponent from "./ListComponent";
import JsBehaviorTab from "./JsBehaviorTab";
import CommonHeader from "../../../../Common/CommonHeader";

const JsBehavior = () => {
  const [activeList, setActiveList] = useState<string>("1");
  const submenuObj = [
    {
      text: "Use the tab JavaScript plugin—include it individually or through the compiled",
      code: " bootstrap.js ",
    },
    {
      text: "file to extend our list group to create table panes of local content.",
    },
  ];
  return (
    <Col sm={12} xl={12}>
      <Card>
        <CommonHeader title={JavaScriptbehavior} subTitle={submenuObj} />
        <CardBody>
          <Row>
            <Col sm={4}>
              <ListComponent activeList={activeList} setActiveList={setActiveList}/>
            </Col>
            <Col sm={8}>
              <JsBehaviorTab tabId={activeList} />
            </Col>
          </Row>
        </CardBody>
      </Card>
    </Col>
  );
};

export default JsBehavior;
