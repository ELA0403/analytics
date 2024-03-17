import { Card, CardBody, Col } from "reactstrap";
import CommonHeader from "../../../../Common/CommonHeader";
import { IndividualCarousels } from "../../../../utils/Constant";
import IndividualSlide from "./IndividualSlide";

const IndividualCarousel = () => {
  const subMenu = [
    {
      text: "Add ",
      code: 'data-bs-interval=""',
    },
    {
      text: " to a",
      code: " .carousel-item",
    },
    {
      text: "  to change the amount of time to delay between automatically cycling to the next item.",
    },
  ];
  return (
    <Col xl={6} xs={12}>
      <Card>
        <CommonHeader title={IndividualCarousels} subTitle={subMenu} />
        <CardBody>
          <IndividualSlide />
        </CardBody>
      </Card>
    </Col>
  );
};

export default IndividualCarousel;
