import { useState } from 'react'
import { BasicDropdownType } from '../../../../Data/Ui-Kits/DropdownData'
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'reactstrap'
type PropsType = {
    item: BasicDropdownType
}
const HelperBody = ({ item }: PropsType) => {
    const [open, setOpen] = useState(false);
    const toggle = () => { setOpen(!open) }
    return (
        <div className='btn-group'>
            <Dropdown isOpen={open} toggle={toggle}>
                <DropdownToggle color={item.class} >{item.text}</DropdownToggle>
                <DropdownMenu className="dropdown-block p-3 dark-form">
                    <DropdownItem header className='fs-6 fw-bold pb-2 ps-0 text-dark border-bottom-1 '>{item.menulist[0]}</DropdownItem>
                    <DropdownItem className='p-0 helper-truncate'>{item.menulist[1]}</DropdownItem>
                </DropdownMenu>
            </Dropdown>
        </div>
    )
}

export default HelperBody