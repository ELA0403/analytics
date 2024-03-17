import { Fragment } from "react";
import { Card, CardBody, Col } from "reactstrap";
import DropdownCommon from "../../../../CommonElements/Ui-kits/DropdownCommon";
import { roundedDropdownData } from "../../../../Data/Ui-Kits/DropdownData";
import RoundedDemo from "./RoundedDemo";
import { RoundedDropdowns } from "../../../../utils/Constant";
import CommonHeader from "../../../../Common/CommonHeader";

const RoundedDropdown = () => {
  const submenuObj = [
    {
      text: "When the",
      code: ".show ",
    },
    {
      text: "class starts, dropdown appears. And ",
      code: ".rounded-pill",
    },
    {
      text: " to change rounded dropdowns.",
    },
  ];
  return (
    <Col xl={6}>
      <Card className="height-equal">
        <CommonHeader title={RoundedDropdowns} subTitle={submenuObj} headClass="pb-0"/>
        <CardBody className="rtl-dropdown">
          <div className="common-flex">
            <div className="btn-group">
              <RoundedDemo />
            </div>
            {roundedDropdownData &&
              roundedDropdownData.map((item, index) => (
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

export default RoundedDropdown;
