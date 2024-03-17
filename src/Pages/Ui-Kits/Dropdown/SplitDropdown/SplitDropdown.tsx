import { Fragment, useState } from "react";
import { Button, Card, CardBody, Col, DropdownItem, DropdownMenu, DropdownToggle, UncontrolledDropdown } from "reactstrap";
import { Chart, General, SplitDropdowns, Widgets } from "../../../../utils/Constant";
import { splitDropdownData } from "../../../../Data/Ui-Kits/DropdownData";
import CommonUncontroll from "./CommonUncontroll";
import CommonHeader from "../../../../Common/CommonHeader";

const SplitDropdown = () => {
  const [open, setOpen] = useState(false);
  const toggle = () => {
    setOpen(!open);
  };
  const submenuObj = [
    {
      text: "When the",
      code: ".show ",
    },
    {
      text: "class starts, dropdown appears. And split the dropdown ",
      code: ".dropdown-toggle-split",
    },
  ];
  return (
    <Col sm={12} xl={12}>
      <Card>
        <CommonHeader title={SplitDropdowns} subTitle={submenuObj} headClass="pb-0" />
        <CardBody className="dropdown-basic me-0">
          <div className="common-flex">
            <div className="btn-group">
              <Button color="outline-primary">{Widgets}</Button>
              <UncontrolledDropdown
                className="separated-btn"
                isOpen={open}
                toggle={toggle}
                direction="down"
              >
                <DropdownToggle color="primary">
                  <i className="icofont icofont-arrow-down"></i>
                </DropdownToggle>
                <DropdownMenu className="dropdown-content">
                  <DropdownItem href="#">{General}</DropdownItem>
                  <DropdownItem href="#">{Chart}</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </div>
            {splitDropdownData &&
              splitDropdownData.map((item, index) => (
                <Fragment key={index}>
                  <CommonUncontroll item={item} />
                </Fragment>
              ))}
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default SplitDropdown;
