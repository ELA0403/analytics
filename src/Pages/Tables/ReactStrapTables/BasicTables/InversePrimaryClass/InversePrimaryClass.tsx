import { Card, Col, Table } from 'reactstrap'
import CommonHeader from '../../../../../Common/CommonHeader'
import { inverseTableSpan } from '../../../../../Data/Tables/ReactStrapTablesData/ReactStrapTablesData'
import { InverseTablePrimaryBackground } from '../../../../../utils/Constant'
import InversTableClassTableHead from './InversTableClassTableHead'
import InversTableClassTableBody from './InversTableClassTableBody'

const InversePrimaryClass = () => {
  return (
    <Col sm={12}>
      <Card>
        <CommonHeader title={InverseTablePrimaryBackground} subTitle={inverseTableSpan}/>
        <div className="table-responsive">
          <Table striped className="bg-primary">
            <InversTableClassTableHead />
            <InversTableClassTableBody />
          </Table>
        </div>
      </Card>
    </Col>
  )
}

export default InversePrimaryClass