import { Card, CardBody, Col } from "reactstrap";
import CommonHeader from "../../../../Common/CommonHeader";
import { WithCaptions } from "../../../../utils/Constant";
import CaptionSlider from "./CaptionSlider";

const WithCaption = () => {
  const subMenu = [
    {
      text: "Add captions to your slides easily with the",
      code: " .carousel-caption",
    },
    {
      text: " element within any ",
      code: ".carousel-item.",
    },
  ];
  return (
    <Col xl={6} xs={12}>
      <Card>
        <CommonHeader title={WithCaptions} subTitle={subMenu} headClass="pb-0"/>
        <CardBody>
          <CaptionSlider />
        </CardBody>
      </Card>
    </Col>
  );
};

export default WithCaption;
