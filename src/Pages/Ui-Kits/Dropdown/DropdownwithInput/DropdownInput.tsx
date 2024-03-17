import { useState } from 'react'
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle, Input } from 'reactstrap';
import { Defaultcheckbox, Defaultradio, Inputs } from '../../../../utils/Constant';

const DropdownInput = () => {
    const [open, setOpen] = useState(false);
    const toggle = () => { setOpen(!open) }
    return (
        <Dropdown isOpen={open} toggle={toggle} direction='down'>
            <DropdownToggle color='warning'>{Inputs}</DropdownToggle>
            <DropdownMenu className="dropdown-content">
                <DropdownItem className='p-0'>
                    <div className="input-group rounded-0 border-0 shadow-none">
                        <div className="input-group-text p-0">
                            <Input className="form-check-input m-2" type="checkbox" />
                            <span>{Defaultcheckbox}</span>
                        </div>
                    </div>
                    <div className="input-group rounded-0 border-0 shadow-none d-flex">
                        <div className="input-group-text p-0">
                            <Input className="form-check-input m-2" type="radio" />
                            <span>{Defaultradio}</span>
                        </div>
                    </div>
                </DropdownItem>
            </DropdownMenu>
        </Dropdown>
    )
}

export default DropdownInput