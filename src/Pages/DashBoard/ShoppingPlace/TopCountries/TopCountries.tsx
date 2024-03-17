import { Card, CardBody, CardHeader, Col } from "reactstrap";
import { TopCountrie } from "../../../../utils/Constant";
import TopCountriesBody from "./TopCountriesBody";
import { H3 } from "../../../../AbstractElements";

const TopCountries = () => {
  return (
    <Col xxl="3" xl="4" md="6" className="box-col-4">
      <Card className="use-country">
        <CardHeader>
          <H3 className="m-0">{TopCountrie}</H3>
        </CardHeader>
        <CardBody className="mt-0 state">
          <TopCountriesBody />
        </CardBody>
      </Card>
    </Col>
  );
};

export default TopCountries;
