import { Link } from "react-router-dom";
import { Card, CardBody, Col } from "reactstrap";
import { Href, Upgrade } from "../../../../utils/Constant";
import { H2, P } from "../../../../AbstractElements";

const ExclusiveSelection = () => {
  return (
    <Col xl="12">
      <Card className="update-card">
        <CardBody>
          <H2 className="text-white">
            {"Everyone may benefit from this exclusive selection."}
          </H2>
          <P className="text-white f-16">
            {"Everyone may benefit from this exclusive selection."}
          </P>
          <Link className="btn bg-white font-primary" to={Href}>
            {Upgrade}
          </Link>
        </CardBody>
      </Card>
    </Col>
  );
};

export default ExclusiveSelection;
