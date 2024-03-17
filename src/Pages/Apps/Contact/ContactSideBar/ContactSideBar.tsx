import { Button, Card, CardBody } from "reactstrap";
import { useAppDispatch, useAppSelector} from "../../../../ReaduxToolkit/Hooks";
import { ContactSidebarCallbackProp } from "../../../../Types/Apps/Contact/ContactTypes";
import { setContactFilter } from "../../../../ReaduxToolkit/Reducer/ContactSlice";
import { ContactFilter } from "../../../../utils/Constant";
import { H3, Image, P } from "../../../../AbstractElements";
import { dynamicImage } from "../../../../Service";
import NavComponent from "./NavComponent";

const ContactSideBar = ({ callback }: ContactSidebarCallbackProp) => {
  const { contactFilter } = useAppSelector((state) => state.contact);
  const dispatch = useAppDispatch();
  return (
    <div className="md-sidebar">
      <Button
        tag="a"
        color="primary"
        className="md-sidebar-toggle"
        onClick={() => dispatch(setContactFilter())}
      >
        {ContactFilter}
      </Button>
      <div className={`md-sidebar-aside job-left-aside custom-scrollbar ${contactFilter ? "open" : ""}`} >
        <div className="email-left-aside">
          <Card>
            <CardBody>
              <div className="email-app-sidebar left-bookmark">
                <div className="d-flex">
                  <div className="d-flex-size-email">
                    <Image className="me-3 rounded-circle" src={dynamicImage("user/user.png")} alt=""/>
                  </div>
                  <div className="flex-grow-1">
                    <H3 className="f-w-600">{'MARK JENCO'}</H3>
                    <P>{'Markjecno@gmail.com'}</P>
                  </div>
                </div>
                <NavComponent callbackActive={callback} />
              </div>
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ContactSideBar;
