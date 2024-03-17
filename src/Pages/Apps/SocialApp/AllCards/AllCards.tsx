import { Card, CardBody, Col } from 'reactstrap'
import { H3, H5, Image, LI, UL } from '../../../../AbstractElements'
import { dynamicImage } from '../../../../Service'
import { Followers, Following, Href, Posts } from '../../../../utils/Constant'
import { userCardData } from '../../../../Data/Apps/SocialApp/SocialAppData'
import { Link } from 'react-router-dom'
import SVG from '../../../../utils/CommonSvgIcon/SVG'

const AllCards = () => {
  return (
    <>
      {userCardData.slice(0,6).map((item) => (
        <Col sm={12} md={6} xl={4} lg={6} className="box-col-4" key={item.id}>
          <Card className="social-profile">
            <CardBody>
              <div className="social-img-wrap">
                <div className="social-img">
                  <Image width={68} height={68} src={dynamicImage(item.avatar)} alt="user"/>
                </div>
                <div className="edit-icon">
                  <SVG iconId={item.icon} />
                </div>
              </div>
              <div className="social-details">
                <H5 className="mb-1">
                  <Link to={Href}>{item.name}</Link>
                </H5>
                <span className="f-light">{item.email}</span>
                <UL className="social-follow simple-list flex-row">
                  <LI>
                    <H3 className="mb-0">{item.totalPost}</H3>
                    <span className="f-light">{Posts}</span>
                  </LI>
                  <LI>
                    <H3 className="mb-0">{item.follower}</H3>
                    <span className="f-light">{Followers}</span>
                  </LI>
                  <LI>
                    <H3 className="mb-0">{item.following}</H3>
                    <span className="f-light">{Following}</span>
                  </LI>
                </UL>
              </div>
            </CardBody>
          </Card>
        </Col>
      ))}
    </>
  )
}

export default AllCards