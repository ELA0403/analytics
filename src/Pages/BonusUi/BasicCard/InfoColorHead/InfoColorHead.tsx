import { Card, CardBody, CardFooter, CardHeader, Col } from "reactstrap";
import { H3, P } from "../../../../AbstractElements";
import { CionTheme, InfoColorHeader, InfoHeadText, WebDesigner } from "../../../../utils/Constant";

const InfoColorHead = () => {
  return (
    <Col xl={4}>
      <Card className="height-equal">
        <CardHeader className="bg-info">
          <H3 className="text-white">{InfoColorHeader}</H3>
        </CardHeader>
        <CardBody>
          <H3 className="pb-2">{WebDesigner}</H3>
          <P className="mb-0">{InfoHeadText}</P>
        </CardBody>
        <CardFooter>
          <H3 className="mb-0 text-end">{CionTheme}</H3>
        </CardFooter>
      </Card>
    </Col>
  );
};

export default InfoColorHead;
