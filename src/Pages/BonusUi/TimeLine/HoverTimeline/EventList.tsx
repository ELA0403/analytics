import { H3, Image, LI, P, UL } from "../../../../AbstractElements";
import { dynamicImage } from "../../../../Service";
import { MollyBoake } from "../../../../utils/Constant";

const EventList = () => {
  return (
    <UL className="main-lists-content simple-list">
      <LI
        className="list-group-item-action border-0 p-0 mb-4"
        aria-current="true"
      >
        <div className="d-flex w-100 justify-content-between align-items-center">
          <div className="list-wrapper">
            <Image
              className="list-img"
              src={dynamicImage("user/1.jpg")}
              alt="profile"
            />
            <div className="list-content">
              <H3>{MollyBoake}</H3>
              <P>{"MollyBoake@rhyta.com"}</P>
            </div>
          </div>
          <div className="timeline-icon">
            <i className="icon-facebook" />
            <i className="icon-google" />
            <i className="icon-twitter-alt" />
          </div>
        </div>
        <P className="mb-1">{"Next step is to choose a tone of voice for your content type."}</P>
      </LI>
    </UL>
  );
};

export default EventList;
