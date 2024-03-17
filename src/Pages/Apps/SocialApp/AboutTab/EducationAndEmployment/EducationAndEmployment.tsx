import { Card, CardBody, CardHeader, Col, Row } from 'reactstrap'
import { H3, P } from '../../../../../AbstractElements'
import { MoreVertical } from 'react-feather'
import { educationAndEmploymentData } from '../../../../../Data/Apps/SocialApp/SocialAppData'
import { EducationAndEmploymentHeading } from '../../../../../utils/Constant'

const EducationAndEmployment = () => {
  return (
    <Col sm={12}>
      <Card>
        <CardHeader className="social-header pb-0">
          <H3>
            <span>{EducationAndEmploymentHeading}</span>
            <span className="pull-right"><MoreVertical /></span>
          </H3>
        </CardHeader>
        <CardBody>
          {educationAndEmploymentData.map((data, index) => (
            <Row className="details-about" key={index}>
              <Col sm={6}>
                <div className="your-details">
                  <span className="f-w-600">{data.heading1}</span>
                  <P>{data.date1}</P>
                  <P>{data.paragraph2}</P>
                </div>
              </Col>
              <Col sm={6}>
                <div className="your-details your-details-xs">
                  <span className="f-w-600">{data.heading2}</span>
                  <P>{data.date2}</P>
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

export default EducationAndEmployment