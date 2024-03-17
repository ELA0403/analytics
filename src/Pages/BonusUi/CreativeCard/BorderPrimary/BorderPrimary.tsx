import { Card, CardBody, Col } from "reactstrap";
import CommonHeader from "../../../../Common/CommonHeader";
import { Image, LI, UL } from "../../../../AbstractElements";
import { BorderPrimaryState } from "../../../../utils/Constant";
import { borderPrimaryState } from "../../../../Data/BonusUi/CreativeCardData";
import { dynamicImage } from "../../../../Service";

const BorderPrimary = () => {
  const subMenu = [
    {
      text: "Use the class of",
      code: ".b-l-* ",
    },
    {
      text: "for left border and ",
      code: ".border-3 ",
    },
    {
      text: "is used to increase the width of the border.",
    },
  ];
  return (
    <Col md={6} xxl={4}>
      <Card className="height-equal">
        <CommonHeader title={BorderPrimaryState} subTitle={subMenu} headClass="border-l-primary border-3 pb-0"/>
        <CardBody>
          <UL className="disabled-lists">
            {borderPrimaryState.map((data,index) => (
              <LI className={`list-group-item-action pointer ${data.active && "active"}`} key={index}>
                <Image className="rounded-circle" src={dynamicImage(`user/${data.img}`)} alt="user" />
                {data.name}
              </LI>
            ))}
          </UL>
        </CardBody>
      </Card>
    </Col>
  );
};

export default BorderPrimary;
