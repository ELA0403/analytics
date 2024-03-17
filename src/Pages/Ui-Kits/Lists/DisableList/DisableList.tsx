import { Card, CardBody, Col, ListGroup, ListGroupItem } from "reactstrap";
import { Image } from "../../../../AbstractElements";
import { disableListData } from "../../../../Data/Ui-Kits/ListsData";
import { dynamicImage } from "../../../../Service";
import { Disabledlists } from "../../../../utils/Constant";
import CommonHeader from "../../../../Common/CommonHeader";

const DisableList = () => {
  const submenuObj = [
    {
      text: "Use",
      code: " .disabled ",
    },
    {
      text: "to a ",
      code: ".list-group-item",
    },
    {
      text: " to make it appear disabled.",
    },
  ];
  return (
    <Col xxl={4} md={6}>
      <Card>
        <CommonHeader title={Disabledlists} subTitle={submenuObj} headClass="pb-0" />
        <CardBody>
          <ListGroup className="disabled-lists">
            <ListGroupItem className={`list-group-item-action list-hover-primary active`} >
                <Image className="rounded-circle" src={dynamicImage('user/1.jpg')} alt="user" width={100} height={100}/>
                {'Teresa J. Mosteller'}
            </ListGroupItem>
            {disableListData &&
              disableListData.map((item, index) => (
                <ListGroupItem className={`list-group-item-action ${item.class}`} key={index} >
                  <Image className="rounded-circle" src={dynamicImage(item.img)} alt="user" width={100} height={100}/>
                  {item.text}
                </ListGroupItem>
              ))}
          </ListGroup>
        </CardBody>
      </Card>
    </Col>
  );
};

export default DisableList;
