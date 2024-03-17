import { CardBody, Collapse } from 'reactstrap'
import { FilterPropsType } from '../../../../../../Types/Apps/SocialApp/SocialApp'
import { numbers } from '../../../../../../Data/Apps/SocialApp/SocialAppData'
import { Image, LI, UL } from '../../../../../../AbstractElements'
import { dynamicImage } from '../../../../../../Service'

const LatestPhotosCollapse = ({ isFilter }: FilterPropsType) => {
  return (
    <Collapse isOpen={isFilter}>
      <CardBody className="avatar-showcase filter-cards-view">
        <UL className="text-center simple-list flex-row">
          {numbers.map((data, index) => (
            <LI key={index}>
              <div className="latest-post">
                <Image
                  className="img-fluid"
                  alt="user"
                  src={dynamicImage(`social-app/post-${data}.png`)}
                />
              </div>
            </LI>
          ))}
        </UL>
      </CardBody>
    </Collapse>
  )
}

export default LatestPhotosCollapse