import { Badge, Card, CardBody } from 'reactstrap'
import HeaderProfile from '../../../Tasks/NavClass/HeaderProfile'
import { LI, UL } from '../../../../../AbstractElements'
import { Link } from 'react-router-dom'
import { Href, Inbox, NewMail } from '../../../../../utils/Constant'
import DynamicEmailSideBar from './DynamicEmailSideBar'
interface PropsTypes{
    path:string
}
const MailSidebar = ({path}:PropsTypes) => {
  return (
    <div className="email-left-aside">
      <Card>
        <CardBody>
          <div className="email-app-sidebar">
            <HeaderProfile />
            <UL className="simple-list nav main-menu " role="tablist">
              <LI className= "nav-item" >
                <Link className="btn-primary btn-block btn-mail w-100" to={`${process.env.PUBLIC_URL}/email/${path}`}>
                  <i className="icofont icofont-envelope me-2"></i> {NewMail}
                </Link>
              </LI>
              <LI className= "nav-item" >
                <Link className="show" to={Href}>
                  <span className="title">
                    <i className="icon-import"></i> {Inbox}
                  </span>
                  <Badge color='' className="pull-right email-badge">(236)</Badge>
                </Link>
              </LI>
              <DynamicEmailSideBar />
            </UL>
          </div>
        </CardBody>
      </Card>
    </div>
  )
}

export default MailSidebar