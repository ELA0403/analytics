import { Card, CardBody, Col } from "reactstrap";
import { WithInputType } from "../../../../utils/Constant";
import DropdownInput from "./DropdownInput";
import CommonHeader from "../../../../Common/CommonHeader";

const DropdownwithInput = () => {
  const submenuObj = [
    {
      text: "Use the checkbox using dropdown.",
      code: "(type='checkbox'/'radio').",
    },
  ];
  return (
    <Col xl={4} sm={6}>
      <Card className="height-equal">
        <CommonHeader title={WithInputType} subTitle={submenuObj} headClass="pb-0"/>
        <CardBody>
          <div className="common-flex">
            <div className="btn-group">
              <DropdownInput />
            </div>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default DropdownwithInput;
