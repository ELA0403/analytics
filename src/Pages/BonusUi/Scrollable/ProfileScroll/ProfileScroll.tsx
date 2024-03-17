import { Card, CardBody, Col } from "reactstrap";
import CommonHeader from "../../../../Common/CommonHeader";
import { ProfileScrollable } from "../../../../utils/Constant";
import { Image, LI, UL } from "../../../../AbstractElements";
import { dynamicImage } from "../../../../Service";
import Scrollbars from "react-custom-scrollbars-2";
import { profileScrollData } from "../../../../Data/BonusUi/ScrollableData";

const ProfileScroll = () => {
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
    <Col xxl={4} md={6} className='profile-scroll'>
      <Card>
        <CommonHeader title={ProfileScrollable} subTitle={submenuObj} headClass="pb-0"/>
        <CardBody>
          <Scrollbars className="vertical-scroll scroll-demo scroll-b-none" style={{ width: "100%", height: 300 }} >
            <UL>
              {profileScrollData &&
                profileScrollData.map((item, index) => (
                  <LI className="list-group-item-action list-hover-primary" key={index}>
                    <Image className="rounded-circle" src={dynamicImage(item.img)} alt="user" width={100} height={100}/>
                    {item.text}
                  </LI>
                ))}
            </UL>
          </Scrollbars>
        </CardBody>
      </Card>
    </Col>
  );
};

export default ProfileScroll;
