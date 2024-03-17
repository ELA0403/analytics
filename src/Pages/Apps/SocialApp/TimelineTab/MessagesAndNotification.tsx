import { Badge } from 'reactstrap'
import { H3 } from '../../../../AbstractElements'
import { Messages, MyPage, Notification } from '../../../../utils/Constant'

const MessagesAndNotification = () => {
  return (
    <div className='flex-grow-1'>
      <H3 className="font-primary f-w-600">{MyPage}</H3>
      <span className="d-block">
        <span>
          <i className="fa fa-comments-o"> </i>
          <span className="px-2">
            {Messages} <Badge pill color="light">9</Badge>
          </span>
        </span>
      </span>
      <span className="d-block">
        <span>
          <i className="fa fa-bell-o"> </i>
          <span className="px-2">
            {Notification} <Badge pill color="light">9</Badge>
          </span>
        </span>
      </span>
    </div>
  )
}

export default MessagesAndNotification