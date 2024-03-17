import { Fragment } from "react";
import { Card, CardBody, Col, Row } from "reactstrap";
import CommonHeader from "../../../../Common/CommonHeader";
import { VariationsOfRightRibbons } from "../../../../utils/Constant";
import { rightSideData } from "../../../../Data/BonusUi/RibbonsData";
import CommonRibbons from "../../../../CommonElements/BonusUi/CommonRibbons";

const RightSideRibbon = () => {
  const subMenu = [
    {
      text: "Use the class of ",
      code: ".ribbon-*",
    },
    {
      text: "[ribbon-right/ribbon-clip-right/ribbon-vertical-right/ribbon-bookmark/ribbon-clip-bottom-right/ribbon-vertical-right] through create ribbons and all ribbon colors are available.",
      code: "[.ribbon-*]",
    },
  ];
  return (
    <Row>
      <Col sm={12} xl={12}>
        <Card>
          <CommonHeader title={VariationsOfRightRibbons} subTitle={subMenu} headClass="pb-0" />
          <CardBody>
            <Row className="g-3">
              {rightSideData &&
                rightSideData.map((item, index) => (
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
    </Row>
  );
};

export default RightSideRibbon;
