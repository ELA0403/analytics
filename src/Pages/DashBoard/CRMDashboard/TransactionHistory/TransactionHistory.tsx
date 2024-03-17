import { Card, CardBody, CardHeader, Col, Table } from 'reactstrap'
import { TransactionHistorys } from '../../../../utils/Constant'
import { transactionHistoryHeader } from '../../../../Data/Dashboard/CRM/TransactionHistory'
import TransactionHistoryBody from './TransactionHistoryBody'
import { H3 } from '../../../../AbstractElements'

const TransactionHistory = () => {
  return (
    <Col xl="12">
      <Card>
        <CardHeader>
          <H3>{TransactionHistorys}</H3>
        </CardHeader>
        <CardBody className="pt-0 transaction"> 
          <div className="table-responsive theme-scrollbar">
            <Table className="display" id="transaction-history">
              <thead>
                <tr>
                  {transactionHistoryHeader.map((data,i)=>(
                    <th key={i}>{data}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <TransactionHistoryBody />
              </tbody>
            </Table>
          </div>
        </CardBody>
      </Card>
    </Col>
  )
}

export default TransactionHistory