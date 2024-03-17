import { Fragment } from "react";
import { Card, CardBody, Col, Row } from "reactstrap";
import CommonHeader from "../../../../Common/CommonHeader";
import CommonRibbons from "../../../../CommonElements/BonusUi/CommonRibbons";
import { leftSideData } from "../../../../Data/BonusUi/RibbonsData";
import { VariationsOfLeftRibbons } from "../../../../utils/Constant";

const LeftSideRibbons = () => {
  const subMenu = [
    {
      text: "Use the class of ",
      code: ".ribbon-*",
    },
    {
      text: "[ribbon-space-bottom/ribbon-clip/ribbon-vertical-left/ribbon-bookmark/ribbon-clip-bottom/ribbon-vertical-left] through create ribbons and all ribbon colors are available.",
      code: "[.ribbon-*] ",
    },
  ];
  return (
    <Col sm={12} xl={12}>
      <Card>
        <CommonHeader title={VariationsOfLeftRibbons} subTitle={subMenu} headClass="pb-0"/>
        <CardBody>
          <Row className="g-3">
            {leftSideData &&
              leftSideData.map((item, index) => (
                <Fragment key={index}>
                  <CommonRibbons
                    classMain={item.classMain}
                    ribbonClass={item.ribbonClass}
                    ribbonText={item.ribbonText}
                    subText={item.subText}
                  />
                </Fragment>
              ))}
          </Row>
        </CardBody>
      </Card>
    </Col>
  );
};

export default LeftSideRibbons;
