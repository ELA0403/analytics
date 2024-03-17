import { Card, CardBody, Col } from "reactstrap";
import { avatarRatioData } from "../../../Data/Ui-Kits/AvatarData";
import { Image } from "../../../AbstractElements";
import { dynamicImage } from "../../../Service";
import { Ratio } from "../../../utils/Constant";
import CommonHeader from "../../../Common/CommonHeader";

const AvatarRatio = () => {
  const submenuObj = [
    {
      text: "Give the shape to avatar using ",
      code: ".radio",
    },
    {
      text: " and",
      code: " img-* (50/70/80/90/100)",
    },
    {
      text: " class.",
    },
  ];
  return (
    <Col md={6}>
      <Card className="height-equal">
        <CommonHeader title={Ratio} subTitle={submenuObj} headClass='pb-0'/>
        <CardBody className="avatar-showcase">
          <div className="avatars">
            <div className="avatar ratio">
              <Image className='b-r-8 img-100' src={dynamicImage('avtar/11.jpg')} alt="#" width={100} height={100}/>
            </div>
            {avatarRatioData &&
              avatarRatioData.map((item, index) => (
                <div className="avatar ratio" key={index}>
                  <Image className={item.class} src={dynamicImage(item.image)} alt="#" width={100} height={100}/>
                </div>
              ))}
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default AvatarRatio;
