import { Card, CardBody, CardHeader, Col } from 'reactstrap'
import { TopCustomers } from '../../../../utils/Constant'
import { H3 } from '../../../../AbstractElements'
import TopCustomerBody from './TopCustomerBody'

const TopCustomer = () => {
  return (
    <Col xl="4" lg="6" sm="12" className="box-col-4">
      <Card className="top-customer">
        <CardHeader className="pb-0">
          <div className="header-top">
            <H3 className="m-0">{TopCustomers}</H3>
          </div>
        </CardHeader>
        <CardBody>
          <TopCustomerBody />
        </CardBody>
      </Card>
    </Col>
  )
}

export default TopCustomer