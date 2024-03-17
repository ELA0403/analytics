import { Card, CardBody, Col } from "reactstrap";
import { OutlineAccordions } from "../../../../utils/Constant";
import OutlineDemo from "./OutlineDemo";
import CommonHeader from "../../../../Common/CommonHeader";

const OutlineAccordion = () => {
  const submenuObj = [
    {
      text: "Add Custom ",
      code: ".accordion-wrapper",
    },
    {
      text: " class to add border flash and background-color property.",
    },
  ];
  return (
    <Col xl={6} sm={12}>
      <Card>
        <CommonHeader title={OutlineAccordions} subTitle={submenuObj} headClass='pb-0'/>
        <CardBody>
          <div className="outline-accordion">
            <OutlineDemo />
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default OutlineAccordion;
