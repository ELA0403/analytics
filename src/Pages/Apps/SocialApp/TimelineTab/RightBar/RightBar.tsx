import { Card, Col } from 'reactstrap'
import { Image } from '../../../../../AbstractElements'
import { dynamicImage } from '../../../../../Service'
import ProfileIntroCard from './ProfileIntroCard/ProfileIntroCard'
import FollowerCard from './FollowerCard/FollowerCard'
import FollowingsCard from './FollowingsCard/FollowingsCard'
import LatestPhotos from './LatestPhotos/LatestPhotos'
import FriendsCard from './FriendsCard/FriendsCard'

const RightBar = () => {
  return (
    <>
      <ProfileIntroCard />
      <FollowerCard />
      <FollowingsCard />
      <LatestPhotos />
      <FriendsCard />
      <Col xl="12" className="xl-50 box-col-12">
        <Card>
          <Image
            className="img-fluid"
            width={360}
            height={240}
            src={dynamicImage('social-app/timeline-4.png')}
            alt="timeline"
          />
        </Card>
      </Col>
    </>
  )
}

export default RightBar