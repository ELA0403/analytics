import { Card, CardBody, Col } from "reactstrap";
import CommonHeader from "../../../../Common/CommonHeader";
import { VerticalCarousels } from "../../../../utils/Constant";
import VerticalSlide from "./VerticalSlide";

const VerticalCarousel = () => {
  const subMenu = [
    {
      text: "Add ",
      code: ".carousel-fade",
    },
    {
      text: " to your carousel to animate slides with a fade transition instead of a slide. Depending on your carousel content, you may want to add",
      code: " .bg-body",
    },
    {
      text: " or some custom CSS to the .carousel-items for proper vertical.",
    },
  ];
  return (
    <Col xl={6} xs={12}>
      <Card>
        <CommonHeader title={VerticalCarousels} subTitle={subMenu} headClass="pb-0"/>
        <CardBody>
          <VerticalSlide />
        </CardBody>
      </Card>
    </Col>
  );
};

export default VerticalCarousel;
