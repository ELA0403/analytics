import { Container, Row } from 'reactstrap'
import Breadcrumbs from '../../../../CommonElements/Breadcrumbs/Breadcrumbs'
import { BasicInitHeading, DataTables } from '../../../../utils/Constant'
import ZeroConfiguration from './ZeroConfiguration/ZeroConfiguration'
import StateSaving from './StateSaving/StateSaving'
import ScrollVerticalDynamicHeight from './ScrollVerticalDynamicHeight/ScrollVerticalDynamicHeight'

const BasicDataTables = () => {
  return (
    <>
        <Breadcrumbs mainTitle={BasicInitHeading} parent={DataTables} title={BasicInitHeading}/>
        <Container fluid>
          <Row>
            <ZeroConfiguration />
            <StateSaving />
            <ScrollVerticalDynamicHeight />
          </Row>
        </Container>
    </>
  )
}

export default BasicDataTables