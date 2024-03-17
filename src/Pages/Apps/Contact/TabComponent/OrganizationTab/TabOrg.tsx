import { organizationList } from '../../../../../Data/Apps/Contact/ContactData'
import { TabPane } from 'reactstrap'
import { H3, Image, LI, P, UL } from '../../../../../AbstractElements'
import { dynamicImage } from '../../../../../Service'
import { Emailaddress, Gender, General, Href, Personal, Print } from '../../../../../utils/Constant'
import { Link } from 'react-router-dom'

const TabOrg = () => {
  return (
    <>
      {organizationList.map((item, i) =>
        <TabPane tabId={item.activeTab} key={i}>
          <div className="profile-mail">
          <div className="d-flex">
              <Image className= 'p-0 img-100 img-fluid m-r-20 rounded-circle update_img_5' src= {dynamicImage(`${item.img}`)} alt= 'images'  />
              <div className="flex-grow-1">
                <H3>
                    <span className="first_name_5">{item.name}</span>
                </H3>
                <P className='email_add_5' >{item.email}</P>
                <UL className='simple-list'>
                  <LI>
                    <Link to={Href}>{Print}</Link>
                  </LI>
                </UL>
              </div>
            </div>
            <div className="email-general">
              <H3>{General}</H3>
              <P>{Emailaddress}: <span className="font-primary email_add_5">{item.email}</span></P>
              <div className="gender">
                <H3>{Personal}</H3>
                <P>{Gender}: <span>{item.gender}</span></P>
              </div>
            </div>
          </div>
        </TabPane>
      )}
    </>
  )
}

export default TabOrg