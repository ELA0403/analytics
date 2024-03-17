import { Card, Col, Table } from 'reactstrap'
import CommonHeader from '../../../../../Common/CommonHeader'
import { InverseTable } from '../../../../../utils/Constant'
import { inverseTableSpan } from '../../../../../Data/Tables/ReactStrapTablesData/ReactStrapTablesData'
import InverseTableClassTableHead from './InverseTableClassTableHead'
import InverseTableClassTableBody from './InverseTableClassTableBody'

const InverseTableClass = () => {
  return (
    <Col sm={12}>
      <Card>
        <CommonHeader title={InverseTable} subTitle={inverseTableSpan} />
        <div className="table-responsive">
          <Table className="table-inverse">
            <InverseTableClassTableHead />
            <InverseTableClassTableBody />
          </Table>
        </div>
      </Card>
    </Col>
  )
}

export default InverseTableClass