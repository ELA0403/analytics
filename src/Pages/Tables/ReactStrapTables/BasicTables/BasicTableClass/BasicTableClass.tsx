import { Card, Col, Table } from 'reactstrap'
import CommonHeader from '../../../../../Common/CommonHeader'
import { BasicTableWithBorderBottomColor } from '../../../../../utils/Constant'
import { basicTablesSubTitle } from '../../../../../Data/Tables/ReactStrapTablesData/ReactStrapTablesData'
import BasicTableClassTableHead from './BasicTableClassTableHead'
import BasicTableClassTableBody from './BasicTableClassTableBody'

const BasicTableClass = () => {
  return (
    <Col sm={12}>
      <Card>
        <CommonHeader title={BasicTableWithBorderBottomColor} subTitle={basicTablesSubTitle}/>
        <div className="table-responsive">
          <Table>
            <BasicTableClassTableHead />
            <BasicTableClassTableBody />
          </Table>
        </div>
      </Card>
    </Col>
  )
}

export default BasicTableClass