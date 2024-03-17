import { Card, Col, Row, Table } from 'reactstrap'
import CommonHeader from '../../../../Common/CommonHeader'
import { StripedRowWithInverseTable } from '../../../../utils/Constant'
import { stripedRowWithInverseTableSpan } from '../../../../Data/Tables/ReactStrapTablesData/ReactStrapTablesData'
import StripInverseClassTableHead from './StripInverseClassTableHead'
import StripInverseClassTableBody from './StripInverseClassTableBody'

const StripeInverseClass = () => {
  return (
    <Col md={12}>
      <Card>
        <CommonHeader title={StripedRowWithInverseTable} />
        <Row className="card-block">
          <Col sm={12} lg={12} xl={12}>
            <div className="table-responsive">
              <Table striped className="table-inverse">
                <StripInverseClassTableHead />
                <StripInverseClassTableBody />
              </Table>
            </div>
          </Col>
        </Row>
      </Card>
    </Col>
  )
}

export default StripeInverseClass