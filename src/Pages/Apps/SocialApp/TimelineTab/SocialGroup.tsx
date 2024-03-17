import { UncontrolledTooltip } from 'reactstrap'
import { Image, LI, UL } from '../../../../AbstractElements'
import { socialGroupData } from '../../../../Data/Apps/SocialApp/SocialAppData'
import { dynamicImage } from '../../../../Service'

const SocialGroup = () => {
  return (
    <UL className="justify-content-center simple-list flex-row">
      {socialGroupData.map((data, index) => (
        <LI className="d-inline-block" key={index}>
          <Image
            width={30}
            height={30}
            className="img-30 rounded-circle"
            src={dynamicImage(`user/${data.imageName}`)}
            alt="Img"
            id={`UncontrolledTooltipExample-${index}`}
          />
          <UncontrolledTooltip placement="top" target={`UncontrolledTooltipExample-${index}`}>
            {data.userName}
          </UncontrolledTooltip>
        </LI>
      ))}
    </UL>
  )
}

export default SocialGroup