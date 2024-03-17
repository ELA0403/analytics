import { Image } from "../../../../../AbstractElements";
import { dynamicImage } from "../../../../../Service";
import SVG from "../../../../../utils/CommonSvgIcon/SVG";

const BgImage = () => {
  return (
    <div className="social-img-wrap">
      <div className="social-img">
        <Image
          src={dynamicImage("dashboard-2/user/profile.png")}
          alt="profile"
          width={68}
          height={68}
        />
      </div>
      <div className="edit-icon">
        <SVG iconId="profile-check" />
      </div>
    </div>
  );
};

export default BgImage;
