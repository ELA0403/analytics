import { Fragment } from "react";
import { Card, CardBody, Col } from "reactstrap";
import DropdownCommon from "../../../../CommonElements/Ui-kits/DropdownCommon";
import { JustifyContents } from "../../../../utils/Constant";
import { justifyData } from "../../../../Data/Ui-Kits/DropdownData";
import TextLeftDemo from "./TextLeftDemo";
import CommonHeader from "../../../../Common/CommonHeader";

const JustifyContent = () => {
  const submenuObj = [
    {
      text: "Use the ",
      code: "(text-start/text-center/text-end)",
    },
    {
      text: " to change dropdown texts.",
    },
  ];
  return (
    <Col lg={6}>
      <Card>
        <CommonHeader title={JustifyContents} subTitle={submenuObj} />
        <CardBody className="dropdown-basic m-0">
          <div className="common-flex">
            <TextLeftDemo />
            {justifyData &&
              justifyData.map((item, index) => (
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

export default JustifyContent;
