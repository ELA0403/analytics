import { Card, CardBody, CardHeader, Table } from 'reactstrap'
import { AssignPropsType } from '../../../../Types/Apps/Tasks/TasksTypes'
import { H3, P } from '../../../../AbstractElements'
import { Link } from 'react-router-dom'
import { Href, Print } from '../../../../utils/Constant'
import { Link2, MoreHorizontal, Printer, Trash2 } from 'react-feather'
import { useAppSelector } from '../../../../ReaduxToolkit/Hooks'

const AssignedToMeClass = ({ title }:AssignPropsType) => {
  const {allTasks} = useAppSelector((state)=>state.tasks)
  return (
    <Card className="mb-0">
        <CardHeader className="d-flex">
          <H3 className='mb-0 f-w-600' >{title}</H3>
          <Link to={Href}>
            <Printer className="me-2" />{Print}
          </Link>
        </CardHeader>
        <CardBody className="p-0">
          <div className="taskadd">
            <div className="table-responsive">
              <Table>
                <tbody>
                  { allTasks.map((data, id) =>(
                        <tr key={id}>
                          <td>
                            <H3 className= 'task_title_0'>{data.title}</H3>
                            <P  className= 'project_name_0'>{data.collection}</P>
                          </td>
                          <td>
                            <P className= 'task_desc_0'  >{data.description}</P>
                          </td>
                          <td>
                            <Link className="me-2" to={Href}><Link2 /></Link>
                            <Link to={Href}><MoreHorizontal /></Link>
                          </td>
                          <td>
                            <Link to={Href}>
                              <Trash2 />
                            </Link>
                          </td>
                        </tr>
                      )
                    )
                  }
                </tbody>
              </Table>
            </div>
          </div>
        </CardBody>
      </Card>
  )
}

export default AssignedToMeClass