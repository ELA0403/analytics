import { Card, Col, Row } from 'reactstrap'
import EmailTop from '../EmailApp/EmailApplicationContain/EmailTop'
import ReadEmailList from '../EmailApp/EmailApplicationContain/ReadEmailList'
import EmailComposeHeader from './EmailComposeHeader'

const EmailComposeContain = () => {
  return (
    <div className="email-right-aside">
      <Card className="email-body">
        <Row>
          <Col xl={4} md={12} className="box-md-12 pr-0">
            <div className="pe-0"></div>
            <EmailTop />
            <ReadEmailList />
          </Col>
          <Col xl={8} md={12} className="box-md-12 pr-0">
            <EmailComposeHeader />
          </Col>
        </Row>
      </Card>
    </div>
  )
}

export default EmailComposeContain