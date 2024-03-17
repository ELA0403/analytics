import { Card, CardBody, Col } from "reactstrap";
import { FlushAccordions } from "../../../../utils/Constant";
import FlushDemo from "./FlushDemo";
import CommonHeader from "../../../../Common/CommonHeader";

const FlushAccordion = () => {
  const submenuObj = [
    {
      text: "Add ",
      code: ".accordion-flush",
    },
    {
      text: " to remove the default",
      code: "background-color",
    },
    {
      text: " , some borders, and some rounded corners to render accordions edge-to-edge with their parent container.",
    },
  ];
  return (
    <Col sm={12} xl={6}>
      <Card className="height-equal">
        <CommonHeader title={FlushAccordions} subTitle={submenuObj} headClass='pb-0'/>
        <CardBody>
          <div className="Flush-Accordion">
            <FlushDemo />
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default FlushAccordion;
