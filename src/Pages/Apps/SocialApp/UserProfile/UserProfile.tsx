import { Card, Col, Row } from 'reactstrap'
import { PropsType } from '../../../../Types/Apps/SocialApp/SocialApp'
import { Image } from '../../../../AbstractElements'
import { dynamicImage } from '../../../../Service'
import { Link } from 'react-router-dom'
import { Href } from '../../../../utils/Constant'
import UserProfileIcon from './UserProfileIcon'
import NavBarMain from './NavBarMain'

const UserProfile = ({ callback }: PropsType) => {
  return (
    <Row>
      <Col sm={12} className="box-col-12">
        <Card className="hovercard text-center">
          <div className="cardheader socialheader" />
          <div className="user-image">
            <div className="avatar">
              <Image width={100} height={100} alt="user" src={dynamicImage('user/1.jpg')} />
            </div>
            <div className="icon-wrapper">
              <Link to={Href}>
                <i className="icofont icofont-pencil-alt-5" />
              </Link>
            </div>
            <UserProfileIcon />
          </div>
          <div className="info market-tabs p-0">
            <NavBarMain callback={callback} />
          </div>
        </Card>
      </Col>
    </Row>
  )
}

export default UserProfile