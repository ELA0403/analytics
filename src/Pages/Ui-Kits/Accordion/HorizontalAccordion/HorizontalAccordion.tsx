import { useState } from "react";
import { Button, Card, CardBody, Col } from "reactstrap";
import { HorizontalAccordions, Togglewidthcollapse } from "../../../../utils/Constant";
import HorizontalDemo from "./HorizontalDemo";
import CommonHeader from "../../../../Common/CommonHeader";

const HorizontalAccordion = () => {
  const [open, setOpen] = useState(false);
  const submenuObj = [
    {
      text: "Add the ",
      code: ".collapse-horizontal",
    },
    {
      text: " and ",
      code: "Row & Col ",
    },
    {
      text: " modifier class and tag to transition the width instead of height and set a width on the immediate child element.",
    },
  ];
  return (
    <Col md={6} sm={12}>
      <Card>
        <CommonHeader title={HorizontalAccordions} subTitle={submenuObj} headClass='pb-0'/>
        <CardBody>
          <div className="common-flex">
            <Button
              color="secondary"
              onClick={() => setOpen(!open)}
            >
              {Togglewidthcollapse}
            </Button>
          </div>
          <HorizontalDemo open={open} />
        </CardBody>
      </Card>
    </Col>
  );
};

export default HorizontalAccordion;
