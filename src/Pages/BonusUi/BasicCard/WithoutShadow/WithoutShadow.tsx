import { Card, CardBody, Col } from "reactstrap";
import CommonHeader from "../../../../Common/CommonHeader";
import { Image, P } from "../../../../AbstractElements";
import { dynamicImage } from "../../../../Service";
import { ShadowCardText, WithoutshadowCard } from "../../../../utils/Constant";

const WithoutShadow = () => {
  const subMenu = [
    {
      text: "Use the",
      code: ".shadow-none ",
    },
    {
      text: "&",
      code: ".border ",
    },
    {
      text: "class through shadow removes.",
    },
  ];
  return (
    <Col sm={12} xl={6}>
      <Card className="shadow-none border">
        <CommonHeader title={WithoutshadowCard} subTitle={subMenu} headClass="pb-0"/>
        <CardBody>
          <div className="flex-space flex-wrap align-items-center">
            <Image
              className="tab-img"
              src={dynamicImage("avtar/3.jpg")}
              alt="profile"
              width={100}
              height={100}
            />
            <P>{ShadowCardText}</P>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default WithoutShadow;
