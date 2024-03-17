import { Badge, Card, CardBody, Col } from "reactstrap";
import CommonHeader from "../../../../Common/CommonHeader";
import { BadgesScrollbar } from "../../../../utils/Constant";
import Scrollbars from "react-custom-scrollbars-2";
import { badgeScrollData } from "../../../../Data/BonusUi/ScrollableData";
import { LI } from "../../../../AbstractElements";

const BadgesScroll = () => {
  const submenuObj = [
    {
      text: "Use the",
      code: ".badge ",
    },
    {
      text: " class through create more badges and ",
      code: ".vertical-scroll ",
    },
    {
      text: "used as vertical scroll. ",
    },
  ];
  return (
    <Col xxl={4} md={6}>
      <Card>
        <CommonHeader title={BadgesScrollbar} subTitle={submenuObj} headClass="pb-0"/>
        <CardBody>
          <Scrollbars className="vertical-scroll scroll-demo scroll-b-none" style={{ width: "100%", height: 300 }} >
            <ol className="list-group list-group-numbered scroll-rtl">
              {badgeScrollData &&
                badgeScrollData.map((item, index) => (
                  <LI className={`d-flex align-items-start flex-wrap ${index === badgeScrollData.length - 1 && "justify-content-between" }`} key={index} >
                    <div className="ms-2 me-auto">{item.text}</div>
                    <Badge pill color={item.class} className="p-2">
                      {item.badge}
                    </Badge>
                  </LI>
                ))}
            </ol>
          </Scrollbars>
        </CardBody>
      </Card>
    </Col>
  );
};

export default BadgesScroll;
