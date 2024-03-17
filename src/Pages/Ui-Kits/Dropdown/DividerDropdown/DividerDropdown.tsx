import { Fragment } from "react";
import { Card, CardBody, Col } from "reactstrap";
import { DividerDropdowns } from "../../../../utils/Constant";
import { dividerCommonData } from "../../../../Data/Ui-Kits/DropdownData";
import DividerBody from "./DividerBody";
import CommonHeader from "../../../../Common/CommonHeader";

const DividerDropdown = () => {
  const submenuObj = [
    {
      text: "When the",
      code: ".show ",
    },
    {
      text: "class starts, dropdown appears. And",
      code: ".dropdown-divider",
    },
    {
      text: " to change dropdown section.",
    },
  ];
  return (
    <Col md={6}>
      <Card>
        <CommonHeader title={DividerDropdowns} subTitle={submenuObj} headClass="pb-0"/>
        <CardBody className="rtl-dropdown">
          <div className="common-flex">
            {dividerCommonData &&
              dividerCommonData.map((item, index) => (
                <Fragment key={index}>
                  <DividerBody item={item} />
                </Fragment>
              ))}
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default DividerDropdown;
