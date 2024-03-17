import { Card, CardBody, Col } from "reactstrap";
import { imageData } from "../../../../Data/Ui-Kits/HelperClassData";
import { dynamicImage } from "../../../../Service";
import { Image } from "../../../../AbstractElements";
import { ImagesSizes } from "../../../../utils/Constant";
import CommonHeader from "../../../../Common/CommonHeader";

const ImageSize = () => {
  const submenuObj = [
    {
      text: "Use the width and height of images class like: ",
      code: ".img-*",
    },
    {
      text: "and",
      code: ".img-h-*",
    },
    {
      text: ".",
    },
  ];
  return (
    <Col xl={6}>
      <Card className="height-equal">
        <CommonHeader title={ImagesSizes} subTitle={submenuObj} headClass='pb-0'/>
        <CardBody>
          <div className="gradient-border gap-3">
            <Image className={'img-30 img-h-30'} src={dynamicImage(`blog/comment.jpg`)} alt="img-size-10"/>
            {imageData &&
              imageData.map((item, index) => (
                <Image
                  className={item.class}
                  src={dynamicImage(`blog/comment.jpg`)}
                  alt="img-size-10"
                  key={index}
                />
              ))}
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default ImageSize;
