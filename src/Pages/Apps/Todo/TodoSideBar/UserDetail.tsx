import { H3, Image, P } from '../../../../AbstractElements'
import { dynamicImage } from '../../../../Service'

const UserDetail = () => {
  return (
    <>
      <div className="d-flex align-items-center">
        <div className="media-size-email">
          <Image
            width={40}
            height={40}
            className="me-3 img-40 rounded-circle"
            src={dynamicImage('user/user.png')}
            alt="image"
          />
        </div>
        <div className="flex-grow-1">
          <H3 className="f-w-600">{'Mark Jecno'}</H3>
          <P>{'Markjecno@gmail.com'}</P>
        </div>
      </div>
    </>
  )
}

export default UserDetail