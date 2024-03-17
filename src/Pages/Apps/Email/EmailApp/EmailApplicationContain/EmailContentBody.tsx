import { Link } from "react-router-dom";
import { H3, H4, P } from "../../../../../AbstractElements";
import { ATTACHMENTS, DownloadAll, Href } from "../../../../../utils/Constant";
import Attachment from "./Attachment";

const EmailContentBody = () => {
  return (
    <div className="email-wrapper">
      <P>{"Hello"}</P>
      <P>{"Dear Sir Good Morning,"}</P>
      <H3>{"Inquiry about our theme pages design."}</H3>
      <P className="m-b-20">
        {
          "Cion Admin is a full featured, multipurpose, premium bootstrap admin template built with Bootstrap 5 Framework, HTML5, CSS and JQuery.It has a huge collection of reusable UI components and integrated with latest jQuery plugins."
        }
      </P>
      <P>
        {
          "It can be used for all type of Web applications like custom admin panel, app backend, CMS or CRM. UI components and integrated with latest jQuery plugins. Tivo Admin is a full featured, multipurpose, premium bootstrap admin template built with Bootstrap 5 Framework."
        }
      </P>
      <hr />
      <div className="d-inline-block">
        <H4 className="text-muted">
          <i className="icofont icofont-clip" /> {ATTACHMENTS}
        </H4>
        <Link className="text-muted text-end right-download" to={Href}>
          <i className="fa fa-long-arrow-down me-2" />
          {DownloadAll}
        </Link>
        <div className="clearfix" />
      </div>
      <Attachment />
    </div>
  );
};

export default EmailContentBody;
