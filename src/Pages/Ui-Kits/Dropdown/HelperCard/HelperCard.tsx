import { Fragment } from "react";
import { Card, CardBody, Col } from "reactstrap";
import { HelperCards } from "../../../../utils/Constant";
import { helperCardData } from "../../../../Data/Ui-Kits/DropdownData";
import HelperBody from "./HelperBody";
import CommonHeader from "../../../../Common/CommonHeader";

const HelperCard = () => {
  const submenuObj = [
    {
      text: "When the",
      code: ".show ",
    },
    {
      text: "class starts, dropdown appears.",
    },
  ];
  return (
    <Col xl={6}>
      <Card>
        <CommonHeader title={HelperCards} subTitle={submenuObj} headClass="pb-0"/>
        <CardBody className="rtl-dropdown">
          <div className="common-flex">
            {helperCardData &&
              helperCardData.map((item, index) => (
                <Fragment key={index}>
                  <HelperBody item={item} />
                </Fragment>
              ))}
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default HelperCard;
