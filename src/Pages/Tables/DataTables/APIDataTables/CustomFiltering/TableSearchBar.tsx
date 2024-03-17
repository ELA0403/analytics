import { Input, Table } from 'reactstrap'
import { MaximumAge, MinimumAge } from '../../../../../utils/Constant'
import { ChangeEvent, useState } from 'react';
import { filterDataTableData } from '../../../../../Data/Tables/DataTables/APITablesData';
const TableSearchBar = ({setFirst}:any) => {
  const [value, setValue] = useState({ minValue: 0, maxValue: 100 });
  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue({ ...value, [event.target.name]: event.target.value });
    const filteredDatas = filterDataTableData.filter(item => {
      const age = Number(item.age);
      const { maxValue, minValue } = value;
      return age >= Number(minValue) && age <= Number(maxValue);
    });
    setFirst(filteredDatas);
  
  };
  return (
    <div className="table-responsive dataTables_wrapper me-0">
      <Table>
        <tbody className="dataTables_filter">
          <tr>
            <td>{MinimumAge}</td>
            <td>
              <Input onChange={onChange}  type="search" name="minValue" />
            </td>
          </tr>
          <tr>
            <td>{MaximumAge}</td>
            <td>
              <Input onChange={onChange}  type="search" name="maxValue" />
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  )
}

export default TableSearchBar