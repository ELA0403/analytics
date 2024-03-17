import { Card, CardBody, Col } from "reactstrap";
import CommonHeader from "../../../../Common/CommonHeader";
import { SlidesOnly } from "../../../../utils/Constant";
import SlideOnlyCarousel from "./SlideOnlyCarousel";

const SlideOnly = () => {
  const subMenu = [
    {
      text: "The ",
      code: ".active",
    },
    {
      text: " class needs to be added to one of the slides otherwise the carousel will not be visible.",
      code: ".d-block",
    },
    {
      text: " and ",
      code: ".w-100 ",
    },
    {
      text: " on carousel images to prevent browser default image alignment.",
    },
  ];
  return (
    <Col xl={6} xs={12}>
      <Card>
        <CommonHeader title={SlidesOnly} subTitle={subMenu} headClass="pb-0" />
        <CardBody>
          <SlideOnlyCarousel />
        </CardBody>
      </Card>
    </Col>
  );
};

export default SlideOnly;
