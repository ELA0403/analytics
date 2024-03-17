import { Badge } from 'reactstrap'
import { Image } from '../../../../../AbstractElements'
import { basicTableData } from '../../../../../Data/Tables/ReactStrapTablesData/ReactStrapTablesData'
import { dynamicImage } from '../../../../../Service'

const BasicTableClassTableBody = () => {
  return (
    <tbody>
      {basicTableData.map((item) => (
        <tr key={item.id} className={item.borderColor}>
          <td>{item.id}</td>
          <td>
            <Image width={30} height={30} className="img-30 me-2" src={dynamicImage(`user/${item.img}`)} alt="imagese"/>
            {item.firstName}
          </td>
          <td>{item.lastName}</td>
          <td>{item.userName}</td>
          <td>{item.role}</td>
          <td>{item.company}</td>
          <td>
            <Badge  color={`light-${item.badgeColor}`}  className={`${item.badgeClass}`}>{item.language}</Badge>
          </td>
          <td>{item.country}</td>
        </tr>
      ))}
    </tbody>
  )
}

export default BasicTableClassTableBody