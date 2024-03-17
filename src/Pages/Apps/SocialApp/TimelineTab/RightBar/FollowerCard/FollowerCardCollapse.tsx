import { CardBody, Collapse } from 'reactstrap'
import { FilterPropsType } from '../../../../../../Types/Apps/SocialApp/SocialApp'
import { Image } from '../../../../../../AbstractElements'
import { dynamicImage } from '../../../../../../Service'
import { AddFriend, Href } from '../../../../../../utils/Constant'
import { Link } from 'react-router-dom'
import { followersData } from '../../../../../../Data/Apps/SocialApp/SocialAppData'

const FollowerCardCollapse = ({ isFilter }: FilterPropsType) => {
  return (
    <Collapse isOpen={isFilter}>
      <CardBody className="social-list filter-cards-view">
        {followersData.map((data, index) => (
          <div className='d-flex' key={index}>
            <Image
              width={50}
              height={50}
              className="img-50 img-fluid m-r-20 rounded-circle"
              alt="img"
              src={dynamicImage(`user/${data.imageName}`)}
            />
            <div className='flex-grow-1'>
              <span className="d-block">{data.name}</span>
              <Link to={Href}>{AddFriend}</Link>
            </div>
          </div>
        ))}
      </CardBody>
    </Collapse>
  )
}

export default FollowerCardCollapse