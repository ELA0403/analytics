import { useLocation } from 'react-router-dom';
import { Image } from '../../../../AbstractElements'
import { useAppSelector } from '../../../../ReaduxToolkit/Hooks';
import { dynamicImage } from '../../../../Service'
import IconsMenuList from '../VideoChat/VideoCallPage/IconsMenuList'

const ChatHeader = () => {
  const { selectedUser } = useAppSelector((state) => state.chatData);
  const location = useLocation();
  return (
    <div className="chat-header clearfix">
      <Image className="rounded-circle" src={dynamicImage(selectedUser?.thumb ? selectedUser?.thumb : "user/1.jpg")}alt="user"/>
      <div className="about">
        <div className="name">
          {selectedUser ? selectedUser.name : "Vincent Porter"}
          {location.state ? (<span className="font-primary f-12"> {"Typing..."}</span>) : ("")}
        </div>
        <div className="status digits">
          {selectedUser ? selectedUser.lastSeenDate : "5 May, 5:30 PM"}
        </div>
      </div>
      <IconsMenuList />
    </div>
  )
}

export default ChatHeader