import { Card, CardBody, Col } from "reactstrap";
import CommonHeader from "../../../../Common/CommonHeader";
import Scrollbars from "react-custom-scrollbars-2";
import { scrollableContentData } from "../../../../Data/BonusUi/ScrollableData";
import { H3, Image, LI, P, UL } from "../../../../AbstractElements";
import { dynamicImage } from "../../../../Service";
import { ScrollableContents } from "../../../../utils/Constant";

const ScrollableContent = () => {
  const submenuObj = [
    {
      text: "Use the ",
      code: ".list-group-item ",
    },
    {
      text: "through made profile and with used ",
      code: ".vertical-scroll.",
    },
  ];
  return (
    <Col xxl={4} md={12}>
      <Card>
        <CommonHeader title={ScrollableContents} subTitle={submenuObj} headClass="pb-0"/>
        <CardBody>
          <Scrollbars className="vertical-scroll scroll-demo scroll-b-none" style={{ width: "100%", height: 300 }} >
            <UL className="main-lists-content">
              {scrollableContentData &&
                scrollableContentData.map((item, index) => (
                  <LI
                    className={`list-group-item-action list-hover-primary ${
                      index === 0 && "active"
                    }`} key={index}
                  >
                    <div className="list-wrapper gap-0">
                      <Image className="list-img" src={dynamicImage(item.img)} alt="profile" width={100} height={100}/>
                      <div className="list-content">
                        <H3>{item.head}</H3>
                        <P>{item.mail}</P>
                        {index === 0 ? (
                          <small>{item.small}</small>
                        ) : (
                          <small className="text-muted">{item.small}</small>
                        )}
                      </div>
                    </div>
                  </LI>
                ))}
            </UL>
          </Scrollbars>
        </CardBody>
      </Card>
    </Col>
  );
};

export default ScrollableContent;
