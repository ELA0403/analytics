import { Card, CardBody, Col } from "reactstrap";
import CommonHeader from "../../../../Common/CommonHeader";
import { ColoredBreadcrumb } from "../../../../utils/Constant";
import BgInfo from "./BgInfo";
import BgWarning from "./BgWarning";
import BgDanger from "./BgDanger";

const ColoredBread = () => {
  const subMenu = [
    {
      text: "You can set breadcrumb using ",
      code: ".breadcrumb ",
    },
    {
      text: " class and set background colors like ",
      code: "[.bg-*].",
    },
  ];
  return (
    <Col sm={12}>
      <Card>
        <CommonHeader title={ColoredBreadcrumb} subTitle={subMenu} headClass="pb-0"/>
        <CardBody>
          <BgInfo />
          <BgWarning />
          <BgDanger />
        </CardBody>
      </Card>
    </Col>
  );
};

export default ColoredBread;
