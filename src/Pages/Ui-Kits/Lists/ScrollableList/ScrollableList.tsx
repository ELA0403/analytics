import { Card, CardBody, Col, ListGroup, ListGroupItem } from "reactstrap";
import { Scrollablelists } from "../../../../utils/Constant";
import { H6, Image, P } from "../../../../AbstractElements";
import { dynamicImage } from "../../../../Service";
import ScrollableListBody from "./ScrollableListBody";
import CommonHeader from "../../../../Common/CommonHeader";

const ScrollableList = () => {
  const submenuObj = [
    {
      text: "Use the property ",
      code: "overflow:auto ",
    },
    {
      text: "through scrollable lists.",
    },
  ];
  return (
    <Col xxl={4}>
      <Card>
        <CommonHeader title={Scrollablelists} subTitle={submenuObj} headClass="pb-0" />
        <CardBody>
          <ListGroup className="main-lists-content scrollbar-wrapper">
          <ListGroupItem className="list-group-item-action list-hover-primary active" >
                <div className="list-wrapper gap-0">
                    <Image className="list-img" src={dynamicImage('user/9.jpg')} alt="profile" width={100} height={100}/>
                    <div className="list-content">
                        <H6>{'Molly Boake'}</H6>
                        <P>{'MollyBoake@rhyta.com'}</P>
                        <small>{'5 days ago'}</small>
                    </div>
                </div>
            </ListGroupItem>
            <ScrollableListBody />
          </ListGroup>
        </CardBody>
      </Card>
    </Col>
  );
};

export default ScrollableList;
