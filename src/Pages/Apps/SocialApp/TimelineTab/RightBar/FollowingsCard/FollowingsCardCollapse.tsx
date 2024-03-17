import { CardBody, Collapse } from 'reactstrap'
import { FilterPropsType } from '../../../../../../Types/Apps/SocialApp/SocialApp'
import { Image } from '../../../../../../AbstractElements'
import { dynamicImage } from '../../../../../../Service'
import { Link } from 'react-router-dom'
import { AddFriend, Href } from '../../../../../../utils/Constant'
import { followingsData } from '../../../../../../Data/Apps/SocialApp/SocialAppData'

const FollowingsCardCollapse = ({ isFilter }: FilterPropsType) => {
  return (
    <Collapse isOpen={isFilter}>
      <CardBody className="social-list filter-cards-view">
        {followingsData.map((data, index) => (
          <div className='d-flex' key={index}>
            <Image
              width={50}
              height={50}
              className="img-50 img-fluid m-r-20 rounded-circle"
              alt="image"
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

export default FollowingsCardCollapse