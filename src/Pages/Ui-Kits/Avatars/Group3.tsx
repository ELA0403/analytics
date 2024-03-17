import { Image, LI, UL } from "../../../AbstractElements";
import { dynamicImage } from "../../../Service";

const Group3 = () => {
  return (
    <div className="customers d-inline-block avatar-group">
      <UL className="simple-list">
        <LI className="d-inline-block">
          <Image
            className="img-40 rounded-circle"
            src={dynamicImage(`user/3.jpg`)}
            alt="#"
          />
        </LI>
        <LI className="d-inline-block">
          <Image
            className="img-40 rounded-circle"
            src={dynamicImage(`user/5.jpg`)}
            alt="#"
          />
        </LI>
        <LI className="d-inline-block">
          <Image
            className="img-40 rounded-circle"
            src={dynamicImage(`user/1.jpg`)}
            alt="#"
          />
        </LI>
      </UL>
    </div>
  );
};

export default Group3;
