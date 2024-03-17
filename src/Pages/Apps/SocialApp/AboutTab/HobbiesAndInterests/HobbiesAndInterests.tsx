import { Card, CardBody, CardHeader, Col, Row } from 'reactstrap'
import { H3, P } from '../../../../../AbstractElements'
import { MoreVertical } from 'react-feather'
import { HobbiesAndInterest } from '../../../../../utils/Constant'
import { hobbiesAndInterestsData } from '../../../../../Data/Apps/SocialApp/SocialAppData'

const HobbiesAndInterests = () => {
  return (
    <Col sm={12}>
      <Card>
        <CardHeader className="social-header pb-0">
          <H3>
            <span>{HobbiesAndInterest}</span>
            <span className="pull-right"><MoreVertical /></span>
          </H3>
        </CardHeader>
        <CardBody>
          {hobbiesAndInterestsData.map((data, index) => (
            <Row className="details-about" key={index}>
              <Col sm={6}>
                <div className="your-details">
                  <span className="f-w-600">{data.heading1}:</span>
                  <P>{data.paragraph1}</P>
                </div>
              </Col>
              <Col sm={6}>
                <div className="your-details your-details-xs">
                  <span className="f-w-600">{data.heading2}</span>
                  <P>{data.paragraph2}</P>
                </div>
              </Col>
            </Row>
          ))}
        </CardBody>
      </Card>
    </Col>
  )
}

export default HobbiesAndInterests