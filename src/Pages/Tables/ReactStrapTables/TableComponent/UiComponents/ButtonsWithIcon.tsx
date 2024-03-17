import { Button } from 'reactstrap'
import { buttonsWithIconData } from '../../../../../Data/Tables/ReactStrapTablesData/TableComponentData'

const ButtonsWithIcon = () => {
  return (
    <>
        {buttonsWithIconData.map((data,index)=>(
            <tr key={index}>
                <td>{data.title}</td>
                <td>
                    <Button color="primary">
                        <i className={`fa fa-${data.icon}`}></i> {data.header}
                    </Button>
                </td>
                <td>
                    <span>{data.details}</span>
                </td>
            </tr>
        ))}
    </>
  )
}

export default ButtonsWithIcon