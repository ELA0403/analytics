import { Button, Col, Row } from 'reactstrap'
import { Add, Cancel } from '../../../../utils/Constant'
import { Link } from 'react-router-dom'

const ButtonSection = () => {
  return (
    <Row>
      <Col>
        <div className="text-end">
          <Button type="submit" color="success" className="me-3">{Add}</Button>
          <Link to={`${process.env.PUBLIC_URL}/apps/project/projectlist`}>
            <Button color="danger">{Cancel}</Button>
          </Link>
        </div>
      </Col>
    </Row>
  )
}

export default ButtonSection