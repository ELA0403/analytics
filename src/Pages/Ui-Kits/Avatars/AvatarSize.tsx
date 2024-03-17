import { Card, CardBody, Col } from "reactstrap";
import { Image } from "../../../AbstractElements";
import { dynamicImage } from "../../../Service";
import { avatarSizeData } from "../../../Data/Ui-Kits/AvatarData";
import { Sizes } from "../../../utils/Constant";
import CommonHeader from "../../../Common/CommonHeader";

const AvatarSize = () => {
  const submenuObj = [
    {
      text: "You can change the size of avatar using ",
      code: ".img- *  (70/80/90/100)",
    },
    {
      text: " class.",
    },
  ];
  return (
    <Col xl={4} md={6}>
      <Card className="height-equal">
        <CommonHeader title={Sizes} subTitle={submenuObj} headClass='pb-0'/>
        <CardBody className="avatar-showcase">
          <div className="avatars">
            <div className="avatar">
              <Image className='img-100 rounded-circle' src={dynamicImage('avtar/3.jpg')}
                alt="#"
                width={100}
                height={100}
              />
            </div>
            {avatarSizeData &&
              avatarSizeData.map((item, index) => (
                <div key={index} className="avatar">
                  <Image
                    className={item.class}
                    src={dynamicImage(item.image)}
                    alt="#"
                    width={100}
                    height={100}
                  />
                </div>
              ))}
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default AvatarSize;
