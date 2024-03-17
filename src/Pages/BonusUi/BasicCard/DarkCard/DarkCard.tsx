import { Card, CardBody, CardFooter, CardHeader, Col } from "reactstrap";
import { H3, H6, Image, P } from "../../../../AbstractElements";
import { dynamicImage } from "../../../../Service";
import { Card_Footer, DarkBodytext, DarkColorCard, DarkHeadtext } from "../../../../utils/Constant";

const DarkCard = () => {
  return (
    <Col sm={12}>
      <Card className="Dark-Card">
        <CardHeader className="bg-dark pb-0">
          <H3 className="text-white">{DarkColorCard}</H3>
          <P className="f-m-light mt-1">{DarkHeadtext}</P>
        </CardHeader>
        <CardBody className='bg-dark'>
            <div className="d-flex align-items-center gap-3 pills-blogger">
                <div className="blog-wrapper">
                    <Image className="blog-img" src={dynamicImage("dashboard-2/headphones.png")} alt="head-phone" />
                </div>
                <div className="blog-content">{DarkBodytext}</div>
            </div>
        </CardBody>
        <CardFooter className="bg-dark">
          <H6 className="mb-0">{Card_Footer}</H6>
        </CardFooter>
      </Card>
    </Col>
  );
};

export default DarkCard;
