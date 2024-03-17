import { Image, LI, UL } from "../../../AbstractElements";
import { dynamicImage } from "../../../Service";

const Group2 = () => {
  return (
    <div className="customers d-inline-block avatar-group">
      <UL className="simple-list">
        <LI className="d-inline-block">
          <Image
            className="img-60 rounded-circle"
            src={dynamicImage(`avtar/16.jpg`)}
            alt="#"
          />
        </LI>
        <LI className="d-inline-block">
          <Image className="b-r-8 img-80" src={dynamicImage(`user/1.jpg`)} alt="#" />
        </LI>
        <LI className="d-inline-block">
          <Image
            className="img-60 rounded-circle"
            src={dynamicImage(`user/1.jpg`)}
            alt="#"
          />
        </LI>
      </UL>
    </div>
  );
};

export default Group2;
