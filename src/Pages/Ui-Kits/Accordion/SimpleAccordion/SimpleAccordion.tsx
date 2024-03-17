import { Card, CardBody, Col } from "reactstrap";
import { SimpleAccordions } from "../../../../utils/Constant";
import SimpleDemo from "./SimpleDemo";
import CommonHeader from "../../../../Common/CommonHeader";

const SimpleAccordion = () => {
  const submenuObj = [
    {
      text: "Click the accordions below to expand/collapse the accordion content. Use the ",
      code: ".accordion ",
    },
    {
      text: ".",
    },
  ];
  return (
    <Col sm={12} xl={6}>
      <Card className="height-equal">
        <CommonHeader title={SimpleAccordions} subTitle={submenuObj} headClass='pb-0'/>
        <CardBody>
          <div className="simple-Accordion">
            <SimpleDemo />
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default SimpleAccordion;
