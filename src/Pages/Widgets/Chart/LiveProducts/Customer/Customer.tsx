import { Card, CardBody, CardHeader, Col, Row } from 'reactstrap'
import { H3, LI, P, UL } from '../../../../../AbstractElements'
import { Customers } from '../../../../../utils/Constant'
import { customersData } from '../../../../../Data/Dashboard/CRM/DealOpen'
import CustomerChart from './CustomerChart'

const Customer = () => {
  return (
    <Col xl="6" lg="12">
        <Card className="customer-chart">
            <CardHeader className="pb-0">
                <div className="header-top">
                    <H3 className="m-0">{Customers}</H3>
                </div>
            </CardHeader>
            <CardBody>
                <Row> 
                    <Col xxl="4">
                        <UL className='simple-list'> 
                            {customersData.map((data,index)=>(
                                <LI className="d-flex align-items-center" key={index}>
                                    <div className={`circle-dashed-${data.color}`}>
                                        <span></span>
                                    </div>
                                    <div className="flex-grow-1">
                                        <P>{data.title}</P>
                                        <span>{data.count}</span>
                                    </div>
                                </LI>
                            ))}
                        </UL>
                    </Col>
                    <CustomerChart />
                </Row>
            </CardBody>
        </Card>
    </Col>
  )
}

export default Customer