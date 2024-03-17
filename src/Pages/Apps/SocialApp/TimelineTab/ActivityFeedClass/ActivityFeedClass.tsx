import { useState } from 'react'
import { Card } from 'reactstrap';
import HeaderWithIcon from '../../../../../CommonElements/SocialApp/HeaderWithIcon';
import { ActivityFeed } from '../../../../../utils/Constant';
import ActivityFeedCollapse from './ActivityFeedCollapse';

const ActivityFeedClass = () => {
    const [isOpen, setIsOpen] = useState(true);
  return (
    <Card>
      <HeaderWithIcon Heading={ActivityFeed} isOpen={isOpen} setIsOpen={setIsOpen} />
      <ActivityFeedCollapse isFilter={isOpen}/>
    </Card>
  )
}

export default ActivityFeedClass