import { Carousel } from "react-responsive-carousel";
import { slideData } from "../../../../Data/BonusUi/CarouselData";
import { dynamicImage } from "../../../../Service";
import { Image } from "../../../../AbstractElements";

const IndecatorSlide = () => {
  return (
    <Carousel showStatus={false} autoPlay={true} infiniteLoop={true}>
      {slideData &&
        slideData.slice(0, 3).map((item, index) => (
          <div className="item" key={index}>
            <Image src={dynamicImage(item)} alt="img" className="img-fluid" />
          </div>
        ))}
    </Carousel>
  );
};

export default IndecatorSlide;
