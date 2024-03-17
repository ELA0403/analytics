import { Card, CardBody, CardFooter, Col, Row } from "reactstrap";
import VerticalStart from "./VerticalStart";
import VerticalCenter from "./VerticalCenter";
import VerticalEnd from "./VerticalEnd";
import FooterTable from "./FooterTable";
import { VerticalAlignments } from "../../../../utils/Constant";
import CommonHeader from "../../../../Common/CommonHeader";

const VerticalAlignment = () => {
  const submenuObj = [
    {
      text: "You can use the ",
      code: "align-items-*",
    },
    {
      text: " class to set the Vertical alignment.",
    },
  ];
  return (
    <Col sm={12}>
      <Card>
        <CommonHeader title={VerticalAlignments} subTitle={submenuObj} headClass='pb-0'/>
        <CardBody className="grid-showcase mb-0">
          <Row>
            <VerticalStart />
            <VerticalCenter />
            <VerticalEnd />
          </Row>
        </CardBody>
        <CardFooter>
          <FooterTable />
        </CardFooter>
      </Card>
    </Col>
  );
};

export default VerticalAlignment;
