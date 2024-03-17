import { Card, CardBody, CardHeader, Col } from "reactstrap";
import { H3, Image, P } from "../../../../AbstractElements";
import { dynamicImage } from "../../../../Service";
import { IconHeadtext, IconHeadtext2, IconInHeading } from "../../../../utils/Constant";

const HeadIcon = () => {
  return (
    <Col sm={12} xl={6}>
      <Card>
        <CardHeader className="pb-0">
          <H3>
            <i className="icofont icofont-library me-2" />
            {IconInHeading}
          </H3>
          <P className="f-m-light mt-1">{IconHeadtext}</P>
        </CardHeader>
        <CardBody>
          <div className="d-flex gap-3 align-items-center list-behavior-1">
            <div className="flex-shrink-0">
              <Image
                className="tab-img img-fluid"
                src={dynamicImage("blog/img.png")}
                alt="home"
              />
            </div>
            <div className="flex-grow-1 ms-0">{IconHeadtext2}</div>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default HeadIcon;
