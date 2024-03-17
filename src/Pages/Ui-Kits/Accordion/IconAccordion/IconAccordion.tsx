import { Card, CardBody, Col } from "reactstrap";
import { WithIconsAccordion } from "../../../../utils/Constant";
import IconDemo from "./IconDemo";
import CommonHeader from "../../../../Common/CommonHeader";

const IconAccordion = () => {
  const submenuObj = [
    {
      text: "A ",
      code: "<button/>",
    },
    {
      text: " can show and hide multiple elements by update state object true or false",
    },
  ];
  return (
    <Col xl={6} sm={12}>
      <Card>
        <CommonHeader title={WithIconsAccordion} subTitle={submenuObj} headClass='pb-0'/>
        <CardBody>
          <div className="icon-accordion">
            <IconDemo />
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default IconAccordion;
