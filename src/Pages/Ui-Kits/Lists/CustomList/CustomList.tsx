import { Card, CardBody, Col, ListGroup, ListGroupItem } from "reactstrap";
import { Customcontentlists } from "../../../../utils/Constant";
import { custonListData } from "../../../../Data/Ui-Kits/ListsData";
import { H6, Image, P } from "../../../../AbstractElements";
import { dynamicImage } from "../../../../Service";
import CommonHeader from "../../../../Common/CommonHeader";

const CustomList = () => {
  const submenuObj = [
    {
      text: "Use the ",
      code: ".list-group-item",
    },
    {
      text: " through make custom design of all lists.",
    },
  ];
  return (
    <Col md={12}>
      <Card>
        <CommonHeader title={Customcontentlists} subTitle={submenuObj} headClass="pb-0" />
        <CardBody>
          <ListGroup className="main-lists-content">
            {custonListData &&
              custonListData.map((item, index) => (
                <ListGroupItem className={`list-group-item-action ${item.class}`} key={index}>
                  <div className="d-flex w-100 justify-content-between align-items-center">
                    <div className="list-wrapper">
                      <Image className="list-img" src={dynamicImage(item.image)} alt="profile" width={100} height={100} />
                      <div className="list-content">
                        <H6>{item.head}</H6>
                        <P>{item.mail}</P>
                      </div>
                    </div>
                    <small>{item.span}</small>
                  </div>
                  <P className="mb-1">{item.subtext}</P>
                  <small
                    className={
                      item.class === "active bg-primary"
                        ? "text-white"
                        : "text-muted"
                    }
                  >
                    {item.follower}
                  </small>
                </ListGroupItem>
              ))}
          </ListGroup>
        </CardBody>
      </Card>
    </Col>
  );
};

export default CustomList;
