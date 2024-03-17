import { Card, CardBody, Col } from "reactstrap";
import { avatarShapeData } from "../../../Data/Ui-Kits/AvatarData";
import { Image } from "../../../AbstractElements";
import { dynamicImage } from "../../../Service";
import { Shapes } from "../../../utils/Constant";
import CommonHeader from "../../../Common/CommonHeader";

const AvatarShapes = () => {
  const submenuObj = [
    {
      text: "Using the",
      code: ".b-r-* (8/30/35/25)",
    },
    {
      text: " class you can set the shapes of avatar.",
    },
  ];
  return (
    <Col xl={4} md={6}>
      <Card className="height-equal">
        <CommonHeader title={Shapes} subTitle={submenuObj} headClass='pb-0'/>
        <CardBody className="avatar-showcase">
          <div className="avatars">
            <div className="avatar">
              <Image className='img-100 b-r-8' src={dynamicImage('avtar/4.jpg')} alt="#" width={100} height={100}/>
            </div>
            {avatarShapeData &&
              avatarShapeData.map((item, index) => (
                <div key={index} className="avatar">
                  <Image className={item.class} src={dynamicImage(item.image)} alt="#" width={100} height={100}/>
                </div>
              ))}
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default AvatarShapes;
