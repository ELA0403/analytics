import { Link } from "react-router-dom";
import { Image, LI, UL } from "../../../../../AbstractElements";
import { dynamicImage } from "../../../../../Service";
import { Forward, Href, Reply, ReplyAll } from "../../../../../utils/Constant";

const Attachment = () => {
  return (
    <>
      <div className="attachment">
        <UL className="list-inline flex-row simple-list justify-content-start">
          <LI className="list-inline-item">
            <Image className="img-fluid" src={dynamicImage("email/1.jpg")} alt="image" />
          </LI>
          <LI className="list-inline-item">
            <Image className="img-fluid" src={dynamicImage("email/2.jpg")} alt="image"/>
          </LI>
          <LI className="list-inline-item">
            <Image className="img-fluid" src={dynamicImage("email/3.jpg")} alt="image" />
          </LI>
        </UL>
      </div>
      <hr />
      <div className="action-wrapper">
        <UL className="actions flex-row simple-list">
          <LI>
            <Link className="text-muted" to={Href}>
                <i className="fa fa-reply me-2" />{Reply}
            </Link>
          </LI>
          <LI>
            <Link className="text-muted" to={Href}>
                <i className="fa fa-reply-all me-2" /> {ReplyAll}
            </Link>
          </LI>
          <LI>
            <Link className="text-muted" to={Href}>
                <i className="fa fa-share me-2" />
            </Link>{Forward}
          </LI>
        </UL>
      </div>
    </>
  );
};

export default Attachment;
