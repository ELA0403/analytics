import { MoreVertical } from 'react-feather'
import { H3, Image, P } from '../../../../../AbstractElements'
import { dynamicImage } from '../../../../../Service'
import { TimelineDataType } from '../../../../../Types/Apps/SocialApp/SocialApp'

const NewUsersSocial = ({data} : TimelineDataType) => {
  return (
    <div className="new-users-social">
      <div className='d-flex'>
        <Image
          width={58}
          height={58}
          className="rounded-circle image-radius m-r-15"
          src={dynamicImage("user/1.jpg")}
          alt="user121"
        />
        <div className='flex-grow-1'>
          <H3 className="mb-0 f-w-700">{data.name}</H3>
          <P>{data.date}</P>
        </div>
        <span className="pull-right mt-0">
          <MoreVertical />
        </span>
      </div>
    </div>
  )
}

export default NewUsersSocial