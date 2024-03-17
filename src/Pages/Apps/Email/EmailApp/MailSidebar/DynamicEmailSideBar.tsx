import { Href } from '../../../../../utils/Constant'
import { emailSidbar } from '../../../../../Data/Apps/Email/EmailData'
import { LI } from '../../../../../AbstractElements'
import { Link } from 'react-router-dom'
import { Badge } from 'reactstrap'

const DynamicEmailSideBar = () => {
  return (
    <>
      {emailSidbar &&
        emailSidbar.map((item,index) => (
          <LI key={index}>
            {!item.line ? (
              <Link to={Href}>
                <span className="title">
                  <i className={item.className}></i>
                  {item.title}
                </span>
                <Badge color='' className="pull-right email-badge">
                  {item.badge && `(${item.badge})`}
                </Badge>
              </Link>
            ) : (
              item.line
            )}
          </LI>
        ))}
    </>
  )
}

export default DynamicEmailSideBar