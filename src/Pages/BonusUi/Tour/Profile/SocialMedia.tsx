import { UL } from "../../../../AbstractElements";
import { Link } from "react-router-dom";
import { tourProfileData } from "../../../../Data/BonusUi/TourData";

const SocialMedia = () => {
  return (
    <div className="social-media" data-intro="This is your social details">
      <UL className="list-inline simple-list flex-row">
        {tourProfileData &&
          tourProfileData.map((item, index) => (
            <li className="list-inline-item" key={index}>
              <Link to={item.link} target="_blank" rel="noreferrer">
                <i className={item.icon} />
              </Link>
            </li>
          ))}
      </UL>
    </div>
  );
};

export default SocialMedia;
