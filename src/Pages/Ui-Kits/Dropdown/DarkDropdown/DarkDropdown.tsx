import { useState } from "react";
import { Card, CardBody, Col, Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from "reactstrap";
import { DarkDropdowns, DarkNight, Darkmoon, Darkowl, Nightfall } from "../../../../utils/Constant";
import CommonHeader from "../../../../Common/CommonHeader";

const DarkDropdown = () => {
  const [open, setOpen] = useState(false);
  const toggle = () => {
    setOpen(!open);
  };
  const submenuObj = [
    {
      code: ".dropdown-menu-dark ",
    },
    {
      text: "class through make dark mode.",
    },
  ];
  return (
    <Col xl={4} sm={6}>
      <Card className="height-equal">
        <CommonHeader title={DarkDropdowns} subTitle={submenuObj} headClass="pb-0" />
        <CardBody className="dropdown-basic m-0 rtl-dropdown">
          <div className="common-flex dark-dropdown">
            <Dropdown isOpen={open} toggle={toggle} direction="down">
              <DropdownToggle color="dark">{DarkNight}</DropdownToggle>
              <DropdownMenu className="dropdown-menu-dark dropdown-menu-dark">
                <DropdownItem className="bg-light-dark text-light">
                  {Darkmoon}
                </DropdownItem>
                <DropdownItem>{Darkowl}</DropdownItem>
                <DropdownItem>{Nightfall}</DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default DarkDropdown;
