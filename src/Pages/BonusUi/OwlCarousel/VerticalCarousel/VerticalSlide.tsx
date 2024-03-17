import { Carousel } from "react-responsive-carousel";
import { slideData } from "../../../../Data/BonusUi/CarouselData";
import { Image } from "../../../../AbstractElements";
import { dynamicImage } from "../../../../Service";

const VerticalSlide = () => {
  return (
    <Carousel
      showStatus={false}
      autoPlay={true}
      infiniteLoop={true}
      axis="vertical" 
    >
      {slideData &&
        slideData.slice(8, 11).map((item, index) => (
          <div className="item" key={index}>
            <Image src={dynamicImage(item)} alt="img" className="img-fluid" />
          </div>
        ))}
    </Carousel>
  );
};

export default VerticalSlide;
