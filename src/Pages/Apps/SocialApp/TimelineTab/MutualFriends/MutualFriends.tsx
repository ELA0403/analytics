import { useState } from 'react'
import { Card } from 'reactstrap';
import HeaderWithIcon from '../../../../../CommonElements/SocialApp/HeaderWithIcon';
import { MutualFriend } from '../../../../../utils/Constant';
import MutualFriendsCollapase from './MutualFriendsCollapase';

const MutualFriends = () => {
    const [isOpen, setIsOpen] = useState(true);
  return (
    <Card>
      <HeaderWithIcon Heading={MutualFriend} isOpen={isOpen} setIsOpen={setIsOpen}/>
      <MutualFriendsCollapase isFilter={isOpen} />
    </Card>
  )
}

export default MutualFriends