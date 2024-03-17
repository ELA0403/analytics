import { LI, UL } from "../../../../AbstractElements";
import { Link } from "react-router-dom";
import { Href } from "../../../../utils/Constant";
import { profileLikeData } from "../../../../Data/BonusUi/TourData";
import { Label } from "reactstrap";

const ProfileLike = () => {
  return (
    <div className="like-comment mt-4 step7">
      <UL className="list-inline simple-list flex-row">
        {profileLikeData &&
          profileLikeData.map((item, index) => (
            <LI className={item.class} key={index}>
              <Label className="m-0">
                <Link to={Href}>
                  <i className={item.icon} />
                </Link>
                {item.text}
              </Label>
            </LI>
          ))}
      </UL>
    </div>
  );
};

export default ProfileLike;
