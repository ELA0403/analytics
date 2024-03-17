import { Button, Col, Row } from 'reactstrap'
import { H2, Image } from '../../../../../AbstractElements'
import { dynamicImage } from '../../../../../Service'
import { EndCall } from '../../../../../utils/Constant'
import CallIcons from './CallIcons'

const ChatHistory = () => {
  return (
    <Row>
      <Col className="text-center pe-0 call-content">
        <div>
          <div className="total-time">
            <H2 className="digits">36 : 56</H2>
          </div>
          <CallIcons />
          <Button size="lg" className="btn-danger-gradien btn-lg">
            {EndCall}
          </Button>
          <div className="receiver-img">
            <Image
              src={dynamicImage("other-images/receiver-img.jpg")}
              alt="receiver-img"
            />
          </div>
        </div>
      </Col>
      <Col sm="7" className="ps-0 caller-img">
        <Image className="img-fluid" src={dynamicImage("other-images/caller.jpg")} alt="caller"/>
      </Col>
    </Row>
  )
}

export default ChatHistory