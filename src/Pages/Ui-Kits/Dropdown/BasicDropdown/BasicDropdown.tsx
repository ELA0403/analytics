import { Fragment } from "react";
import { Card, CardBody, Col } from "reactstrap";
import { BasicDropdowns } from "../../../../utils/Constant";
import { basicDropdownData } from "../../../../Data/Ui-Kits/DropdownData";
import BasicDemo from "./BasicDemo";
import DropdownCommon from "../../../../CommonElements/Ui-kits/DropdownCommon";
import CommonHeader from "../../../../Common/CommonHeader";

const BasicDropdown = () => {
  const submenuObj = [
    {
      text: "When the",
      code: ".show ",
    },
    {
      text: "class starts, dropdown appears. And ",
      code: ".btn-*",
    },
    {
      text: " to change button dark background colors.",
    },
  ];
  return (
    <Col xl={6}>
      <Card>
        <CommonHeader title={BasicDropdowns} subTitle={submenuObj} headClass="pb-0"/>
        <CardBody className="rtl-dropdown">
          <div className="common-flex">
            <BasicDemo />
            {basicDropdownData &&
              basicDropdownData.map((item, index) => (
                <Fragment key={index}>
                  <DropdownCommon item={item} />
                </Fragment>
              ))}
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default BasicDropdown;
