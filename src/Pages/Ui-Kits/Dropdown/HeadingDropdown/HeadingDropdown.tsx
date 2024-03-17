import { useState } from "react";
import { Card, CardBody, Col, Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from "reactstrap";
import { Balloons, Cake, HeadingDropdowns, Href, Party, PartyList } from "../../../../utils/Constant";
import CommonHeader from "../../../../Common/CommonHeader";

const HeadingDropdown = () => {
  const [open, setOpen] = useState(false);
  const toggle = () => {
    setOpen(!open);
  };
  const submenuObj = [
    {
      text: "Main heading and any sub-content in dropdown.",
    },
  ];
  return (
    <Col xl={4} sm={6}>
      <Card className="height-equal">
        <CommonHeader title={HeadingDropdowns} subTitle={submenuObj} headClass="pb-0" />
        <CardBody className="rtl-dropdown">
          <div className="common-flex">
            <div className="btn-group">
              <Dropdown isOpen={open} toggle={toggle} direction="down">
                <DropdownToggle color="success rounded-pill">
                  {Party}
                </DropdownToggle>
                <DropdownMenu className="dropdown-content">
                  <DropdownItem
                    href={Href}
                    header
                    className="fw-bold fs-6 border-bottom border-2"
                  >
                    {PartyList}
                  </DropdownItem>
                  <DropdownItem href={Href}>{Balloons}</DropdownItem>
                  <DropdownItem href={Href}>{Cake}</DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </div>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default HeadingDropdown;
