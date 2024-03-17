import { Button, Table } from 'reactstrap'
import { roundButtonsData } from '../../../../../Data/Tables/ReactStrapTablesData/TableComponentData'
import { DefaultButton } from '../../../../../utils/Constant'
import ButtonDropdowns from './ButtonDropdowns'
import BasicButtonGroup from './BasicButtonGroup'
import ButtonsWithIcon from './ButtonsWithIcon'

const UiComponentsTable = () => {
  return (
    <Table bordered>
        <tbody>
            {roundButtonsData.map((data,index)=>(
                <tr key={index}>
                    <td>{data.title}</td>
                    <td className="w-50">
                        <Button color="primary" className={data.class}>{DefaultButton}</Button>
                    </td>
                    <td>
                        <span>{data.details}</span>
                    </td>
                </tr>
            ))}
            <ButtonDropdowns />
            <BasicButtonGroup />
            <ButtonsWithIcon />
        </tbody>
    </Table>
  )
}

export default UiComponentsTable