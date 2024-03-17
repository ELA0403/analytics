import { useState } from "react";
import { Dropdown, DropdownMenu, DropdownToggle } from "reactstrap";
import { Text } from "../../../../utils/Constant";
import { P } from "../../../../AbstractElements";

const DropdownText = () => {
    const [open, setOpen] = useState(false);
    const toggle = () => { setOpen(!open) }
  return (
    <div className="btn-group">
      <Dropdown isOpen={open} toggle={toggle} direction="down">
        <DropdownToggle color="dark">{Text}</DropdownToggle>
        <DropdownMenu className="dropdown-content">
          <div className="p-4 text-muted form-wrapper">
            <P>{"Some example text that's free-flowing within the dropdown menu."}</P>
            <P className="mb-0">{"And this is more example text. "}</P>
          </div>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
};

export default DropdownText;
