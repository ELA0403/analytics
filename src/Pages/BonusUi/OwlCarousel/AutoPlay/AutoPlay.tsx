import { Carousel } from "react-responsive-carousel";
import { Card, CardBody, Col } from "reactstrap";
import CommonHeader from "../../../../Common/CommonHeader";
import { AutoPlayVariant } from "../../../../utils/Constant";
import { slideData } from "../../../../Data/BonusUi/CarouselData";
import { dynamicImage } from "../../../../Service";
import { Image } from "../../../../AbstractElements";

const AutoPlay = () => {
  const subMenu = [
    {
      text: "Use the ",
      code: ".owl-carousel ",
    },
    {
      text: "through slides.",
    },
  ];
  return (
    <Col xl={6} xs={12}>
      <Card>
        <CommonHeader title={AutoPlayVariant} subTitle={subMenu} headClass="pb-0" />
        <CardBody>
          <Carousel showArrows={false} showStatus={false} autoPlay={true} infiniteLoop={true}>
            {slideData &&
              slideData.map((item, index) => (
                <div className="item px-1" key={index}>
                  <Image
                    src={dynamicImage(item)}
                    alt="img"
                    className="img-fluid rounded"
                  />
                </div>
              ))}
          </Carousel>
        </CardBody>
      </Card>
    </Col>
  );
};

export default AutoPlay;
