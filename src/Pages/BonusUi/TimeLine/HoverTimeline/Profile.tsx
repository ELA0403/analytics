import { H3, Image, P } from "../../../../AbstractElements";
import { dynamicImage } from "../../../../Service";
import { CarolynSutton, LillianGoodfellow } from "../../../../utils/Constant";

const Profile = () => {
  return (
    <div className="designer-details">
      <div className="designer-profile">
        <div className="designer-wrap">
          <Image
            className="designer-img"
            src={dynamicImage("avtar/4.jpg")}
            alt="profile"
            width={50}
            height={50}
          />
          <div className="designer-content">
            <H3>{LillianGoodfellow}</H3>
            <P>{"239-664-7751s"}</P>
          </div>
        </div>
      </div>
      <div className="designer-profile">
        <div className="designer-wrap">
          <Image
            className="designer-img"
            src={dynamicImage("avtar/7.jpg")}
            alt="profile"
            width={50}
            height={50}
          />
          <div className="designer-content">
            <H3>{CarolynSutton}</H3>
            <P>{"218-793-6609"}</P>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
