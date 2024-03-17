import { Container, Row } from 'reactstrap'
import Breadcrumbs from '../../../../CommonElements/Breadcrumbs/Breadcrumbs'
import { APIDataTable, DataTables } from '../../../../utils/Constant'
import AddRows from './AddRows/AddRows'
import ChildRows from './ChildRows/ChildRows'
import RowSelectionAndDeletion from './RowSelectionAndDeletion/RowSelectionAndDeletion'
import CustomFiltering from './CustomFiltering/CustomFiltering'

const APIDataTables = () => {
  return (
    <>
        <Breadcrumbs title={APIDataTable} mainTitle={APIDataTable} parent={DataTables}/>
        <Container fluid>
            <Row>
                <AddRows />
                <ChildRows />
                <RowSelectionAndDeletion />
                <CustomFiltering />
            </Row>
        </Container>
    </>
  )
}

export default APIDataTables