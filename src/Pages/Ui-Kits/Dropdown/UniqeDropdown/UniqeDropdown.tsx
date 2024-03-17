import { Card, CardBody, Col } from "reactstrap";
import { UniqueDropdowns } from "../../../../utils/Constant";
import DropdownForm from "./DropdownForm";
import DropdownText from "./DropdownText";
import CommonHeader from "../../../../Common/CommonHeader";

const UniqeDropdown = () => {
  const submenuObj = [
    {
      text: "Unique way to represent form dropdown and text dropdown.",
    },
  ];
  return (
    <Col sm={6}>
      <Card>
        <CommonHeader title={UniqueDropdowns} subTitle={submenuObj} headClass="pb-0"/>
        <CardBody className="rtl-dropdown">
          <div className="common-flex">
            <DropdownForm />
            <DropdownText />
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default UniqeDropdown;
