import { Card, CardBody, CardFooter, Col } from "reactstrap";
import HorizontalStart from "./HorizontalStart";
import HorizontalCenter from "./HorizontalCenter";
import HorizontalEnd from "./HorizontalEnd";
import HorizontalTable from "./HorizontalTable";
import { HorizontalAlignments } from "../../../../utils/Constant";
import CommonHeader from "../../../../Common/CommonHeader";

const HorizontalAlignment = () => {
  const submenuObj = [
    {
      text: "You can use the ",
      code: "justify-content-*",
    },
    {
      text: " class to set the horizontal alignment.",
    },
  ];
  return (
    <Col sm={12}>
      <Card>
        <CommonHeader title={HorizontalAlignments} subTitle={submenuObj} headClass='pb-0'/>
        <CardBody className="grid-showcase grid-align">
          <HorizontalStart />
          <HorizontalCenter />
          <HorizontalEnd />
        </CardBody>
        <CardFooter>
          <HorizontalTable />
        </CardFooter>
      </Card>
    </Col>
  );
};

export default HorizontalAlignment;
