import { Card, CardBody, Col, Row } from "reactstrap";
import CommonHeader from "../../../../Common/CommonHeader";
import { HorizontalScrollbar } from "../../../../utils/Constant";
import ScrollBar from "react-perfect-scrollbar";
import { horizontalData } from "../../../../Data/BonusUi/ScrollableData";
import { Image } from "../../../../AbstractElements";
import { dynamicImage } from "../../../../Service";

const HorizontalScroll = () => {
  const submenuObj = [
    {
      text: "Use the ",
      code: ".horizontal-scroll ",
    },
    {
      text: "through move content horizontally.",
    },
  ];
  return (
    <Col xl={6}>
      <Card>
        <CommonHeader title={HorizontalScrollbar} subTitle={submenuObj} />
        <CardBody>
          <ScrollBar className="horizontal-scroll scroll-demo" style={{ width: "100%", height: 300 }} >
            <div className="horz-scroll-content">
              <Row>
                {horizontalData &&
                  horizontalData.map((item, index) => (
                    <Col sm={2} key={index}>
                      <div className="horizontal-img">
                        <Image className="img-fluid" src={dynamicImage(`scrollbar/${item}`)} alt="girl"/>
                      </div>
                    </Col>
                  ))}
              </Row>
            </div>
          </ScrollBar>
        </CardBody>
      </Card>
    </Col>
  );
};

export default HorizontalScroll;
