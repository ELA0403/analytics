import { Image, LI, UL } from "../../../AbstractElements";
import { dynamicImage } from "../../../Service";

const Group1 = () => {
  return (
    <div className="customers d-inline-block avatar-group">
      <UL className="simple-list">
        <LI className="d-inline-block">
          <Image
            className="img-100 b-r-8"
            src={dynamicImage(`avtar/4.jpg`)}
            alt="#"
          />
        </LI>
        <LI className="d-inline-block">
          <Image
            className="img-80 b-r-30"
            src={dynamicImage(`avtar/16.jpg`)}
            alt="#"
          />
        </LI>
        <LI className="d-inline-block">
          <Image
            className="img-50 b-r-35"
            src={dynamicImage(`avtar/3.jpg`)}
            alt="#"
          />
        </LI>
      </UL>
    </div>
  );
};

export default Group1;
