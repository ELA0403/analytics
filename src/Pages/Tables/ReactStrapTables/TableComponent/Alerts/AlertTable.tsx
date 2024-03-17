import { Alert, Table } from 'reactstrap'
import { alertTableData } from '../../../../../Data/Tables/ReactStrapTablesData/TableComponentData'
import { P } from '../../../../../AbstractElements'
import DismissibleAlert from './DismissibleAlert'

const AlertTable = () => {
  return (
    <Table bordered>
        <tbody>
            {alertTableData.map((data,index)=>(
                <tr key={index}>
                    <td>{data.title}</td>
                    <td className="w-50">
                        <Alert color={data.color}>
                            <P dangerouslySetInnerHTML={{__html:data.tableColData}}></P>
                        </Alert>
                    </td>
                    <td>
                        <P dangerouslySetInnerHTML={{__html:data.details}}></P>
                    </td>
                </tr>
            ))}
            <DismissibleAlert />
        </tbody>
    </Table>
  )
}

export default AlertTable