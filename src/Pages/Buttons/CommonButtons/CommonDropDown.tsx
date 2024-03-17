import { commonDropDownPropsType } from '../ButtonGroup/ButtonsType'
import { DropdownItem, DropdownMenu, DropdownToggle, UncontrolledDropdown } from 'reactstrap'
import { AnotherAction, Dropdown } from '../../../utils/Constant'

const CommonDropDown = ({color,className}:commonDropDownPropsType) => {
  return (
    <UncontrolledDropdown>
      <DropdownToggle color={color} caret className={className ?className:""}>
        {Dropdown}
      </DropdownToggle>
      <DropdownMenu>
        <DropdownItem>{AnotherAction}</DropdownItem>
        <DropdownItem>{AnotherAction}</DropdownItem>
      </DropdownMenu>
    </UncontrolledDropdown>
  )
}

export default CommonDropDown