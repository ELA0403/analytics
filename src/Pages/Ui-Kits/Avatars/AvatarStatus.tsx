import { Card, CardBody, Col } from "reactstrap";
import { Image } from "../../../AbstractElements";
import { dynamicImage } from "../../../Service";
import { avatarStatusData } from "../../../Data/Ui-Kits/AvatarData";
import { StatusIndicator } from "../../../utils/Constant";
import CommonHeader from "../../../Common/CommonHeader";

const AvatarStatus = () => {
  const submenuObj = [
    {
      text: "Using ",
      code: " .status-* (online/offline/dnd)",
    },
    {
      text: " class you can set the status of avatar.",
    },
  ];
  return (
    <Col xl={4} md={6}>
      <Card className="height-equal">
        <CommonHeader title={StatusIndicator} subTitle={submenuObj} headClass='pb-0'/>
        <CardBody className="avatar-showcase">
          <div className="avatars">
            <div className="avatar">
              <Image
                className='img-100 rounded-circle'
                src={dynamicImage('user/1.jpg')}
                alt="#"
                width={100}
                height={100}
              />
              <div className='status status-online' />
            </div>
            {avatarStatusData &&
              avatarStatusData.map((item, index) => (
                <div className="avatar" key={index}>
                  <Image
                    className={item.class}
                    src={dynamicImage(item.image)}
                    alt="#"
                    width={100}
                    height={100}
                  />
                  <div className={`status ${item.status}`} />
                </div>
              ))}
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default AvatarStatus;
