import { Card, CardBody, CardFooter, CardHeader, Col } from "reactstrap";
import { H3, P } from "../../../../AbstractElements";
import { CionTheme, FooterInfotext, InfoFooter, WebDeveloper } from "../../../../utils/Constant";

const InfoColorFooter = () => {
  return (
    <Col xl={4} sm={6}>
      <Card className="height-equal">
        <CardHeader className="pb-0">
          <H3>{InfoFooter}</H3>
        </CardHeader>
        <CardBody>
          <H3 className="pb-2">{WebDeveloper}</H3>
          <P className="mb-0">{FooterInfotext}</P>
        </CardBody>
        <CardFooter className="bg-info">
          <H3 className="mb-0 text-end">{CionTheme}</H3>
        </CardFooter>
      </Card>
    </Col>
  );
};

export default InfoColorFooter;
