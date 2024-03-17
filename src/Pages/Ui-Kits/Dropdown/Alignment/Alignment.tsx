import { Fragment } from "react";
import { Card, CardBody, Col } from "reactstrap";
import DropdownCommon from "../../../../CommonElements/Ui-kits/DropdownCommon";
import { Alignments } from "../../../../utils/Constant";
import { alignmentData } from "../../../../Data/Ui-Kits/DropdownData";
import AlignTopDemo from "./AlignTopDemo";
import CommonHeader from "../../../../Common/CommonHeader";

const Alignment = () => {
  const submenuObj = [
    {
      text: "Use the ",
      code: "(dropstart/dropup/dropend)",
    },
    {
      text: " this class through change dropdown directions.",
    },
  ];
  return (
    <Col lg={6}>
      <Card>
        <CommonHeader title={Alignments} subTitle={submenuObj} />
        <CardBody className="rtl-dropdown">
          <div className="common-flex">
            <AlignTopDemo />
            {alignmentData &&
              alignmentData.map((item, index) => (
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

export default Alignment;
