import { Carousel } from "react-responsive-carousel";
import { slideData } from "../../../../Data/BonusUi/CarouselData";
import { Image } from "../../../../AbstractElements";
import { dynamicImage } from "../../../../Service";

const SlideOnlyCarousel = () => {
  return (
    <>
      <Carousel showArrows={false} showIndicators={false} showStatus={false} autoPlay={true} infiniteLoop={true}>
        {slideData &&
          slideData.slice(0, 3).map((item, index) => (
            <div className="item" key={index}>
              <Image src={dynamicImage(item)} alt="img" className="img-fluid" />
            </div>
          ))}
      </Carousel>
    </>
  );
};

export default SlideOnlyCarousel;
