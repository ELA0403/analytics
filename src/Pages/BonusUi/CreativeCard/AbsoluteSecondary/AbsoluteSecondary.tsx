import { Card, CardBody, CardHeader, Col } from "reactstrap";
import { dynamicImage } from "../../../../Service";
import { H5, Image, P } from "../../../../AbstractElements";
import { AbsoluteCard, AbsoluteSecondarytext } from "../../../../utils/Constant";

const AbsoluteSecondary = () => {
  return (
    <Col sm={12} xl={6}>
      <Card className="card-absolute">
        <CardHeader className="bg-secondary">
          <H5 className="txt-light">{AbsoluteCard}</H5>
        </CardHeader>
        <CardBody>
          <div className="d-flex list-behavior-1 align-items-center mt-2">
            <div className="flex-shrink-0">
              <Image className="tab-img img-fluid" src={dynamicImage("blog/blog.jpg")} alt="home" />
            </div>
            <div className="flex-grow-1">
              <P className="mb-xl-0 mb-sm-4">{AbsoluteSecondarytext}</P>
            </div>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default AbsoluteSecondary;
