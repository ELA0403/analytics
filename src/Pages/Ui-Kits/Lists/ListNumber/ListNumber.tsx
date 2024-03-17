import { Card, CardBody, Col, ListGroup, ListGroupItem } from "reactstrap";
import { Listswithnumbers } from "../../../../utils/Constant";
import { numberListData } from "../../../../Data/Ui-Kits/ListsData";
import CommonHeader from "../../../../Common/CommonHeader";

const ListNumber = () => {
  const submenuObj = [
    {
      text: "Use the ",
      code: ".list-group-numbered",
    },
    {
      text: " to ordered wise print numbers.",
    },
  ];
  return (
    <Col xxl={4} md={6}>
      <Card>
        <CommonHeader title={Listswithnumbers} subTitle={submenuObj} headClass="pb-0"/>
        <CardBody>
          <ListGroup className="list-group-numbered">
            <ListGroupItem className="fw-bold txt-primary">
              {'known for delivery of useful and usable solutions'}
            </ListGroupItem>
            {numberListData &&
              numberListData.map((item, index) => (
                <ListGroupItem className={`fw-bold ${item.class}`} key={index}>
                  {item.text}
                </ListGroupItem>
              ))}
          </ListGroup>
        </CardBody>
      </Card>
    </Col>
  );
};

export default ListNumber;
