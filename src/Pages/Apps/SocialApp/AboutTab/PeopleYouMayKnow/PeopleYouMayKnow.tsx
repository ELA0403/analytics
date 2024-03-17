import { Button, Card, CardBody, Col } from 'reactstrap'
import { AboutPropsType } from '../../../../../Types/Apps/SocialApp/SocialApp'
import { Image, LI, UL } from '../../../../../AbstractElements'
import { dynamicImage } from '../../../../../Service'
import { AddFriend } from '../../../../../utils/Constant'
import CommonHeader from '../../../../../Common/CommonHeader'
import { peopleYouMayKnowData } from '../../../../../Data/Apps/SocialApp/SocialAppData'

const PeopleYouMayKnow = ({Heading}:AboutPropsType) => {
  return (
    <Col sm={12}>
      <Card>
        <CommonHeader title={Heading} />
        <CardBody className="avatar-showcase">
          <div className="pepole-knows">
            <UL className="flex-wrap simple-list flex-row">
              {peopleYouMayKnowData.map((data, index) => (
                <LI key={index}>
                  <div className="add-friend text-center">
                    <Image width={60} height={60} className="img-60 img-fluid rounded-circle" alt="user" src={dynamicImage(data.peopleImageName)}/>
                    <span className="d-block f-w-600">{data.peopleName}</span>
                    <Button color="primary" size="xs">{AddFriend}</Button>
                  </div>
                </LI>
              ))}
            </UL>
          </div>
        </CardBody>
      </Card>
    </Col>
  )
}

export default PeopleYouMayKnow