import { Card, CardBody, Col } from "reactstrap";
import { DropdownSizings } from "../../../../utils/Constant";
import LargeDropdown from "./LargeDropdown";
import SmallDropdown from "./SmallDropdown";
import CommonHeader from "../../../../Common/CommonHeader";

const DropdownSize = () => {
  const submenuObj = [
    {
      text: "When the",
      code: ".show ",
    },
    {
      text: "class starts, dropdown appears. And",
      code: "[.btn-lg/.btn-sm]",
    },
    {
      text: "class through button size changed.",
    },
  ];
  return (
    <Col md={6}>
      <Card>
        <CommonHeader title={DropdownSizings} subTitle={submenuObj} headClass="pb-0"/>
        <CardBody className="rtl-dropdown">
          <div className="common-flex">
            <LargeDropdown />
            <SmallDropdown />
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default DropdownSize;
