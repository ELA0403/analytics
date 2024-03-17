
import { Image } from '../../../../AbstractElements'
import { slideData } from '../../../../Data/BonusUi/CarouselData';
import { dynamicImage } from '../../../../Service'
import { Carousel } from "react-responsive-carousel";

const CenterMode = () => {
  return (
    <Carousel
    centerMode
    showIndicators={false}
    showStatus={false}
    infiniteLoop={true}
    >
      {slideData &&
        slideData.map((item, index) => (
          <div className="item pe-2" key={index}>
            <Image
              src={dynamicImage(item)}
              alt="img"
              className="img-fluid rounded"
            />
          </div>
        ))}
    </Carousel>
  )
}

export default CenterMode