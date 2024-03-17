import { sliderCaptionData } from "../../../../Data/BonusUi/CarouselData";
import { H5, Image, P } from "../../../../AbstractElements";
import { dynamicImage } from "../../../../Service";
import { Carousel } from "react-responsive-carousel";

const CaptionSlider = () => {
  return (
    <Carousel
    showIndicators={false}
    showStatus={false}
    autoPlay={true}
    infiniteLoop={true}
    >
      {sliderCaptionData &&
        sliderCaptionData.map((item, index) => (
          <div className="item pe-2" key={index}>
            <Image
              src={dynamicImage(item.img)}
              alt="img"
              className="img-fluid rounded"
            />
                <H5>{item.caption}</H5>
                <P>{item.describe}</P>
            {item.caption}
          </div>
        ))}
    </Carousel>
  );
};

export default CaptionSlider;
