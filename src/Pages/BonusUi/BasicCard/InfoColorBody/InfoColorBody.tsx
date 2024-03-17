import { Card, CardBody, CardFooter, CardHeader, Col } from "reactstrap";
import { H3, P } from "../../../../AbstractElements";
import { CionTheme, InfoBodyText, InfoColorBodys, UXDesigner } from "../../../../utils/Constant";

const InfoColorBody = () => {
  return (
    <Col xl={4} sm={6}>
      <Card className="height-equal">
        <CardHeader>
          <H3>{InfoColorBodys}</H3>
        </CardHeader>
        <CardBody className="bg-info text-white">
          <H3 className="pb-2">{UXDesigner} </H3>
          <P className="mb-0">{InfoBodyText}</P>
        </CardBody>
        <CardFooter>
          <H3 className="mb-0 text-end">{CionTheme}</H3>
        </CardFooter>
      </Card>
    </Col>
  );
};

export default InfoColorBody;
